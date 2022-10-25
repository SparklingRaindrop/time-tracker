import { useEffect, useState } from 'react';
import uuid4 from 'uuid4';
import {
    fetchUserId,
    fetchData,
    deleteData,
    patchData,
    postData,
    fetchProjects,
} from '../JS/api';
import { filterLogDataByDuration } from '../JS/date';

export default function useFetchedData() {
    const [userId, setUserId] = useState(null);
    const [projects, setProjects] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [logs, setLogs] = useState([]);
    const [onGoingTimers, setOnGoingTimers] = useState([]);

    async function getProjects() {
        const response = await fetchData(`/projects?user_id=${userId}`);
        return response;
    }

    async function updateProjects(newProjects) {
        const { status, data } = newProjects;
        if (status === 200) {
            setProjects(data);
        }
    }
    
    async function getTasks(projectId) {
        const { status, data } = await fetchData(`/tasks?project_id=${projectId}`);
        if (status === 200) {
            return data;
        } else {
            console.log('error');
        }
    }

    async function updateTasks() {
        const projectIdList = projects.map(({id}) => id);
        const fetchList = projectIdList.map(projectId => getTasks(projectId));
        const results = await Promise.all(fetchList);
        setTasks(results.flat());
    }

    async function getLogs(taskId) {
        const { status, data } = await fetchData(`/logs?task_id=${taskId}`);
        if (status === 200) {
            return data;
        } else {
            console.log('error');
        }
    }

    async function updateLogs(newTasks) {
        const taskIdList = newTasks.map(({id}) => id);
        const fetchList = taskIdList.map(taskId => getLogs(taskId));
        const data = await Promise.all(fetchList);
        const result = data.flat().map(log => {
            const {start, end} = log;
            if (start && !end) {
                log.isActive = true
            } else {
                log.isActive = false
            }
            return log;
        });
        setLogs(result);
    }
    
    // Getting tasks that are related with projects
    useEffect(() => {
        if (projects.length === 0) return;
        updateTasks();
    }, [projects]);

    // Getting Logs that are related with tasks
    useEffect(() => {
        updateLogs(tasks);
    }, [tasks]);

    // Generating list for active logs
    useEffect(() => {
        if (logs.length === 0) return;
        const result = [];
        logs.forEach(({isActive}, index) => {
            if (isActive) {
                result.push(index);
            }
        });
        setOnGoingTimers(result);
    }, [logs]);

    // Updating "end" value for logs that are on going.
    useEffect(() => {
        if (onGoingTimers.length === 0) return;

        function updateStopWatch() {
            const currentTime = new Date().toString();
            setLogs(prev => {
                const newLogs = [...prev];
                newLogs.forEach((log, index) => {
                    onGoingTimers.forEach(targetIndex => {
                        if (targetIndex === index) {
                            log.end = currentTime;
                        }
                        return;
                    })
                })
                return newLogs;
            });
        }

        const id = setInterval(updateStopWatch, 1000);
        return () => clearInterval(id);
    }, [onGoingTimers]);

    function getProjectColorByTaskId(taskId) {
        const projectId = tasks.find(task => task.id === taskId).project_id;
        const parentProject = projects.find(p => p.id === projectId);
        return parentProject.color;
    }

    function getProjectTitleByProjectId(projectId) {
        const targetProject = projects.find(project => project.id === projectId);
        return targetProject.name;
    }

    function getLogDataByTaskId(taskId) {
        const result = logs.filter(l => l.task_id === taskId);
        return result.length === 0 ? undefined : result;
    }

    function getTasksByProjectId(projectId) {
        return tasks.filter(task => task.project_id === projectId);
    }

    function getLogDataByLogId(logId) {
        return logs.find(log => log.id === logId);
    }

    function getTaskTitleByTaskId(taskId) {
        return tasks.find(task => task.id === taskId).title;
    }

    function getActiveTasksByProjectId(projectId) {
        const targetTasks = tasks.filter(({project_id}) => project_id === projectId);
        const targetLogs = targetTasks.map(task => logs.filter(log => log.task_id === task.id)).flat();
        return targetLogs.filter(log => log.isActive);
    }

    function filterLogsByDuration(duration) {
        return filterLogDataByDuration(duration, logs);
    }

    async function startTimer(taskId) {
        const data = {
            task_id: taskId,
            start: new Date().toString(),
            end: null,
            id: uuid4()
        };
        const {status} = await postData(`/logs`, data);
        if (status === 201) {
            // TODO check status for fetch?
            updateLogs(tasks);
        }
        return { status };
    }
    
    async function stopTimer(logId) {
        const data = {
            end: new Date().toString()
        };
        const {status} = await patchData(`/logs/${logId}`, data);
        if (status === 200) {
            // TODO check status for fetch?
            updateLogs(tasks)
        }
        return { status };
    }

    async function removeData(endpoint) {
        const {status} = await deleteData(endpoint);
        if (status === 200) {
            // TODO check status for fetch?
            const data = await getProjects(userId);
            updateProjects(data);
        } else {
            console.error('Error in removeData')
        }
        return { status };
    }

    async function editData(endpoint, data) {
        const {status} = await patchData(endpoint, data);
        if (status === 200) {
            // TODO check status for fetch?
            const data = await fetchProjects(userId);
            updateProjects(data);
        }
        return { status };
    }

    async function createProject(newData) {
        const data= {
            ...newData,
            user_id: userId,
            id: uuid4(),
        };

        const {status} = await postData('/projects', data);
        if (status === 201) {
            // TODO check status for fetch?
            const data = await getProjects(userId);
            updateProjects(data);
        }
        return { status };
    }

    async function createTask(projectId, newData) {
        const data= {
            ...newData,
            project_id: projectId,
            id: uuid4(),
        };

        const {status} = await postData('/tasks', data);
        if (status === 201) {
            // TODO check status for fetch? SHould I fetch projects or just tasks for this project??
            const data = await getProjects(userId);
            updateProjects(data);
        }
        return { status };
    }

    return {
        projects,
        userId,
        tasks,
        logs,
        setUserId,
        getProjects,
        updateProjects,
        fetchUserId,
        getLogDataByLogId,
        getLogDataByTaskId,
        getTasksByProjectId,
        getActiveTasksByProjectId,
        getProjectColorByTaskId,
        getProjectTitleByProjectId,
        getTaskTitleByTaskId,
        filterLogsByDuration,
        createProject,
        createTask,
        startTimer,
        stopTimer,
        removeData,
        editData,
    }
}
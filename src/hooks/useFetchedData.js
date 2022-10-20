import { useEffect, useState } from 'react';
import {
    fetchUserId,
    fetchProjects,
    fetchTasks,
    fetchLogs,
    postStartDate,
    patchEndDate,
    deleteData,
    patchData,
} from '../JS/api';

export default function useFetchedData() {
    //const [userId, setUserId] = useState(null); DO NOT DELETE
    const userId = '2';
    const [projects, setProjects] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [logs, setLogs] = useState([]);
    const [onGoingTimers, setOnGoingTimers] = useState([]);

    async function getTasks(projectIs) {
        const { status, data } = await fetchTasks(projectIs);
        if (status === 200) {
            return data;
        } else {
            console.log('error');
        }
    }
    async function getProjects() {
        const { status, data } = await fetchProjects(userId);
        if (status === 200) {
            setProjects(data);
        }
    }

    async function updateTasks() {
        const projectIdList = projects.map(({id}) => id);
        const fetchList = projectIdList.map(projectId => getTasks(projectId));
        const results = await Promise.all(fetchList);
        setTasks(results.flat());
    }

    async function getLogs(taskId) {
        const { status, data } = await fetchLogs(taskId);
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

    async function startTimer(taskId) {
        const {status} = await postStartDate(taskId);
        if (status === 201) {
            // TODO check status for fetch?
            updateLogs(tasks);
        }
    }
    
    async function stopTimer(logId) {
        const {status} = await patchEndDate(logId);
        if (status === 200) {
            // TODO check status for fetch?
            updateLogs(tasks)
        }
    }

    async function removeData(endpoint) {
        const {status} = await deleteData(endpoint);
        if (status === 200) {
            // TODO check status for fetch?
            getProjects();
        } else {
            console.error('Error in removeData')
        }
    }

    async function editData(endpoint, data) {
        const {status} = await patchData(endpoint, data);
        if (status === 200) {
            // check status for fetch?
            getProjects();
        }
    }

    return {
        projects,
        userId,
        tasks,
        logs,
        //setUserId, DO NOT DELETE
        getProjects,
        fetchUserId,
        getLogDataByLogId,
        getLogDataByTaskId,
        getTasksByProjectId,
        getActiveTasksByProjectId,
        getProjectColorByTaskId,
        getTaskTitleByTaskId,
        startTimer,
        stopTimer,
        removeData,
        editData,
    }
}
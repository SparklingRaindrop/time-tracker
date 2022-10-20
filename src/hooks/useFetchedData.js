import { useEffect, useState } from 'react';
import {
    getUserId,
    getProjects,
    getTasks,
    getLogs
} from '../JS/api';

export default function useFetchedData() {
    //const [userId, setUserId] = useState(null); DO NOT DELETE
    const userId = '2';
    const [projects, setProjects] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [logs, setLogs] = useState([]);
    const [onGoingTimers, setOnGoingTimers] = useState([]);

    // Getting Logs that are related with the user
    useEffect(() => {
        async function fetchTasks(projectIs) {
            const { status, data } = await getTasks(projectIs);
            if (status === 200) {
                return data;
            } else {
                console.log('error');
            }
        }

        async function updateTasks() {
            const projectIdList = projects.map(({id}) => id);
            const fetchList = projectIdList.map(projectId => fetchTasks(projectId));
            const results = await Promise.all(fetchList);
            setTasks(results.flat());
        }

        
        updateTasks();
    }, [projects]);

    // Getting Logs that are related with tasks
    useEffect(() => {
        async function fetchLogs(taskId) {
            const { status, data } = await getLogs(taskId);
            if (status === 200) {
                return data;
            } else {
                console.log('error');
            }
        }

        async function updateLogs(newTasks) {
            const taskIdList = newTasks.map(({id}) => id);
            const fetchList = taskIdList.map(taskId => fetchLogs(taskId));
            const results = await Promise.all(fetchList);
            setLogs(results.flat());
        }

        updateLogs(tasks);
    }, [tasks]);

    // Generating list for logs that needs to update in the next useEffect
    useEffect(() => {
        // Only run when onGoingTimers doesn't exist
        if (logs.length === 0 || onGoingTimers.length > 0) return;
        const result = [];
        logs.forEach((log, index) => {
            if (log.start && !log.end) {
                result.push(index);
            }
        });
        setOnGoingTimers(result);
    }, [logs, onGoingTimers]);

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

    function getProjectColor(projectId) {
        const parentProject = projects.find(p => p.id === projectId);
        return parentProject.color;
    }

    function getLogData(taskId) {
        const index = logs.findIndex(l => l.task_id === taskId);
        const targetLog = logs.find(l => l.task_id === taskId);
        return {
            ...targetLog,
            isActive: onGoingTimers.includes(index)
        };
    }

    return {
        projects,
        userId,
        tasks,
        logs,
        //setUserId, DO NOT DELETE
        setProjects,
        getUserId,
        getProjects,
        getProjectColor,
        getLogData
    }
}
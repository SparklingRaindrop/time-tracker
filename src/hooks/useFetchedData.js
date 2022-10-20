import { useEffect, useState } from 'react';
import {
    getUserId,
    getProjects,
    getTasks,
    getLogs
} from '../JS/api';

export default function useFetchedData() {
    //const [userId, setUserId] = useState(null);
    const userId = '2';
    const [projects, setProjects] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [logs, setLogs] = useState([]);

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
    }, [tasks])

    return {
        projects,
        userId,
        tasks,
        logs,
        //setUserId,
        setProjects,
        getUserId,
        getProjects,
    }
}
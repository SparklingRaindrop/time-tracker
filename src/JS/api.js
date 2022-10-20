// https://www.npmjs.com/package/json-server
// https://axios-http.com/
import axios from 'axios';

const BASE_URL = 'http://localhost:4000'
const fetch = axios.create({
    baseURL: BASE_URL,
});

export async function fetchUserId(value) {
    const response = await fetch.get(`/users?username=${value}`)
        .then(({ data, status }) => {
            if (data.length === 0 || data.length > 1) {
                // the server will never response with 400
                return 400;
            }
            return {
                status,
                data: {
                    ...data[0]
                }
            };
        })
        .catch((error) => error);
    return response;
}

export async function fetchProjects(userId) {
    const response = await fetch.get(`/projects?user_id=${userId}`)
        .then(({ data, status }) => {
            if (status === 400) {
                return { status };
            }
            return {
                status,
                data: data,
            };
        })
        .catch((error) => error);
    return response;
}

export async function fetchTasks(projectId) {
    const response = await fetch.get(`/tasks?project_id=${projectId}`)
        .then(({ data, status }) => {
            if (status === 400) {
                return { status };
            }
            return {
                status,
                data: data,
            };
        })
        .catch((error) => error);
    return response;
}

export async function fetchLogs(taskId) {
    const response = await fetch.get(`/logs?task_id=${taskId}`)
        .then(({data, status }) => {
            if (status === 400) {
                return { status };
            }
            return {
                status,
                data: data,
            };
        })
        .catch((error) => error);
    return response;
}

export async function patchStartDate(logId) {
    const data = {
        start: new Date().toString()
    };

    const response = await fetch.patch(`/logs/${logId}`, data, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(({ data, status }) => {
            return {
                status,
                data: data,
            };
        })
        .catch((error) => error);
    return response;
}
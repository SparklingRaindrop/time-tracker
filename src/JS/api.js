// https://www.npmjs.com/package/json-server
// https://axios-http.com/
import axios from 'axios';

const BASE_URL = 'http://localhost:4000'
const fetch = axios.create({
    baseURL: BASE_URL,
});

export async function getUserId(value) {
    const response = await fetch.get(`/users?username=${value}`)
        .then(res => {
            const { data, status } = res;
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

export async function getProjects(userId) {
    const response = await fetch.get(`/projects?user_id=${userId}`)
        .then(res => {
            const { data, status } = res;
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

export async function getTasks(projectId) {
    const response = await fetch.get(`/tasks?project_id=${projectId}`)
        .then(res => {
            const { data, status } = res;
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

export async function getLogs(taskId) {
    const response = await fetch.get(`/logs?task_id=${taskId}`)
        .then(res => {
            const { data, status } = res;
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
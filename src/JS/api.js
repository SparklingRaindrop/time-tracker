import axios from 'axios';
// https://www.npmjs.com/package/json-server
// https://axios-http.com/

const fetch = axios.create({
    // eslint-disable-next-line
    baseURL: process.env.REACT_APP_BASE_URL,
});

export async function fetchData(endpoint) {
    const response = await fetch.get(endpoint)
        .then(({ data, status }) => {
            return {
                status,
                data,
            };
        })
        .catch((error) => error);
    return response;
}

export async function postData(endpoint, data) {
    const response = await fetch.post(endpoint, data, {
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

export async function deleteData(endpoint) {
    const response = await fetch.delete(endpoint)
        .then(({ status }) => {
            return {
                status,
            };
        })
        .catch((error) => error);
    return response;
}

export async function patchData(endpoint, data) {
    const response = await fetch.patch(endpoint, data, {
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

export async function fetchUserId(username) {
    const response = await fetchData(`/users?username=${username}`);
    return response;
}

export async function fetchProjects(userId) {
    const response = await fetchData(`/projects?userId=${userId}`);
    return response;
}

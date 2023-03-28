import axios, { AxiosResponse } from "axios";

export interface RepoType {
    id: number
    name: string
    full_name: string
    html_url: string
}

export const api = axios.create({
    baseURL: 'https://api.github.com/'
})

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => api.get(url).then(responseBody)
}

export const Repos = {
    getRepo: (repo: string) => {
        return requests.get(`repos/${repo}`)
    }
}
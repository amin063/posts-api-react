import { apiUrl } from "../api";

export const postApi = {
    getPost: () => {
        return fetch(apiUrl)
            .then(res => res.json())
            .then(data => data.posts)
            .catch(error => console.console.log(error))
    }
}
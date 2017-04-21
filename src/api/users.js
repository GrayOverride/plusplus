export default class UsersApi {
    static getUsers() {
        fetch('http://activity.cdx.cloud/api/users')
            .then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return Promise.resolve(response)
                } else {
                    return Promise.reject(new Error(response.statusText))
                }
            })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log('Request succeded ', data);
            }).catch((error) => {
                console.log('Request failed ', error);
            })
    }
}



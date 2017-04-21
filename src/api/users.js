export default class UsersApi {
    static getUsers() {
        return new Promise(resolve => {
            fetch('http://activity.cdx.cloud/api/users')
                .then((response) => {
                    resolve(response.json())
                })
        })
    }
}



export default class UsersApi {
    static getUsers() {
        return fetch(__BASE_URL__ + '/api/users')
            .then((response) => response.json())
    }

    static incrementPoints(userId) {
        return () => {
            return fetch(__BASE_URL__ + '/api/users/' + userId + '/plusplus', {
                method: 'PUT'
            })
            .then(response => response.json())
        }
    }
}



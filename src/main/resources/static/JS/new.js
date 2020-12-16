

function newUser() {

    let body = {
        username: document.getElementById('username').value,
        lastName: document.getElementById('lastName').value,
        age: document.getElementById('age').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        roles: [getRole()]
    }

    // let body = {
    //     username: 'newUser',
    //     lastName: 'NewUser',
    //     age: 12,
    //     email: 'NewUser@mail.ru',
    //     password: 100,
    //     roles: [
    //         {
    //             id: 1,
    //             role: 'ROLE_ADMIN',
    //             users: [],
    //             authority: 'ROLE_ADMIN'
    //         }
    //     ]
    // }

    function getRole() {
        let role = document.getElementById('role').value
        if (role === 'USER') {
            return {
                id: 2,
                role: 'ROLE_USER',
                users: [],
                authority: 'ROLE_USER'
            }
        }
        if (role === 'ADMIN') {
            return {
                id: 1,
                role: 'ROLE_ADMIN',
                users: [],
                authority: 'ROLE_ADMIN'
            }
        }
    }

    const headers = {
        'Content-Type': 'application/json'
    }

    return fetch('http://localhost:8080/api/users', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        console.log(response)
        getResponse()
        return response.json()
    })
}
// const URL = 'https://jsonplaceholder.typicode.com/users'


getResponse()

async function  getResponse() {
    // const URL =
    let response = await fetch('http://localhost:8080/api/users');
    let content = await response.json();

    let users = document.querySelector('.userTable')
    users.innerHTML = ''
    let key

    for (key in content) {
        console.log(content[key]);

        users.innerHTML += `<tr>
            <td >${content[key].id}</td>
            <td >${content[key].username}</td>
            <td >${content[key].lastName}</td>
            <td >${content[key].age}</td>
            <td >${content[key].email}</td>
            <td >${content[key].roles.map((role) => role.role)}</td>
            <td><button type="button" class="btn btn-info" onclick="editFunc(${content[key].id})" 
            data-toggle="modal" data-target="#edit-modal">Edit</button>
            </td>
            <td><button type="button" class="btn btn-danger" 
            onclick="deleteFunc(${content[key].id})" 
            data-toggle="modal" data-target="#delete-modal">Delete</button>
            </td>            
        </tr>`

    }
}



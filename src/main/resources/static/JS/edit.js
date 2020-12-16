async function editFunc(id){
    let URL = 'http://localhost:8080/api/users/'
    let response = await fetch( URL + id);
    let content = await response.json();
    console.log(content)
    let modal= document.querySelector('#edit-modal')

    modal.innerHTML += `<form id="editForm" class="modal-form" >
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title">Edit user</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">×</span></button>
                                                </div>
                                                <div class="modal-body">

                                                    <div class="form-group">
                                                        <label class="col control-label text-center font-weight-bold" for="id">ID</label>
                                                        <div class="col">
                                                            <input id="idEdit" path="id" name="id"
                                                                   type="number" placeholder="${content.id}"
                                                                   class="form-control input-md"  readonly
                                                            />
                                                        </div>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="col control-label text-center font-weight-bold" for="username">First Name</label>
                                                        <div class="col">
                                                            <input id="usernameEdit" path="username" name="username"
                                                                   type="text" placeholder="${content.username}"
                                                                   class="form-control input-md" 
                                                            />
                                                        </div>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="col control-label text-center font-weight-bold" for="lastName">Last Name</label>
                                                        <div class="col">
                                                            <input id="lastNameEdit" path="firstName" name="lastName"
                                                                   type="text" placeholder="${content.lastName}"
                                                                   class="form-control input-md" 
                                                            />
                                                        </div>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="col control-label text-center font-weight-bold" for="age">Age</label>
                                                        <div class="col">
                                                            <input id="ageEdit" path="age" name="age"
                                                                   type="text" placeholder="${content.age}"
                                                                   class="form-control input-md" 
                                                            />
                                                        </div>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="col control-label text-center font-weight-bold" for="email">Email</label>
                                                        <div class="col">
                                                            <input id="emailEdit" path="email" name="email"
                                                                   type="email" placeholder="${content.email}"
                                                                   class="form-control input-md" 
                                                            />
                                                        </div>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="col control-label text-center font-weight-bold" for="password">password</label>
                                                        <div class="col">
                                                            <input id="passwordEdit" path="password" name="password"
                                                                   type="password" placeholder="${content.password}"
                                                                   class="form-control input-md" 
                                                            />
                                                        </div>
                                                    </div>

                                                    <div class="form-group">
                                                        <div class="col">
                                                            <label class="col control-label text-center font-weight-bold" for="roleEdit">
                                                                Role
                                                            </label>
                                                            <select multiple class="form-control form-control-sm" id="roleEdit" name="role" >
                                                                <option>ADMIN</option>
                                                                <option>USER</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-outline pull-left CLOSE" data-dismiss="edit-modal">Close</button>
                                                    <button  type="submit" class="btn btn-primary btn-lg edit-btn">
                                                        Edit
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>`

    document.querySelector('.edit-btn').addEventListener('click', ()=>{
                const headers = {
            'Content-Type': 'application/json'
        }

        const check= (string, elemName) => {
            if (!string.length) {
                return content[elemName]
            }
            return string
        }

        let body = {
            id: id,
            username: check(document.getElementById('usernameEdit').value, 'username'),
            lastName: check(document.getElementById('lastNameEdit').value, 'lastName'),
            age: check(document.getElementById('ageEdit').value, 'age'),
            email: check(document.getElementById('emailEdit').value, 'email'),
            password: check(document.getElementById('passwordEdit').value, 'password'),
            roles: [getRole()]
        }

        function getRole() {
            let role = document.getElementById('roleEdit').value
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

        return fetch('/api/users', {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: headers
        }).then(response => {
            getResponse()
            return response.json()
        })
    })
}


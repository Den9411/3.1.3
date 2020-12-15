async function deleteFunc(id) {
    let URL = 'http://localhost:8080/api/users/'
    let response = await fetch( URL + id);
    let content = await response.json();
    console.log(content)
    let modal= document.querySelector('#delete-modal')

    modal.innerHTML += `<form class="modal-form">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title">Delete user</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">×</span></button>
                                                </div>
                                                <div class="modal-body">

                                                    <div class="form-group">
                                                        <label class="col control-label text-center font-weight-bold" for="id">ID</label>
                                                        <div class="col">
                                                            <input id="idDelete" path="id" name="id"
                                                                   type="number" placeholder="${content.id}"
                                                                   class="form-control input-md"  readonly
                                                            />
                                                        </div>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="col control-label text-center font-weight-bold" for="username">First Name</label>
                                                        <div class="col">
                                                            <input id="usernameDelete" path="username" name="username"
                                                                   type="text" placeholder="${content.username}"
                                                                   class="form-control input-md" readonly
                                                            />
                                                        </div>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="col control-label text-center font-weight-bold" for="lastName">Last Name</label>
                                                        <div class="col">
                                                            <input id="lastNameDelete" path="firstName" name="lastName"
                                                                   type="text" placeholder="${content.lastName}"
                                                                   class="form-control input-md" readonly
                                                            />
                                                        </div>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="col control-label text-center font-weight-bold" for="age">Age</label>
                                                        <div class="col">
                                                            <input id="ageDelete" path="age" name="age"
                                                                   type="text" placeholder="${content.age}"
                                                                   class="form-control input-md" readonly
                                                            />
                                                        </div>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="col control-label text-center font-weight-bold" for="email">Email</label>
                                                        <div class="col">
                                                            <input id="emailDelete" path="email" name="email"
                                                                   type="email" placeholder="${content.email}"
                                                                   class="form-control input-md" readonly
                                                            />
                                                        </div>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="col control-label text-center font-weight-bold" for="password">password</label>
                                                        <div class="col">
                                                            <input id="passwordDelete" path="password" name="password"
                                                                   type="password" placeholder="${content.password}"
                                                                   class="form-control input-md" readonly
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
                                                    <button type="button" class="btn btn-outline pull-left" data-dismiss="modal">Close</button>
                                                    <button  type="submit" class="btn btn-danger btn-lg delete-btn">
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>`

    document.querySelector('.delete-btn').addEventListener('click', ()=>{
        fetch(URL + id, {method: "DELETE"}).then(() => {
            modal.innerHTML = ''
            modal.setAttribute('style', 'display: none;')
            modal.classList.remove('show')
        })
        getResponse()
    })
}
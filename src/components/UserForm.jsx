import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { UserContext } from '../context/UserContext';


export const UserForm = ({ userSelected, handlerCloseForm }) => {
    const { initialUserForm, handlerAddUser ,errors} = useContext(UserContext);
    const [userForm, setUserForm] = useState(initialUserForm);
    const { id, username, password, email } = userForm;

    useEffect(() => {
        setUserForm({
            ...userSelected,
            password: '',
        });
    }, [userSelected]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setUserForm({
            ...userForm,
            [name]: value,
        })

    }
    const onSubmit = (event) => {
        event.preventDefault(); //evita el refresh en el navegador
        // if (!username || (!password && id === 0) || !email) {
        //     Swal.fire(
        //         'Erro de validacion',
        //         'Debe completar los campos del formulario!',
        //         'error'
        //     );
        //     return;
        // }
        // guardar el user form en el listado de usuarios
        handlerAddUser(userForm);
        // guardar el user form en el listado de usuarios
        //setUserForm(initialUserForm);
    }
    const onCloseForm = () => {
        handlerCloseForm();
        setUserForm(initialUserForm);
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                className="form-control my-3 w-75"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange} />
            <p className='text-danger'>{errors?.username}</p>

            {id > 0 || <input
                className="form-control my-3 w-75"
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={onInputChange} />}
            <p className='text-danger'>{errors?.password}</p>


            <input
                className="form-control my-3 w-75"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange} />
            <p className='text-danger'>{errors?.email}</p>

            <input type='hidden' name='id' value={id} />

            <button
                className="btn btn-primary"
                type="submit">
                {id > 0 ? 'Editar' : 'Crear'}
            </button>
            {!handlerCloseForm || <button
                className="btn btn-primary mx-2"
                type="button"
                onClick={() => onCloseForm()}>
                Cerrar
            </button>}
        </form>
    )
}

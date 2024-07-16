import React, { Fragment, useState } from "react";
import { Button, Columns, Form } from "react-bulma-components";
import UsersEditService from "../../../services/useredit";
import { Navigate } from "react-router-dom";

const UserDelete = (props) => {
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [redirectToUserEdit, setRedirectToUserEdit] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [error, setError] = useState(false);

    const HandleSubmit = async(event) => {
        event.preventDefault();
        try {
            if(password === passwordAgain){
            const userDelete = await UsersEditService.delete('http://localhost:3001/users/delete', {
                data: { password: password }, // Passando os dados no corpo da requisição
            });
            console.log('Resposta do servidor:', userDelete.data);
            if(userDelete){
                alert('Account deleted successfully');
                setRedirectToLogin(true)
            }}
        } catch (error) {
            setError(true)
        }
    }
    
    if(redirectToLogin)
        return <Navigate to={{pathname: "/login"}}/>

    if(redirectToUserEdit)
        return <Navigate to="/users/edit" />;
    
    return(
        <Fragment>
                <Columns centered>
                <form onSubmit={HandleSubmit}>
                    <Columns.Column size={12}>
                    <Form.Field>
                            <Form.Control>
                                <Columns breakpoint="mobile" centered>
                                    <Columns.Column size="half">
                                        <a className="button is-white has-text-custom-purple" outlined onClick={e => setRedirectToUserEdit(true)}>User edit or</a>
                                    </Columns.Column>
                                    <Columns.Column size="half">
                                        <Button className="custom-purple-outlined" outlined>Delete</Button>
                                    </Columns.Column>
                                </Columns>
                            </Form.Control>
                        </Form.Field>
                        <Form.Field>
                            <Form.Label size="small">Confirme a sua senha: </Form.Label>
                            <Form.Control>
                                <Form.Input type="password" required name="password" value={password} onChange={e => setPassword(e.target.value)}/>
                            </Form.Control>
                        </Form.Field>
                        <Form.Field>
                            <Form.Label size="small">Confirme a sua senha novamente: </Form.Label>
                            <Form.Control>
                                <Form.Input type="password" required name="password" onChange={e => setPasswordAgain(e.target.value)}/>
                            </Form.Control>
                        </Form.Field>
                        <Form.Field>
                            <Form.Control>
                                <Columns breakpoint="mobile" centered>
                                    <Columns.Column size="small" centered>
                                        <Button type="submit" className="custom-purple-outlined" outlined>Deletar</Button>
                                    </Columns.Column>
                                </Columns>
                            </Form.Control>
                        </Form.Field>
                        {error && <Form.Help color="danger">Check passwords confirmation</Form.Help>}
                    </Columns.Column>
                </form>
            </Columns>
        </Fragment>
    )
}

export default UserDelete
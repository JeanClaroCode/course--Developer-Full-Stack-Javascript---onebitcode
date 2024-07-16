import React, { Fragment } from "react";
import HeaderLoggedEdit from "../../../components/header_edit";
import { Card, Columns, Container, Heading, Section } from "react-bulma-components";
import logoImage from '../../../assets/images/logo.png'
import UserDelete from "../../../components/users_edit/deleteAccount";



const UsersDeleteScreen = ( ) => (
    <Fragment>
        <HeaderLoggedEdit/>
        <Section size="medium" className="auth">
            <Container>
                <Columns centered>
                    <Columns.Column size={4}>
                        <Card>
                            <Card.Content>
                                <Section>
                                    <Columns centered>
                                        <Columns.Column size={12}>
                                            <img src={logoImage} alt="logo"/>
                                        </Columns.Column>
                                    </Columns>
                                    <Columns>
                                        <Columns.Column size={12}>
                                            <Heading size={6} className="has-text-grey has-text-centered">
                                                Delete your Account
                                            </Heading>
                                        </Columns.Column>
                                    </Columns>
                                    <UserDelete/>
                                </Section>
                            </Card.Content>
                        </Card>
                    </Columns.Column>
                </Columns>
            </Container>
        </Section>
    </Fragment>
)

export default UsersDeleteScreen; 
import React, { Fragment } from "react";
import UserEdit from "../../../components/users_edit";
import HeaderLoggedEdit from "../../../components/header_edit";
import { Card, Columns, Container, Heading, Section } from "react-bulma-components";
import logoImage from '../../../assets/images/logo.png'

const UsersEditScreen = ( ) => (
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
                                                Change your data user here!
                                            </Heading>
                                        </Columns.Column>
                                    </Columns>
                                    <UserEdit/>
                                </Section>
                            </Card.Content>
                        </Card>
                    </Columns.Column>
                </Columns>
            </Container>
        </Section>
    </Fragment>
)

export default UsersEditScreen; 
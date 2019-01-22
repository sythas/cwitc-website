import React, { Component, ReactNode } from 'react';
import AuthService, { User } from '../../services/auth'

type ProfileProps = {
    path: string;
};

export default class Profile extends Component {

    public props: ProfileProps;

    public get user(): User {
        return AuthService.getUser();
    }

    public render(): ReactNode {
        return (
            <>
                <h1>Your profile</h1>
                <ul>
                    <li>Name: { this.user.name }</li>
                    <li>E-mail: { this.user.email }</li>
                </ul>
            </>
        );
    }
}
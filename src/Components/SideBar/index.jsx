import React, { useState } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import FlexBox from '../FlexBox/index';
import {
    LinkContainer,
    EmptyCircle,
    ItemCount,
    NavLink,
    StyledLink,
    SideNav,
    Title,
    StyledButton,
    LinkPayment,
    LogoutIcon,
} from './styles';
import axios from 'axios';


const resources = [
    {
        name: 'General Administration',
        link: '/general-administration',
    },
    {
        name: 'Development Administration',
        link: '/dev-administration',
    },
    {
        name: 'Seasonal Work',
        link: '/seasonal',
    },
    {
        name: 'Structured Drives and Working',
        link: '/drives-working',
    },
];
const modules = [

    {
        name: 'Upload Excel file',
        link: '/upload-sheet',
        items: 0,
    },

];

const SideBar = () => {
    const [isLogin, setIsLogin] = useState(true);

    const logoutHandler = () => {
        localStorage.removeItem('token')
        setIsLogin(false);
    }

    return (
        isLogin === false ? <Redirect to="/" /> : <SideNav>
            <div>
                <LinkContainer>
                    <StyledLink to="/homepage">
                        <NavLink >
                            Home
                        </NavLink>
                    </StyledLink>
                </LinkContainer>
                <LinkContainer>
                    {modules.map(({ link, name, items }) => {
                        return (
                            <StyledLink to={link} key={link}>
                                <NavLink

                                    justify="space-between"
                                >
                                    {name}
                                    {items ? (
                                        <ItemCount>{items}</ItemCount>
                                    ) : null}
                                </NavLink>
                            </StyledLink>
                        );
                    })}
                </LinkContainer>
                <LinkContainer>
                    <Title>RESOURCES</Title>
                    {resources.map(({ name, link }) => {
                        return (
                            <StyledLink to={link} key={link}>
                                <NavLink
                                    height="30px"
                                >
                                    {name}
                                </NavLink>
                            </StyledLink>
                        );
                    })}
                </LinkContainer>

                <LinkPayment style={{ textAlign: 'center' }}>
                    <FlexBox style={{ marginTop: 10 }}>
                    </FlexBox>
                    <StyledButton onClick={logoutHandler}
                        style={{ marginTop: '25px' }}
                    >
                        Logout
                    </StyledButton>
                </LinkPayment>
            </div>
        </SideNav>
    );
};

export default SideBar;

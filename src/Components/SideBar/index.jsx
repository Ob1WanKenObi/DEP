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
        name: 'Create Data Entry',
        link: '/app/quick-start',
        items: 0,
    },
    {
        name: 'Upload Excel file',
        link: '/upload-sheet',
        items: 0,
    },
    {
        name: 'Delete/Update Data',
        link: '/app/quick',
        items: 0,
    },
];

const SideBar = () => {
    const [isLogin, setisLogin] = useState(true);

    const logoutHandler = () => {
        axios.post("http://localhost:8000/api/auth/logout", {})
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
                setisLogin(false);
            });
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

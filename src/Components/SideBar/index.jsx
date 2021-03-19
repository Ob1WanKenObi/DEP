import React from 'react';
import { useLocation } from 'react-router-dom';
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

/**
 * the items values needs to be obtained from user settings/config
 * fetched from waxwing backend
 */

const resources = [
    {
        name: 'Tax Data',
        link: '/app/quick-start',
    },
    {
        name: 'Health Data',
        link: '/app/quick-start',
    },
    {
        name: 'Court Cases Data',
        link: '/app/quick-start',
    },
    {
        name: 'Govt. Program Data',
        link: '/app/quick-start',
    },
    {
        name: 'Agriculture Data',
        link: '/app/quick-start',
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
        link: '/app/quick-start',
        items: 0,
    },
    {
        name: 'Delete/Update Data',
        link: '/app/quick-start',
        items: 0,
    },
];

const SideBar = () => {
    return (
        <SideNav>
            <div>
                <LinkContainer>
                    <StyledLink to="/app">
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
                    <StyledButton
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

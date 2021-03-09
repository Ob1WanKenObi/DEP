import React from 'react';
import { WalletFilled, LoginOutlined } from '@ant-design/icons';
import {
    Wrapper,
    CenterContainer,
    Container,
    Module,
    Resource,
    EmptyCircle,
    NormalText,
    Placeholder,
    BottomBorder,
} from './styles';
import HomeButton from '../Header/HomeButton/index';
import SideBarButton from './SideBarButton/index';

const SideBar = ({ modules, resources, Logout }) => {
    const moduleList = modules;
    const resourceList = resources;
    return (
        <Wrapper>
            <CenterContainer>
                <HomeButton buttonText="Home" />
                <BottomBorder />
            </CenterContainer>
            <Container>
                {moduleList.map(module => {
                    let placeholder = <Placeholder>{module.items}</Placeholder>;
                    if (module.items === 0) {
                        placeholder = null;
                    }
                    return (
                        <div
                            key={module.name}
                            style={{
                                margin: '10px 30px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                boxSizing: 'border-box',
                            }}
                        >
                            <Module href={module.link}>{module.name}</Module>
                            {placeholder}
                        </div>
                    );
                })}
                <BottomBorder />
            </Container>
            <Container>
                <NormalText>Resources</NormalText>
                {resourceList.map(resource => {
                    return (
                        <Resource key={resource.name} href={resource.link}>
                            {resource.name}
                        </Resource>
                    );
                })}
                <BottomBorder />
            </Container>
            <CenterContainer>
                <SideBarButton
                    icon={
                        <LoginOutlined
                            style={{
                                fontSize: '1.5em',
                                color: '#ffffff',
                                marginRight: '5px',
                            }}
                        />
                    }
                    text="Logout"
                    buttonClickHandler={Logout}
                />
            </CenterContainer>
        </Wrapper>
    );
};

export default SideBar;

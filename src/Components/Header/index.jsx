import React from 'react';
import { AppHeader, Wrapper, HeaderLinks, LogoContainer, Logo } from './styles';

const Header = () => {
    return (
        <AppHeader>
            <Wrapper>
                <LogoContainer>
                    <img src="../../common/images/corona.png" alt="Logo" style={{
                        display: 'table - cell',
                        verticalAlign: 'middle',
                        margin: '0px auto',
                        height: '50px',
                        color: '#ffffff'
                    }} />
                </LogoContainer>
                <HeaderLinks>
                    <div className="nick-name">
                        Sparsh
                    </div>
                </HeaderLinks>
            </Wrapper>
        </AppHeader>
    );
};

export default Header;

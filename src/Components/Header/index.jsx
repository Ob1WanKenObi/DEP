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
                    <button className="links">
                        Search
                    </button>

                    <button className="links">
                        Bell
                    </button>

                    <button className="links">
                        User
                    </button>
                    <div className="nick-name">
                        Sparsh
                    </div>
                </HeaderLinks>
            </Wrapper>
        </AppHeader>
    );
};

export default Header;

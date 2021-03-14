import React from 'react';
import { AppHeader, Wrapper, HeaderLinks, LogoContainer, Logo } from './styles';

const Header = () => {
    return (
        <AppHeader>
            <Wrapper>
                <LogoContainer>
                    <Logo />
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

import React from 'react';
import govlogo from '../../common/images/GovLogo.png';
import { AppHeader, Wrapper, HeaderLinks, LogoContainer, Logo } from './styles';

const Header = () => {
    return (
        <AppHeader>
            <Wrapper>
                <LogoContainer>
                    {/* <img src={govlogo} alt="government logo" /> */}
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

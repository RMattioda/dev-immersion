import React from 'react'
import Logo from '../../assets/img/Logo.png'
import './menu.css'
import Button from '../Button';
import { LogoImage ,MenuWrapper } from './style';


function Menu() {
    return (
        <MenuWrapper className="Menu">
            <a href="/">
                <LogoImage src={Logo} alt="Logo do dev Immersion" />
            </a>

            <Button as="a" href="/">
                Novo Vídeo
            </Button>

        </MenuWrapper>        
    )
}
/*
<ButtonLink className="ButtonLink" href="/">
                Novo vídeo
            </ButtonLink>
            */
export default Menu
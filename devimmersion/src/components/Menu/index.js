import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button';
import { LogoImage, MenuWrapper } from './style';

function Menu() {
  return (
    <MenuWrapper className="Menu">
      <Link to="/">
        <LogoImage src={Logo} alt="Logo do dev Immersion" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>

    </MenuWrapper>
  );
}
/*
<ButtonLink className="ButtonLink" href="/">
                Novo vídeo
            </ButtonLink>
            */
export default Menu;

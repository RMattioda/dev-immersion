import React from 'react';

function ButtonLink(props){
    // props => {} [className: 'o que alguém passar', assim como href e children]
    //representa a variável binding que será usada{}
    console.log(props);
    return (
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    );
}

export default ButtonLink;
import React from 'react';

import './styles.css';

import logo from '../../assets/logo.svg';

export default function SignIn() {
    return (
        <div className="container" >
            <img className="logo" src={logo} />
            <header>
                <p> Faça seu login </p>
            </header>

            <div className="content">

                <div class="nuWrapInput">
                    <input className="input" type="text" name="CPF" />
                    <span className="focusInput" data-placeholder="CPF"> </span>
                </div>

                <div className="nuWrapInput">
                    <input className="input" type="password" name="senha" />
                    <span className="focusInput" data-placeholder="Senha"> </span>
                </div>

                <button> CONTINUAR </button>

            </div>
        </div >
    )
} 
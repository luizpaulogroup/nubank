import React from 'react';

import './styles.css';

import logo from '../../assets/logo.svg';

export default function SignIn() {
    return (
        <div className="container">
            <img className="logo" src={logo} />
            <header>
                <p>Faça seu login</p>
            </header>
            <div className="content">

                <label>CPF</label>
                <input />
                <label>Senha</label>
                <input type="password" />
                <button>CONTINUAR</button>

                <footer>

                </footer>
            </div>
        </div>
    )
}

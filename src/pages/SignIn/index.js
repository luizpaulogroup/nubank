import React, { useState } from 'react';

import { Link } from "react-router-dom";

import './styles.css';

import logo from '../../assets/logo.svg';

export default function SignIn() {

    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <div className="container-signin" >
            <img className="logo" src={logo} />
            <header>
                <p> Faça seu login </p>
            </header>

            <div className="content">

                <div class="nuWrapInput">
                    <input
                        className="input"
                        type="text"
                        name="CPF"
                        value={cpf}
                        onChange={input => setCpf(input.target.value)} />
                    {cpf.length == 0 ?
                        <span className="focusInput" data-placeholder="CPF"> </span>
                        :
                        <span className="focusInputDisabled">CPF</span>
                    }
                </div>

                <div className="nuWrapInput">
                    <input
                        className="input"
                        type="password"
                        name="senha"
                        value={senha}
                        onChange={input => setSenha(input.target.value)} />
                    {senha.length == 0 ?
                        <span className="focusInput" data-placeholder="Senha"> </span>
                        :
                        <span className="focusInputDisabled">Senha</span>
                    }
                </div>

                <Link className="button" to="/bills"> CONTINUAR </Link>

            </div>
        </div >
    )
} 
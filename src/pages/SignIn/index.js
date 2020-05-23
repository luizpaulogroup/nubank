import React, { useState } from 'react';

import { Link } from "react-router-dom";

import InputMask from "react-input-mask";

import '../../Global/styles.css';

import './signin.css';

import logo from '../../assets/logo-signin.svg';

export default function SignIn() {

    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <div className="container-signin" >
            <img className="logo-signin" src={logo} />
            <header>
                <p> Faça seu login </p>
            </header>

            <div className="content-signin">

                <div class="nuWrapInput-signin">
                    <InputMask
                        mask="999.999.999-99"
                        className="input-signin"
                        type="text"
                        name="CPF"
                        value={cpf}
                        onChange={input => setCpf(input.target.value)} />
                    {cpf.length == 0 ?
                        <span className="focusInput-signin" data-placeholder="CPF"> </span>
                        :
                        <span className="focusInputDisabled-signin">CPF</span>
                    }
                </div>

                <div className="nuWrapInput-signin">
                    <input
                        className="input-signin"
                        type="password"
                        name="senha"
                        value={senha}
                        onChange={input => setSenha(input.target.value)} />
                    {senha.length == 0 ?
                        <span className="focusInput-signin" data-placeholder="Senha"> </span>
                        :
                        <span className="focusInputDisabled-signin">Senha</span>
                    }
                </div>

                <Link className="button-signin" to="/bills"> CONTINUAR </Link>

            </div>
        </div >
    )
} 
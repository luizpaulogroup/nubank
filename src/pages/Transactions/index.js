import React from 'react';

import { Link } from "react-router-dom";

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import logo from '../../assets/logo-navbar.svg';

import './transactions.css';

export default function Transactions() {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Navbar.Brand>
                    <img src={logo} />bank
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link><Link className="button-action-navbar" to="/transactions">HISTÓRICO</Link></Nav.Link>
                    <Nav.Link><Link className="button-action-navbar" to="/bills">FATURAS</Link></Nav.Link>
                </Nav>
                <Nav inline={true} className="navbar-name-user">
                    <NavDropdown className="navbar-name-user" title="Luiz Paulo Gonçalves">
                        <NavDropdown.Item href="#action/3.1">MEUS DADOS</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">SAIR</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3">Última compra</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Bloquear cartão</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
            <div className="container">
                <div className="content">
                </div>
            </div>
        </>
    )
}

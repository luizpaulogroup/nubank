import React from 'react';

import { Link } from "react-router-dom";

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import logo from '../../assets/logo-navbar.svg';

import './bills.css';

export default function Bills() {

    const bills = [
        { month: "Jan", value: 720.25 },
        { month: "Fev", value: 0.00 },
        { month: "Mar", value: 130.75 },
        { month: "Abr", value: 0.00 },
        { month: "Mai", value: 50.00 },
        { month: "Jun", value: 100.25 },
        { month: "Jul", value: 100.25 },
        { month: "Ago", value: 100.25 },
        { month: "Set", value: 100.25 },
        { month: "Out", value: 25.50 },
        { month: "Nov", value: 99.50 },
        { month: "Dez", value: 0.00 },
    ]

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
            <Navbar bg="dark" variant="dark" className="bills">
                {bills.map((bill, key) => (
                    <div className="bill" key={key}>
                        <div className="hoverzoom">
                            <div className="hover">
                                <span className="bill-month">{bill.month}</span>
                                <span className="bill-value">R${bill.value.toFixed(2).replace(".", ",")}</span>
                            </div>
                            <div className="retina"></div>
                        </div>
                    </div>
                ))}
            </Navbar>
            <div className="container-bills">
                <div className="content-bills">
                    
                </div>
            </div>
        </>
    )
}

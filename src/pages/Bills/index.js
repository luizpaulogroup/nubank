import React from 'react';

import { Link } from "react-router-dom";

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import logo from '../../assets/logo-navbar.svg';

import './bills.css';

export default function Bills() {

    const bills = [
        { month: "Jan", value: 100.25 },
        { month: "Fev", value: 100.25 },
        { month: "Mar", value: 100.25 },
        { month: "Abr", value: 100.25 },
        { month: "Mai", value: 100.25 },
        { month: "Jun", value: 100.25 },
        { month: "Jul", value: 100.25 },
        { month: "Ago", value: 100.25 },
        { month: "Set", value: 100.25 },
        { month: "Out", value: 100.25 },
        { month: "Nov", value: 100.25 },
        { month: "Dez", value: 100.25 },
    ]

    return (
        <>
            <Navbar bg="light" variant="light">
                <Navbar.Brand>
                    <img src={logo} />bank
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">HISTÓRICO</Nav.Link>
                    <Nav.Link href="#features">FATURAS</Nav.Link>
                </Nav>
                <Nav inline={true} className="navbar-name-user">
                    <NavDropdown className="navbar-name-user" title="Luiz Paulo Gonçalves">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
            <Navbar bg="dark" variant="dark" className="bills">
                {bills.map((bill, key) => (
                    <div className="bill" key={key}>
                        <div className="hoverzoom">
                            <div className="hover">
                                <span className="bill-month">{bill.month}</span>
                            </div>
                            <div className="retina">
                                <p>Teste...</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Navbar>
            <div className="container-bills">
                <header>
                    <h1>Bills</h1>
                </header>

                <div className="content-bills">

                    <Link className="button-bills" to="/transactions"> Transactions </Link>

                    {/* <div className="bills">
                        {bills.map((bill, key) => (
                            <div className="bill" key={key}>
                                <div className="hoverzoom">
                                    <div className="hover">
                                        <span className="bill-month">{bill.month}</span>
                                    </div>
                                    <div className="retina">
                                        <p>Teste...</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div> */}

                </div>
            </div>
        </>
    )
}

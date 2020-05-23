import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import logo from '../../assets/logo-navbar.svg';

import Spinners from '../../components/Spinners';

import './bills.css';

import Bill from '../../Db/Bills';

export default function Bills() {

    const [billsArray, setBills] = useState([]);
    const [description, setDescription] = useState("");

    useEffect(() => { all() }, [])

    const all = async obj => {

        try {

            var obj = new Bill();

            const { rows } = await obj.all()

            setBills(rows);

        } catch (error) {
            console.error(error);
        }

    }

    const create = async () => {

        try {

            if (!description.trim()) {
                return alert("Informe a descrição!");
            }

            var obj = new Bill();

            const response = await obj.create({ description })

            console.log(response);

        } catch (error) {
            console.error(error);
        }

    }

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
            <Spinners />
            <Navbar bg="light" variant="light">
                <Navbar.Brand>
                    <img src={logo} />bank
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Link className="button-action-navbar" to="/transactions">HISTÓRICO</Link>
                    <Link className="button-action-navbar" to="/bills">FATURAS</Link>
                </Nav>
                <Nav className="navbar-name-user">
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
                    <div className="row">
                        <div className="col-md-4">
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <input
                                            className="form-control"
                                            value={description}
                                            onChange={input => setDescription(input.target.value)}
                                        />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <button
                                            className="btn btn-block button-create-bills"
                                            type="button"
                                            onClick={create}>Adicionar</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                {billsArray.map((bill, key) => (
                                    <div className="col-md-12" key={key}>
                                        <div className="row">
                                            <div className="col-md-8">
                                                {bill.doc.description}
                                            </div>
                                            <div className="col-md-4">
                                                {bill.doc.value.toFixed(2).replace(".", ",")}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

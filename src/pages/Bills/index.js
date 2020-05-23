import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";

import { Navbar, Nav, NavDropdown, Spinner } from 'react-bootstrap';

import InputMask from "react-input-mask";

import logo from '../../assets/logo-navbar.svg';

import './bills.css';

import Bill from '../../Db/Bills';

import Month from '../../Db/Months';

export default function Bills() {

    const [bills, setBills] = useState([]);

    const [monthsNav, setMonthsNav] = useState([]);
    const [months, setMonths] = useState([]);

    const [monthId, setMonthId] = useState("");
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");

    const [update, setUpdate] = useState(0);
    const [loadingCreateBill, setLoadingCreateBill] = useState(false);

    useEffect(() => {
        handleData()
        all()
    }, [update])

    const handleData = async obj => {

        try {

            var obj = new Month();

            const { rows } = await obj.all()

            setMonths(rows);
            setMonthsNav(rows);

        } catch (error) {
            console.error(error);
        }

    }

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

            setLoadingCreateBill(true);

            if (!monthId.trim()) {
                setLoadingCreateBill(false);
                return alert("Informe o mês!");
            }

            if (!value.trim()) {
                setLoadingCreateBill(false);
                return alert("Informe o valor!");
            }

            if (!description.trim()) {
                setLoadingCreateBill(false);
                return alert("Informe a descrição!");
            }

            var obj = new Bill();

            await obj.create({ monthId, value, description });

            setLoadingCreateBill(false);

            setValue("");
            setDescription("");

            setUpdate(update + 1);

        } catch (error) {
            setLoadingCreateBill(false);
            console.error(error);
        }

    }

    const handleAmountMonth = obj => {

        var value = 0.00;

        bills.map(bill => {

            if (obj.id == bill.doc.monthId) {
                value = parseFloat(value) + parseFloat(bill.doc.value);
            }

        });

        return value.toFixed(2).replace(".", ",");

    }

    const handleDeleteBill = async bill => {

        try {

            var obj = new Bill();

            await obj.remove(bill)

            setUpdate(update + 1);

        } catch (error) {
            console.log(error);
        }

    }

    const handleValue = value => value.replace(".", ",");

    return (
        <>
            <Navbar bg="light" variant="light">
                <Navbar.Brand>
                    <img src={logo} />bank
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Link className="button-action-navbar" to="/bills">FATURAS</Link>
                </Nav>
                <span className="navbar-name-user">@luizpaulogroup</span>
            </Navbar>
            <Navbar bg="dark" variant="dark" className="bills">
                {monthsNav.map(month => (
                    <div className="bill" key={month.doc.id}>
                        <div className="hoverzoom">
                            <div className="hover">
                                <span className="bill-month">{month.doc.prefix}</span>
                                <span className="bill-value">R${handleAmountMonth(month.doc)}</span>
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
                                        <label>Mês</label>
                                        <select
                                            className="form-control"
                                            onChange={input => setMonthId(input.target.value)}
                                        >
                                            <option value="">Selecione</option>
                                            {months.map(month => (
                                                <option key={month.doc.id} value={month.doc.id}>{month.doc.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label>R$</label>
                                        <InputMask
                                            mask="99.99"
                                            maskPlaceholder={null}
                                            className="form-control"
                                            value={value}
                                            onChange={input => setValue(input.target.value)}
                                        />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label>Descrição</label>
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
                                            onClick={create}>

                                            {loadingCreateBill ?
                                                <Spinner color="#8D3DC8" size="sm" animation="border" />
                                                :
                                                "Adicionar"
                                            }
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-8">
                            <table className="table table-sm">
                                <tbody>
                                    {bills.map((bill, key) => (
                                        <tr key={key}>
                                            <td>{bill.doc.description}</td>
                                            <td>R${handleValue(bill.doc.value)}</td>
                                            <td className="text-right">
                                                <button
                                                    className="button-delete-bill"
                                                    type="button"
                                                    onClick={() => handleDeleteBill(bill.doc)}>&times;</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

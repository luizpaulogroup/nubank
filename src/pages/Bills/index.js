import React from 'react';

import { Link } from "react-router-dom";

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
        <div className="container-bills">
            <header>
                <h1>Bills</h1>
            </header>

            <div className="content-bills">

                <Link className="button-bills" to="/transactions"> Transactions </Link>

                <div className="bills">
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
                </div>

            </div>
        </div>
    )
}

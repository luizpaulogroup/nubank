import React from 'react';

import { Link } from "react-router-dom";

import '../../Global/styles.css';

export default function Transactions() {
    return (
        <div className="container">
            <header>
                <h1>Transactions</h1>
            </header>
            <div className="content">
                <Link className="button" to="/bills"> Bills </Link>
            </div>
        </div>
    )
}

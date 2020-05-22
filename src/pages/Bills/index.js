import React from 'react';

import { Link } from "react-router-dom";

import '../../Global/styles.css';

export default function Bills() {
    return (
        <div className="container">
            <header>
                <h1>Bills</h1>
            </header>

            <div className="content">
                <Link className="button" to="/transactions"> Transactions </Link>
            </div>
        </div>
    )
}

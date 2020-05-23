import React from 'react';
import { Spinner } from 'react-bootstrap';

import { ContentSpinner } from './styles';

import './styles.css';

export default function Spinners() {
    return (
        <ContentSpinner>
            <Spinner className="spinner-loading" animation="grow" />
            <Spinner className="spinner-loading" animation="grow" />
            <Spinner className="spinner-loading" animation="grow" />
        </ContentSpinner>
    )
}
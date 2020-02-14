import React from 'react';
import {NavLink} from "react-router-dom";
import './logo.css';


export default function Logo() {
    return (
        <h1 className="logo"><NavLink aria-label="Новини" to="/news"><div className="logoUp">ПОАП</div> <div className="logoDown">Полтавська Обласна Аграрна Палата</div></NavLink></h1>
    )
}
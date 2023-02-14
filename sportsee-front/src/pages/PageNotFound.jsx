import React from "react";
import { Link } from "react-router-dom";

import "../styles/pageNotFound.css"

export default function PageNotFound() {
    return (
        <div className="pageNotFound">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/">
                <h3>Retourner sur la page d'accueil</h3>
            </Link>
        </div>
    );
}

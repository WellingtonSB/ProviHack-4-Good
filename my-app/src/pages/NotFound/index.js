import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound () {
    return (
        <div>
            <h1>erro 404!! Pagina não encontrada</h1>
            <Link to="/">Voltar para HOME</Link>
            </div>

    )
}
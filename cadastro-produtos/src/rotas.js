import React from "react";

import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './views/home';
import CadastroProdutos from "./views/produtos/cadastro";

export default () => {
    return(
        <HashRouter>
            <Routes>
                <Route exact path="/cadastro-produtos" component={CadastroProdutos} />
                <Route exact path="/" component={Home} />
            </Routes>
        
        </HashRouter>
    )

}


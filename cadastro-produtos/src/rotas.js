import React from "react";


import Home from './views/home';
import CadastroProduto from "./views/produtos/cadastro";

import { BrowserRouter, Routes, Route} from 'react-router-dom';

function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/cadastro-produtos" component={CadastroProduto}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;
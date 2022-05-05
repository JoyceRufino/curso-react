import React from "react";

function Home() {
    return(
        <div className="jumbotron">
            <h1 className="display-3">bem vindo!</h1>
            <p className="lead">
                este é o seu sistemas, utilie a barra de navegação para acessar as páginas
            </p>
            <hr className="my-4" />
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">cadastrar</a>
            </p>
        </div>
    )
}

export default Home;
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HelloMessage from './HelloMessage';
import Teste from './pagina/Teste';
import CadastroLivro from './pagina/CadastrarLivro';
import StateTextFields from './pagina/CadastrarLivro/cadastrar';
import CadastroCliente from './pagina/cadastroCliente/index';
import SignUp from './pagina/login/index';
import Livro from './pagina/livro';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                {/* <Route path='/' exact={true} component={HelloMessage} /> */}
                {/* <Route path='/teste' exact={true} component={Teste} /> */}
                <Route path='/livros' exact={true} component={Livro} />
                <Route path='/cadastrarteste' exact={true} component={CadastroLivro} />
                <Route path='/cadastrar-livro' exact={true} component={StateTextFields} />
                <Route path='/cadastrar-usuario' exact={true} component={CadastroCliente} />
                <Route path='/login' exact={true} component={SignUp} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
;
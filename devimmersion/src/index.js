import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/index.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Pagina404 from './pages/estilizados/Pagina404';
import CadastroVideo from './pages/cadastro/Video/index';
import CadastroCategoria from './pages/cadastro/Categoria';


ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo}/>
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route component={Pagina404} />
    </Switch>
  </Router>,
  document.getElementById('root')
);



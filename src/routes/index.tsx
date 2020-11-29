import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from "../pages/Home"
import Projetos from "../pages/Projetos"
import Experiencia from "../pages/Experiencia"
import Estudos from "../pages/Estudos"
import Contato from "../pages/Contato"
import Sobre from "../pages/Sobre"

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/projetos' component={Projetos} />
    <Route path='/experiencia' component={Experiencia}/>
    <Route path='/estudos' component={Estudos}/>
    <Route path='/contato' component={Contato}/>
    <Route path='/sobre' component={Sobre}/>
  </Switch>
)
export default Routes;
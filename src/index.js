/* componentes nativos */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from 'universal-cookie';

/* componentes criados */
import App from './components/app/mixins/App';
import Register from './components/register/mixins/Register';
import Error from './components/error/Error';
// import Home from './components/app/childrens/ui/home/mixins/Home';

import Dotnet from 'dotenv';

var run = async () => {

    try {

        Dotnet.config();

        const cookies = new Cookies();
        var result = null;
        
        if (cookies.get('Authorization') !== '' && cookies.get('Authorization') != null) {
            // var re_auth = await Auth.check_auth(cookies.get('Authorization'));
            // result = JSON.parse(re_auth).status;
            result = true;
        } else {
            result = false;
        }
        
        if (result) {

            //Autentificado
            ReactDOM.render(
                <Router>
                    <div>
                        <Switch>
                            <Route path="/">
                                <App />
                            </Route>
                        </Switch>
                    </div>
                </Router>
                ,document.getElementById('root')
            )
        
            serviceWorker.unregister();

        } else {

            document.cookie = 'Authorization=; Max-Age=-99999999;';
            //Sem autentificacao
            ReactDOM.render(<Register />, document.getElementById('root'));

        }
        
    } catch (error) {

        if (process.env.NODE_ENV !== 'production')
            ReactDOM.render(error.message, document.getElementById('root'));
        else
            ReactDOM.render(<Error />, document.getElementById('root'));

    }

}

run();
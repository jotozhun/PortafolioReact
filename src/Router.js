import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Component } from 'react'
import Facebook from './components/Facebook';

class Router extends Component{
    render()
    {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Facebook}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;
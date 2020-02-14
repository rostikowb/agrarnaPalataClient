import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Switch} from "react-router-dom";
import './App.css';
import './style.css';
import Header from './components/header/header'
import Content from './components/indexPage/content'
import NewsPage from './components/newsPage/news'
import Footer from './components/footer/footer'
import page404 from './components/statusCodePages/404/404'
import page500 from './components/statusCodePages/500/500'
import loader from './assets/img/loader.gif'
import {config} from 'react-transition-group'
// import Switch from "react-router-dom/es/Switch";

const AddNewsPage = React.lazy(() => import('./components/adminPanel/addNews/addNewsPage/addNewsPage'));
const AdminPanel = React.lazy(() => import('./components/adminPanel/adminPanel'));
const ContactPage = React.lazy(() => import('./components/informPage/contacts/contacts'));
const StatutPage = React.lazy(() => import('./components/informPage/statut/statut'));

config.disabled = false;

class App extends Component {

    state = {
        AddNewsPage: null,
    };

    handleClick = async () => {
        //     let AddNewsPage = await import('./components/adminPanel/addNews/addNewsPage/addNewsPage');
        //     console.log(AddNewsPage);
        //     this.setState({AddNewsPage: AddNewsPage})
        //
    };

    render() {
        return (
            <div className="App">
                <Router>
                    {/*<Meta/>*/}

                    <React.Suspense
                        fallback={<div className="suspense"><img className="loader" src={loader} alt="loader"/></div>}>
                        <Header/>
                        <Switch>
                            <Route exact path="/news/:id" component={NewsPage}/>
                            <Route exact path="/news/:id/500" component={page500}/>
                            <Route exact path="/news" component={Content}/>
                            <Route exact path="/contact" component={ContactPage}/>
                            <Route exact path="/statut" component={StatutPage}/>
                            <Route exact path="/ap" component={AdminPanel}/>
                            <Route exact path="/addNews" component={AddNewsPage}/>
                            <Route exact path="/" component={Content}/>

                            <Route exact component={page404}/>
                        </Switch>
                        <Footer func={this.handleClick}/>
                    </React.Suspense>
                </Router>
            </div>
        );
    }
}

export default App;
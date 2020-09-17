import React from 'react';
import {Container, Button} from 'reactstrap';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import HomeComponent from './Home';
import ProfileComponent from './Profile';
import ScoreBoardContextProvider from '../contexts/ScoreBoardContext';
import NavBar from './NavBar';
import Footer from './Footer';



const Index = ()=>(
    <Container>
        <BrowserRouter>
        <ScoreBoardContextProvider>
            <NavBar/> 
            <Switch>
                <Route exact path='/Home' component={HomeComponent}/>
                <Route path='/Profile' component={ProfileComponent}/>
                <Route exact="/" component={HomeComponent}/>
            </Switch>
            
            <Footer/>
        </ScoreBoardContextProvider>
        </BrowserRouter>
    </Container>

);

export default Index;
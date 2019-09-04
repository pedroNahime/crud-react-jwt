import React, {Fragment} from 'react';
import './config/ReactotronConfig';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {GlobalStyle} from "./styles/global";

import {Provider} from 'react-redux';
import store from './store';

import Routes from './routes';

const App = () => (
    <Provider store={store}>
        <GlobalStyle/>
        <Fragment>
            <Routes/>
            <ToastContainer autoClose={5000}/>
        </Fragment>
    </Provider>
);

export default App;
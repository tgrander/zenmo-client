import { Layout } from 'antd'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'rxjs'
import Dashboard from './pages/Dashboard'
import SignUp from './pages/Signup'
import Login from './pages/Login'
import registerServiceWorker from './registerServiceWorker';
import store from './store';

import './index.css'


const { Header, Sider, Content, Footer } = Layout

const heightStyle = { height: '100%' }

function Root() {

  return (
    <Provider store={store}>
        <Router>
            <Layout style={heightStyle}>

                <Header>Header</Header>

                <Layout style={heightStyle}>

                    <Sider style={heightStyle}>Sider</Sider>

                    <Content style={heightStyle}>

                        <Route exact path="/" component={Dashboard} />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/signin" component={Login} />
                        <Route path="/dashboard" component={Dashboard} />

                    </Content>
                </Layout>

            </Layout>
        </Router>
    </Provider>
  )
}

ReactDOM.render(<Root/>, document.getElementById('root'));

registerServiceWorker();

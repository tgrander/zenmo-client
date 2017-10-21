import axios from 'axios'
import enUS from 'antd/lib/locale-provider/en_US'
import { Layout, LocaleProvider, Menu } from 'antd'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'rxjs'
import Dashboard from './pages/Dashboard'
import SignUp from './pages/Signup'
import Login from './pages/Login'
import registerServiceWorker from './registerServiceWorker'
import store from './store'

import './index.css'


const { Header, Sider, Content, Footer } = Layout

const heightStyle = { height: '100%' }

function Root() {

  return (
    <Provider store={store}>
        <LocaleProvider locale={enUS}>
            <Router>

                <Layout style={heightStyle}>

                    <Header>
                        <Menu {...{
                            theme: "dark",
                            mode: "horizontal",
                            defaultSelectedKeys: [],
                            style: { lineHeight: '64px' }
                        }}>
                            <Menu.Item key={1}>
                                <div onClick={e => axios.post('/plaid/historical-transactions')}>
                                    Historical Transactions
                                </div>
                            </Menu.Item>
                        </Menu>
                    </Header>

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
        </LocaleProvider>
    </Provider>
  )
}

ReactDOM.render(<Root/>, document.getElementById('root'))

registerServiceWorker()

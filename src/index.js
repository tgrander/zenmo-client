import axios from 'axios';
import enUS from 'antd/lib/locale-provider/en_US';
import { Layout, LocaleProvider, Menu } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'rxjs';
import DashboardContainer from './pages/DashboardContainer';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

import './index.css';

const { Header, Sider, Content, Footer } = Layout;

const heightStyle = { height: '100%' };

function Root() {
	return (
		<Provider store={store}>
			<LocaleProvider locale={enUS}>
				<Router>
					<Layout style={heightStyle}>
						<Header>
							<Menu
								{...{
									theme: 'dark',
									mode: 'horizontal',
									defaultSelectedKeys: [],
									style: { lineHeight: '64px' },
								}}
							/>
						</Header>

						<Layout style={heightStyle}>
							<Sider style={heightStyle} />

							<Content style={heightStyle}>
								<Route
									exact
									path="/"
									component={DashboardContainer}
								/>
								<Route
									path="/dashboard"
									component={DashboardContainer}
								/>
							</Content>
						</Layout>
					</Layout>
				</Router>
			</LocaleProvider>
		</Provider>
	);
}

ReactDOM.render(<Root />, document.getElementById('root'));

registerServiceWorker();

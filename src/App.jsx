import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar.jsx';
import AppRoutes from './routers/Route.jsx';

const { Header, Content } = Layout;

const App = () => (
    <Router>
        <Layout style={{ minHeight: '100vh' }}>
            <Sidebar />
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <AppRoutes />
                </Content>
            </Layout>
        </Layout>
    </Router>
);

export default App;

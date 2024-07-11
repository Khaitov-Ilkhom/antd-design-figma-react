import "../../App.css"
import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import {
    HomeOutlined,
    FormOutlined,
    UnorderedListOutlined,
    ShopOutlined,
    CalculatorOutlined,
    TeamOutlined,
    FileTextOutlined,
    AreaChartOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const { Sider } = Layout;

const Sidebar = () => {
    const location = useLocation();
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={toggleCollapsed}
            style={{
                paddingTop: "30px",
                backgroundColor: '#ffffff',
                color: '#8F9BB3',
                minHeight: '100vh',
            }}
        >
            <Menu
                theme="light"
                defaultSelectedKeys={['1']}
                selectedKeys={[location.pathname]}
                mode="inline"
                style={{
                    backgroundColor: '#ffffff',
                }}
            >
                <Menu.Item
                    key="/"
                    icon={<HomeOutlined style={{ color: '#8F9BB3' }} />}
                    style={location.pathname === '/' ? { backgroundColor: '#d3d3d3' } : null}
                >
                    <Link to="/" style={{ color: '#8F9BB3' }}>Шахматка</Link>
                </Menu.Item>
                <Menu.Item
                    key="/create-booking"
                    icon={<FormOutlined style={{ color: '#8F9BB3' }} />}
                    style={location.pathname === '/create-booking' ? { backgroundColor: '#d3d3d3' } : null}
                >
                    <Link to="/create-booking" style={{ color: '#8F9BB3' }}>Создать бронь</Link>
                </Menu.Item>
                <Menu.Item
                    key="/booking-list"
                    icon={<UnorderedListOutlined style={{ color: '#8F9BB3' }} />}
                    style={location.pathname === '/booking-list' ? { backgroundColor: '#d3d3d3' } : null}
                >
                    <Link to="/booking-list" style={{ color: '#8F9BB3' }}>Список броней</Link>
                </Menu.Item>
                <Menu.Item
                    key="/reception"
                    icon={<ShopOutlined style={{ color: '#8F9BB3' }} />}
                    style={location.pathname === '/reception' ? { backgroundColor: '#d3d3d3' } : null}
                >
                    <Link to="/reception" style={{ color: '#8F9BB3' }}>Прием и размещение</Link>
                </Menu.Item>
                <Menu.Item
                    key="/calculations"
                    icon={<CalculatorOutlined style={{ color: '#8F9BB3' }} />}
                    style={location.pathname === '/calculations' ? { backgroundColor: '#d3d3d3' } : null}
                >
                    <Link to="/calculations" style={{ color: '#8F9BB3' }}>Расчеты</Link>
                </Menu.Item>
                <Menu.Item
                    key="/hotel-service"
                    icon={<TeamOutlined style={{ color: '#8F9BB3' }} />}
                    style={location.pathname === '/hotel-service' ? { backgroundColor: '#d3d3d3' } : null}
                >
                    <Link to="/hotel-service" style={{ color: '#8F9BB3' }}>Служба отеля</Link>
                </Menu.Item>
                <Menu.Item
                    key="/reports"
                    icon={<FileTextOutlined style={{ color: '#8F9BB3' }} />}
                    style={location.pathname === '/reports' ? { backgroundColor: '#d3d3d3' } : null}
                >
                    <Link to="/reports" style={{ color: '#8F9BB3' }}>Отчёты</Link>
                </Menu.Item>
                <Menu.Item
                    key="/financial-analysis"
                    icon={<AreaChartOutlined style={{ color: '#8F9BB3' }} />}
                    style={location.pathname === '/financial-analysis' ? { backgroundColor: '#d3d3d3' } : null}
                >
                    <Link to="/financial-analysis" style={{ color: '#8F9BB3' }}>Финансовая аналитика</Link>
                </Menu.Item>
                <Menu.Item
                    key="/settings"
                    icon={<SettingOutlined style={{ color: '#8F9BB3' }} />}
                    style={location.pathname === '/settings' ? { backgroundColor: '#d3d3d3' } : null}
                >
                    <Link to="/settings" style={{ color: '#8F9BB3' }}>Настройка</Link>
                </Menu.Item>
            </Menu>

            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px' }}>
                <Button
                    type="primary"
                    block
                    style={{ backgroundColor: collapsed ? '#ffffff' : '#ffffff', color: '#8F9BB3', borderColor: '#ffffff' }}
                    onClick={toggleCollapsed}
                >
                    {collapsed ? 'Expand' : 'Collapse'}
                </Button>
            </div>
        </Sider>
    );
};

export default Sidebar;
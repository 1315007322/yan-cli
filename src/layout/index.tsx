import { Breadcrumb, Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;
import myRoutes from 'Src/router/index';


const BaseLayout = (props: { children: any }) => (
    <Layout className="layout">
        <Header>
            <div className="logo" >
                UVic Social Network
            </div>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={myRoutes.map((_, index) => {
                    const key = index + 1;
                    return {
                        key,
                        label: _.label,
                    };
                })}
            />
        </Header>
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
                {props.children}
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
);

export default BaseLayout;
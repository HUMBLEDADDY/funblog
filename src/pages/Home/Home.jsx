import React from 'react'
import LeftContainer from './LeftContainer'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

function Home() {
    return(
        <div>
            <Layout>
                <Sider>
                    <LeftContainer></LeftContainer>
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </div>
    )
}

export default Home
import React from 'react'
import LeftContainer from './LeftContainer'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

function Home() {
    return(
        <div>
            <Layout>
                <Header>Header</Header>
                <Layout>
                    <Sider>
                        <LeftContainer></LeftContainer>
                    </Sider>
                    <Content>Content</Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        </div>
    )
}

export default Home
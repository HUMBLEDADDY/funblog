import React from 'react'
import LeftContainer from './LeftContainer'
import { Layout } from 'antd';
import {  Link ,Outlet} from 'react-router-dom'
import styles from './Home.less';
const { Header, Footer, Sider, Content } = Layout;


function Home() {
    return(
        <div>
            <Layout>
                <Sider width="25vw" className={styles['sider']}>
                    <LeftContainer></LeftContainer>
                </Sider>
                <Layout  className={styles['right']}>
                    <Header  className={styles['head']}>
                        <Link to="/">BLOG</Link>
                        <Link to="/date">DATE</Link>
                        <Link to="/category">CATEGORY</Link>
                    </Header>
                    <Content className={styles['content']}>
                        <Outlet/>
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </div>
    )
}

export default Home
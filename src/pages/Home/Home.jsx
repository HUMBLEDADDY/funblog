import React from 'react'
import LeftContainer from './LeftContainer'
import { Layout } from 'antd';
import {  Link ,Outlet} from 'react-router-dom'
import { useState } from 'react';
import styles from './Home.less';
const { Header, Footer, Sider, Content } = Layout;


function Home() {
    const [selectIndex,setSelectIndex] = useState(1)
    return(
        <div>
            <Layout>
                <Sider width="25%" className={styles['sider']}>
                    <LeftContainer></LeftContainer>
                </Sider>
                <Layout  className={styles['right']}>
                    <Header  className={styles['head']}>
                        <Link to="/" onClick={()=>setSelectIndex(1)} className={selectIndex===1?styles['select']:''}>BLOG</Link>
                        <Link to="/date" onClick={()=>setSelectIndex(2)} className={selectIndex===2?styles['select']:''}>DATE</Link>
                        <Link to="/category" onClick={()=>setSelectIndex(3)} className={selectIndex===3?styles['select']:''}>CATEGORY</Link>
                    </Header>
                    <Content className={styles['content']}>
                        <Outlet/>
                    </Content>
                    <Footer className={styles['footer']}>Footer</Footer>
                </Layout>
            </Layout>
        </div>
    )
}

export default Home
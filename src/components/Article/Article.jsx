import React from 'react'
import styles from './Article.less'
import {  Link } from 'react-router-dom'


function Article(props) {
    return (
        <Link to={`/article?id=${props.id}`} className={styles['article']} >
            <div className={styles['title']}>{props.title}</div>
            <div className={styles['time']}>{props.time}</div>
        </Link>
    )
}

export default Article
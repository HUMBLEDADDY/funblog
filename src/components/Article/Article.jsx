import React from 'react'
import styles from './Article.less'

function Article(props) {
    return (
        <div className={styles['article']}>
            <div className={styles['title']}>{props.title}</div>
            <div className={styles['time']}>{props.time}</div>
        </div>
    )
}

export default Article
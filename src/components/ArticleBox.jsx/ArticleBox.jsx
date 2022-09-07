import React from 'react'
import { Children } from 'react';
import styles from './ArticleBox.less'

function ArticleBox(props) {
    return(
        <div className={styles['box']}>
            <div className={styles['box-name']}>
                {props.name}
            </div>
            <div className={styles['children']}>
                {props.Children}
            </div>
        </div>
    )
}

export default ArticleBox;
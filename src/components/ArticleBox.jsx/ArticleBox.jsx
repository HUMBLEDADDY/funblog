import React from 'react'
import styles from './ArticleBox.less'
import { useState } from 'react';

function ArticleBox(props) {
    const [height,setHeight] = useState(80)
    return(
        <div className={styles['box']} style={{height:height+'px'}} onMouseOver={()=>setHeight((props.children.length+1)*80)} onMouseOut={()=>setHeight(80)}>
            <div className={styles['box-name']}>
                {props.name}
            </div>
            <div className={styles['children']}>
                {props.children}
            </div>
        </div>
    )
}

export default ArticleBox;
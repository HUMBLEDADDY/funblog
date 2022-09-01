import React from 'react'
import styles from './Home.less';
function LeftContainer() {
    console.log(styles)
    return(
        <div>
            <div className={styles['left-container']}></div>
        </div>
    )
}

export default LeftContainer
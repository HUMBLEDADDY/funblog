import React, { useState ,useEffect} from 'react'
import styles from './Home.less';
import { Avatar,Image } from 'antd';
import avatar from '../../assets/img/avatar.jpg'



function LeftContainer() {
    const defaultSlogan = 'May the force be with you'

    const [typing, setTyping] = useState(true);

    const [slogan, setSlogan] = useState(defaultSlogan);

    const [processSlogan,setprocessSlogan] = useState(defaultSlogan.split(''));

    useEffect(() => {
        let deleting,spelling
        deleting = setInterval(()=>{
            if(!typing){
                if(slogan === ''){
                    setTyping(true)
                    setSlogan(defaultSlogan);
                }
                const letters = slogan.split('');
                letters.pop()
                const slogan_ = letters.join('')
                setSlogan(slogan_);
            }
        },100)
        spelling = setInterval(()=>{
            if(typing){
                if(slogan === defaultSlogan){
                    setTyping(false);
                }
                const letters = processSlogan.shift();
                setprocessSlogan(processSlogan)
                const slogan_ = slogan + letters
                setSlogan(slogan_);
            }
        },100)
        return () => {
            clearInterval(deleting);
            clearInterval(spelling);
        }
    })

    return(
        <div>
            <div className={styles['left-container']}>
                <div className={styles['info']}>
                    <Avatar className={styles['avatar']} src={<Image src={avatar} />} />
                    <div className={styles['name']}>M O B I U S</div>
                    <div className={styles['slogan']}>{slogan}</div>
                </div>
            </div>
        </div>
    )
}

export default LeftContainer
import React from 'react';
import StatusIcon from 'iconsax-react/dist/cjs/Status'
import MessageText from 'iconsax-react/dist/cjs/MessageText'
import More2 from 'iconsax-react/dist/cjs/More2'
import Avatar from '../../../assets/images/1587376025161-modified.png'
import Image from 'next/image';

import styles from './leftSideHeader.module.scss';

interface IStatusProps{}


const Status:React.FC = ()=>{
    return(
        <div className={styles.container}>
            <Image src={Avatar} alt='user' className={styles.avatar}/>
            <div className={styles.icons}>
                <StatusIcon />
                <MessageText/>
                <More2/>
            </div>
        </div>
    )
}

export default Status
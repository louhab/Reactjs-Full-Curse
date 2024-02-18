import React from 'react';
import Layouts from './Layouts';
import '../GlobalStyle.css'
import styles from '../style.module.scss'
function Blogs() {
    return (
        <div>
            <Layouts/>
            <div className='blogs'>
                hello from Blogs
            </div>
            <div className={`blogs ${styles.title}`}>
                hello from Blogs
            </div>
        </div>
    );
}

export default Blogs;
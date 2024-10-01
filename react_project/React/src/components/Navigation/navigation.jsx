import styles from './Navigation.module.css';
const Nav =()=>{
    return <nav className={`${styles.Naviagtion} container`}>
        <div className="logo">
            <img src='/images/DATA AVENGERS White.png' alt='do some react'/>
        </div>
        <ul><li>home</li>
        <li>about</li>
        <li>contact</li>
        </ul>
    </nav>
}

export default Nav;
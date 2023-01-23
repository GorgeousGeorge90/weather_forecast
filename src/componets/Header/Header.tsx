import styles from './Header.module.scss';
import logo from './../../assets/img/logo.png';


const Header = ()=> {
    return ( <header>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <img src={logo} alt="pic"/>
                    </div>
                    <h3>Weather Forecast App</h3>
                    <p>Time to check the weather!</p>
                </div>
            </div>
        </header>
    )
}

export default Header
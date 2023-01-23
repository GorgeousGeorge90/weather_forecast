import styles from './Main.module.scss';
import GetCityForm from '../GetCityForm/GetCityForm';
import WeatherCard from '../WeatherCard/WeatherCard';

const Main = ()=> {

    return (
     <div className={styles.container}>
            <div className={styles.card}>
                <GetCityForm/>
                <WeatherCard/>
            </div>
     </div>
    )
}

export default Main


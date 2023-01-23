import styles from './WeatherCard.module.scss'
import {WeatherCardType} from '../../types/types';
import {useSelector} from "react-redux";
import {getNewInfo} from "../../selectors/selectors";



const WeatherCard = ()=> {
    const card:WeatherCardType= useSelector(getNewInfo)
    if (typeof card !== 'string') {
        return (
            <div className={styles.container}>
                <ul>
                    <li>Weather in {card.name}</li>
                    <li>Temperature: {
                        card.main?.temp ? Math.floor(card.main?.temp - 273)+'℃': null
                    }</li>
                    <li>Humidity: {card.main?.humidity}%</li>
                    <li>Wind speed: {card.wind?.speed}km/h</li>
                </ul>
            </div>
        )
    } else {
        return <div className={styles.container}>
            <h3>{card}</h3>
        </div>
    }
}

export default WeatherCard
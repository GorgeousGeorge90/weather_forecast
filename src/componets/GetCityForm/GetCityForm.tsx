import BaseForm from '../BaseForm/BaseForm';
import {useAppDispatch} from '../../redux/redux-hooks';
import {getWeatherInfo} from '../../redux/forecastSlice';


const getCityForm = ()=> {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useAppDispatch()

    const handleSubmit = (text:string)=> {
        dispatch(getWeatherInfo(text))
    }

    return <BaseForm placeholder='City'
                     handleSubmit={handleSubmit}
    />
}

export default getCityForm
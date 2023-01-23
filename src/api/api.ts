import axios from 'axios';


const api = {
    getInfo: (city: string) => axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=e1ac58639eef306b50f784e936d26901`)
}

export default api
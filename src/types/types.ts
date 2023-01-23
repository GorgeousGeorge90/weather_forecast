type NewCard = {
    name?: string,
    main?: {
        temp: number,
        humidity: number,
    }
    wind?: {
        speed: number,
    },
}

export type WeatherCardType = NewCard | string



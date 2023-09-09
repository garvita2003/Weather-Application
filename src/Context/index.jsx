import React from "react";
import { useContext,createContext, useState, useEffect } from "react";
import axios from 'axios'; //api

const StateContext = createContext()

export const StateContextProvider = ({children}:{children:React.ReactNode}) => {
    const [weather,setWeather] = useState({})
    const [values,setValues] = useState([])
    const [place,setPlace] = useState('Lucknow')
    const [location,setLocation] = useState('')

    //fetch api
    const fetchWeather = async() => {
        const options = {
            method : 'GET',
            url : 'https://visual-crossing-weather.p.rapidapi.com/forecast',
            params : {
                aggregateHours : '24',
                location : place,
                contentType : 'json',
                unitGroup: 'metric',
                shortColumnNames : 0
            },
            headers: {
                'X-RapidAPI-Key' : '7c6456557dmsh57d2e71cf7ffc15p1260afjsnfe7a977f4fb9',
                'X-RapidAPI-Host' : 'visual-crossing-weather.p.rapidapi.com'
            }
        }
       try {
        const response = await axios.request(options);
        console.log(response.data);
        const thisData = Object.values(response.data.locations)[0]
        setLocation(thisData.address)
        setValues(thisData.values)
        setWeather(thisData.values[0])
       } catch (error) {
        console.error(error); 
        //if the api throws error
        alert('This place does not exits');
       } 
    }

    useEffect(() => {
        fetchWeather()
    },[place])

    useEffect(() => {
        console.log(values)
    },[values])

    return (
        <StateContext.Provider value={{
            weather,
            setPlace,
            values,
            location,
            place
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)
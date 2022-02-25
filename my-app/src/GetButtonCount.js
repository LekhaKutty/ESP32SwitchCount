import React, {useState, useEffect} from 'react';
import FetchAPI from './FetchAPI';
const GetButtonCount = () =>{

    const [current_temperature,setTemperature] = useState("");
    const [currentTime,setTime] = useState("");

    useEffect(() => {
        const fetchButtonData = async () => {
            try{
                const response = await FetchAPI.get('/');
                console.log("data",response);
                setTemperature(response.data.Temperature);
                
            }catch(err){
                console.log(err);
            }
        }
        const interval = setInterval(() => {
            let d = new Date();
            setTime(d.toUTCString())
            console.log(setTemperature)
            fetchButtonData()
        }, 1000);
        return () => clearInterval(interval)
    },[]);
    
        return (
            <div>
                <h2>Temperature : {current_temperature}</h2>
                <h3>Time: {currentTime}</h3>
            </div>
        )
}
export default GetButtonCount
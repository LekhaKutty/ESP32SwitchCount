import React, {useState, useEffect} from 'react';
import FetchAPI from './FetchAPI';
const GetButtonCount = () =>{

    const [current_temperature,setTemperature] = useState("");

    useEffect(() => {
        const fetchButtonData = async () => {
            try{
                const response = await FetchAPI.get('/');
                console.log("data",response.data.Temperature);
                setTemperature(response.data.Temperature);
                console.log(setTemperature)
                
            }catch(err){
                console.log(err);
            }
        }
        const interval = setInterval(() => {
            fetchButtonData()
        }, 1000);
        return () => clearInterval(interval)
    },[]);
    
        return (
            <div>
                <h5>Temperature : {current_temperature}</h5>
            </div>
        )

    
}
export default GetButtonCount
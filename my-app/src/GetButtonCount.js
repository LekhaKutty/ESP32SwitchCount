import React, {useState, useEffect} from 'react';
import FetchAPI from './FetchAPI';
const GetButtonCount = () =>{

    const [ButtonCount,setButtonCount] = useState("");

    useEffect(() => {
        const fetchButtonData = async () => {
            try{
                const response = await FetchAPI.get('/');
                console.log("data",response.data.count);
                setButtonCount(response.data.count);
                //console.log(setButtonCount)
                
            }catch(err){
                console.log(err);
            }
        }
        fetchButtonData()
    },[]);
    
        return (
            <div>
                <h5>Button Count : {ButtonCount}</h5>
            </div>
        )

    
}
export default GetButtonCount
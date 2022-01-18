import React, { useEffect, useState } from 'react';
import axios from 'axios';


const NightQuote = () => {

    const [nightQuote, setNightQuote] = useState('');

    useEffect(() => {
        const url="https://api.quotable.io/random";
        
        const axiosData = async () => {
        
            const response = await axios(url);
            console.log(response.data);
            setNightQuote(response.data.content);
        };
        axiosData();

    }, []);

    return (
        <p>{nightQuote}</p>
    );
    
}

export default NightQuote;
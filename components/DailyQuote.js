import React, { useEffect, useState } from "react";

const DailyQuote =() => {

    const[ dailyQuote,setDailyQuote ] = useState('');

    useEffect(() => {
        const url = 'https://api.adviceslip.com/advice';

            const fetchData = async() => {
                try{
                    const response = await fetch(url);
                    const json = await response.json();
                    console.log(json.slip.advice);
                    setDailyQuote(json.slip.advice);
                }catch(error){
                    console.log("error", error);
                }
            };

            fetchData();
    }, []);

    return (
        <p>
          {dailyQuote}
        </p>
    );
};

export default DailyQuote;
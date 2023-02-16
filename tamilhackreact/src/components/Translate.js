import React, { useState ,useEffect} from 'react'
import './Translate.css';

export const Translate = (props) => {
    
    const axios = require("axios");
    const [d,setData] = useState("")
    let textarr = []
    textarr.push(props.text)
    console.log(textarr)
    const loadData = [{
        "Text":textarr[0]
    }]
    const options = {
       
      method: 'POST',
      url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
      params: {
        'api-version': '3.0',
        'to[0]': 'ta',
        textType: 'plain',
        profanityAction: 'NoAction'
      },
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '8533f74111msh35ec2ec0665ffdcp16b0f2jsnfa0ddcecd9a5',
        'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
      },
      data:loadData
    };
    
    const FetchData = () => {
        axios.request(options).then(function (response) {
            console.log(response.data[0].translations[0].text);
            setData(response.data[0].translations[0].text)
            console.log(d)
            
        }).catch(function (error) {
            console.error(error);
        });
    }
 

useEffect(() => {
    FetchData()
  }, []);
  return (
    <div className='tdiv'>{d}</div>
  )
}

import {React, useState,useEffect} from 'react'
import { Link,Redirect, useNavigate ,useLocation} from 'react-router-dom';

const Organview = (props)=> {
    const {state} = useLocation();
    const {data} = state
    const [ndata,setndata] = useState({})
    async function fetchContent(data) {
        let nd = data.toLowerCase()
        
        const request = await fetch(`http://127.0.0.1:8000/organ-list/${nd}`)
          .then(response => {
            if(response.ok)
          {
            return response.json(); 
          }
          else{
            console.log("im not here")
            // console.log(apiavail)
          }
        })
          .then(data => {
            // console.log(data)
            setndata(data)
           
            
         
          })
          .catch((error) => {
            console.log("the error ",error)
            // setapi(false)
          });
        }
        useEffect(() => {
          fetchContent(data)
        
          
        }, [data])
        
  return (
    <div>{ndata.organ}</div>
  )
}

export default Organview
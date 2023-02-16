import React, { useState,useEffect } from 'react'
import {useRef} from 'react';
import { Link } from 'react-router-dom';
import './info.css';
import logo from"./logo.png" 
import { Translate } from './Translate'

const Info = () => {


    const [data,setData] = useState([])
    const [org,setorg] = useState("")
    let orgref = useRef(null)
    async function fetchContent() {
        
        const request = await fetch(`http://127.0.0.1:8000/organ-list/`)
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
            setData(data)
           
            
         
          })
          .catch((error) => {
            console.log("the error ",error)
            // setapi(false)
          });
        }
        const [ndata,setNdata] = useState({})


        function ViewInfo(org){
            let divi = document.querySelector(".kuttidappa")
            let cd = document.querySelector(".content_div")
            let sd = document.querySelector(".side_div")
            let iin = document.querySelector(".infoin")
            let iic = document.querySelector(".infocard")


            for(let i=0;i<data.length;i++){
                if(data[i].organ===org){
                    setNdata(data[i])
                    divi.classList.add("show")
                    cd.classList.add("showc")
                    iin.classList.add("infoopen")
                    sd.document.querySelector.add("onopen")
                    iic.document.querySelector.add("onopen")
                    let o = orgref.current.innerText
                    // console.log(o)
                    setorg(o)
                }
            }

        }
  
        
   
  
      useEffect(() => {
        fetchContent()
      }, []);
  return (
    <div className='out_main'>  
     <div className='navbar'>
            <p><img src={logo} width="200" height="50"></img></p>
    <p><Link to="/" id="link">
                HOME
            </Link></p>
    <p><Link to="/search" id="link">
                SEARCH DISEASE
            </Link></p>
            <p><Link to="/model" id="link">
                MODEL VIEW
            </Link></p>
    <p><Link to="/info" id="link">
                ORGAN VIEW
            </Link></p>
    <p><Link to="/news" id="link">
                NEWS
            </Link></p>
    </div>
    <div className='main_info'>
        <div className='side_div'>
        <div className="infoin">
            {
                data.map(item => (
                    <a key={item.id}>
                      <div className='infocard'>
                      {/* <div className='i1'><img src={item.img_link}></img></div> */}
                            <div className='i2' style={{
                                backgroundImage:`url(${item.img_link})`,
                                backgroundClip:"content-box",
                                backgroundPosition:"center"
                            }}><div className='orginfo'>
                                     <h4 className='orgname' ref={orgref}><Translate text={item.organ}/></h4>
                                     <button onClick={(e)=>ViewInfo(item.organ)}>VIEW</button>
                            </div>
                               
                            </div>
                      </div>
                           
                            
                        
              
                    </a>
                    ))
                  
            }
              </div>
        </div>
        <div className='content_div'>
            <div className="kuttidappa">
                <h1 style={{
                    textAlign:"center",
                    textTransform:"capitalize"
                }}>{ndata.organ}</h1>
        <h2>உறுப்பு விளக்கம்</h2>
       
        <div>{ndata.about}</div>
        <h2>நோய்கள்:</h2>
        <div>{ndata.diseases}</div>
        <h2>INFORMATION VIDEO:</h2>
        <div className='video'>
        <iframe width="695" height="391" src="https://www.youtube.com/embed/xpMzbFEJOds" title="Human Brain Facts | Tamil | Madan Gowri | MG" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Info

import React, { useState,useEffect } from 'react'
import {useRef} from 'react';
import { Translate } from './Translate'
import './home.css';
import {FaArrowCircleLeft, FaEject, FaMicrophone, FaPlay, FaRemoveFormat, FaSearch, FaSpeakap, FaSpeakerDeck} from "react-icons/fa";
import Xarrow from "react-xarrows"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Link } from 'react-router-dom';
import logo from"./logo.png" 

// const rootStyle = { display: "flex", justifyContent: "left" };
// const rowStyle = {
//    margin: "200px 0",
//    display: "flex",
//    justifyContent: "space-around",
// };

// const boxStyle = { padding: "10px", border: "1px solid black" };

const Home = () => {
   const [data,setData] = useState({})
   const [disease,setDisease] = useState([])
   const [inh,setInher] = useState("")
   const [hid,sethid] = useState(0)
   const [check,Setcheck] = useState(0)
   const inputRef = useRef(null);
   const BoxRef = useRef(null);
   const mainRef = useRef(null);
   const sympRef = useRef(null);
   const [voice,setVoice] = useState(0)
   const handleKeyDown = event => {
  
      if (event.key === 'Enter') {
        fetchContent()
      }
   }
   const handleEnter = event => {
  
      if (event.key === 'Enter') {
        fetchDisease()
      }
   }
   async function fetchDisease() {
      let name = sympRef.current.value
      const request = await fetch(`http://127.0.0.1:8000/diseasebysymp-list/${name}`)
        .then(response => {
          if(response.ok)
        {
          return response.json(); 
        }
        else{
          console.log("im not here")
        }
      })
        .then(data => {
          console.log(data)
          setDisease(data)
       
        })
        .catch((error) => {
          console.log("the error ",error)
        });
      }


   async function fetchContent() {
      let name = inputRef.current.value
      const request = await fetch(`http://127.0.0.1:8000/disease-list/${name}`)
        .then(response => {
          if(response.ok)
        {
          return response.json(); 
        }
        else{
          console.log("im not here")
        }
      })
        .then(data => {
          console.log(data)
          setData(data)
          sethid(1)
          if(data.inheritance==true){
            setInher("இது ஒரு பரம்பரை நோய்")
          }
          else{
            setInher("இது பரம்பரை நோய் அல்ல")
          }   
          
       
        })
        .catch((error) => {
          console.log("the error ",error)
          // setapi(false)
        });
      }
      async function fetchContentD(n) {
         let name = n
         const request = await fetch(`http://127.0.0.1:8000/disease-list/${name}`)
           .then(response => {
             if(response.ok)
           {
             return response.json(); 
           }
           else{
             console.log("im not here")
           }
         })
           .then(data => {
             console.log(data)
             setData(data)
             sethid(1)
             if(data.inheritance==true){
               setInher("இது ஒரு பரம்பரை நோய்")
             }
             else{
               setInher("இது பரம்பரை நோய் அல்ல")
             }   
             
          
           })
           .catch((error) => {
             console.log("the error ",error)
             // setapi(false)
           });
         }


      const handleCheck = ()=>{
         if(check===0){
            Setcheck(1)
         }
         else{
            Setcheck(0)
         }
      }
      
      const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();
      const startListening = () => {
        if(voice===0){
          console.log("in")
          let mic = document.querySelector(".search")
          mic.style.color = "red"
         SpeechRecognition.startListening({ continuous: true });
         setVoice(1)
        }
        else if(voice===1){
          SpeechRecognition.stopListening();
          let mic = document.querySelector(".search")
          mic.style.color = "black"
          setVoice(0)
        }
        
        
        console.log(transcript)
      }
      function speaks(text){
        if ('speechSynthesis' in window) {
          var synthesis = window.speechSynthesis;
        
          // Get the first `en` language voice in the list
          var voice = synthesis.getVoices().filter(function (voice) {
            return voice.lang === 'en';
          })[0];
        
          // Create an utterance object
          var utterance = new SpeechSynthesisUtterance(text);
        
          // Set utterance properties
          utterance.voice = voice;
          utterance.pitch = 1.5;
          utterance.rate = 1.25;
          utterance.volume = 0.8;
        
          // Speak the utterance
          synthesis.speak(utterance);
        } else {
          console.log('Text-to-speech not supported.');
        }

      }
      
 
    
      // if (!browserSupportsSpeechRecognition) {
      //   return <span>Browser doesn't support speech recognition.</span>;
      // }

      
 

    useEffect(() => {
    }, []);

  return (
     <div className='home_main'>
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

        <div className='home_body'>
        
            
            {check!==1?(
               <div className='search_bar'>
                <p style={{textAlign:"center"}}>SEARCH ABOUT DISEASE:</p>
                <input type="text" placeholder="SEARCH WITH DISEASE" ref={inputRef} onKeyDown={handleKeyDown}></input>
                <button  className="search" onClick={(e)=>startListening()}><FaMicrophone/></button>
                {/* <button onClick={resetTranscript}><FaEject/></button> */}
                
                {
      listening ? <div>{inputRef.current.value = transcript}</div> : null

      }
                <div>
      
      
      
      
    </div>
                </div>
            ):null

}
           
            <div className='checker'><input type="checkbox" onChange={handleCheck} ></input><label>SEARCH WITH SYMPTOM</label>
            {check===1?(
               <div className='search_bar'>
               <input type="text" placeholder="SEARCH WITH SYMPTOM" ref={sympRef} onKeyDown={handleEnter}></input>
               <button onClick={(e)=>fetchDisease()} className="search"><FaSearch/></button>
               </div>
            ):null
            }
            {disease!==null?(
               
                   <div className='newdisease'>
                       {
                        
      disease.map(item => (
      <a key={item.id}>
       
         <div className='newd_in'>
            <h2>{item.name}</h2>
            <p>Symptoms:{item.symptoms1},{item.symptoms2},{item.symptoms3},{item.symptoms4}</p>
            <button onClick={(e)=>fetchContentD(item.name)}>VIEW</button>
         </div>

        
      
      </a>
      ))
     
      }
       </div>
              
               
            ):null

            }
            
            </div>


           
            
            <div className='dinfo'><p>
               </p>{data.about}</div>
            
         
     {hid===1? (
     <div className='main_struct' ref={mainRef}>
            <div className='diname' ref={BoxRef}><div>{data.tname}</div></div>
            <div className='part_affected' id="parta">
               <p>PARTS AFFECTED</p>
               <div><Translate text={data.part_affected1}/></div>
               <div><Translate text={data.part_affected2}/></div>
               <div><Translate text={data.part_affected3}/></div>
               <div><Translate text={data.part_affected4}/></div>
            </div>
           
            <div className='symp_s' id="sympt">
               <p>SYMPTOMS</p>
               <div><Translate text={data.symptoms1}/></div>
               <div><Translate text={data.symptoms2}/></div>
               <div><Translate text={data.symptoms3}/></div>
               <div><Translate text={data.symptoms4}/></div>
               
            </div>
            <div className='causes'><p>CAUSES</p>{data.casuedby}</div>
            <div className='cure' id="cure"><h2>CURE:</h2><button onClick={(e)=>{speaks(data.cure)}}><FaPlay/></button>{data.cure} </div>
            <div className='inherit' id="inherit">INHERITANCE:{inh}</div>
            <Xarrow
                start={BoxRef} //can be react ref
                end="sympt" //or an id
                labels="symptoms"
            />
                    <Xarrow
                start={BoxRef} //can be react ref
                end="parta" //or an id
                labels="parts affected"
            />
                <Xarrow
                start={BoxRef} //can be react ref
                end="cure" //or an id
                labels="MEDICATIONS"
            />
                <Xarrow
                start={BoxRef} //can be react ref
                end="inherit" //or an id
                labels="Is inherited?"
            />
            

            </div>):null
 
  }
           

        </div>
     </div>
    
  )
}


export default Home
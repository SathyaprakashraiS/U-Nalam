import React ,{ useState,useEffect }from 'react'
import { Link } from 'react-router-dom';
import logo from"./logo.png" 
import "./news.css"
import { Translate } from './Translate';


const News = () => {
    const [news,setnews] = useState([])
    async function fetchContent() {
        
        const request = await fetch(`http://127.0.0.1:8000/news-list/`)
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
            setnews(data)
           
            
         
          })
          .catch((error) => {
            console.log("the error ",error)
          });
        }

        const openArticle =(link)=>{
            
        }

        useEffect(() => {
            fetchContent()
          }, []);
     
  return (
    <div>
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
       <div className='news_main'>
        {
            news.map(item=>
                <a key={item.id}>
                <div className='news_inner'>
            <div className='news_image'>
                <img src={item.img_link}></img>
            </div>
            <div className='news_text'>
                <h1><Translate text={item.title}/></h1>
                <h3>{item.desc}</h3>
                <button><a href={item.art_link}>OPEN ARTICLE</a></button>
            </div>
        </div>

                </a>)
        }

       </div>
    </div>

  )
}

export default News

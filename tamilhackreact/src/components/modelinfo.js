import { Link,Redirect, useNavigate } from 'react-router-dom';
import logo from"./logo.png" 
import React, { useState,useEffect } from 'react'
import {useRef} from 'react';
import { Translate } from './Translate'
import "./modelinfo.css"


const Modelinfo = () => {
    let history = useNavigate();

  

    const[headref,isheadref] = useHover()
    const[lungref,islungref] = useHover()
    const[abref,isabref] = useHover()
    const[pelref,ispelref] = useHover()
    const[legref,islegref] = useHover()
    const[hopen,sethopen] = useState(false)
    const[lopen,setlopen] = useState(false)
    const[aopen,setaopen] = useState(false)
    const[popen,setpopen] = useState(false)
    const[legopen,setlegopen] = useState(false)

    function passdata(text){
        console.log("psuh")
        history('/organ', { state: {data:text } });
    }

    
  return (
    <div className='modelmain'>
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
    <div className='modelbody'>
        <div className='model_img'>

        </div>
        <div className='model_grid'>
            <div className='headr'  ref={headref}>
            <div>{isheadref ? <div className="model_floater">
                <p><Translate text="HEAD REGION"/></p>
                <button onClick={(e)=>{
                    sethopen(true)
                    setlegopen(false)
                    setlopen(false)
                    setaopen(false)
                    setpopen(false)
                
                }}>VIEW INFO</button>
            </div> :null}</div>
            </div>
            <div className='lungr'  ref={lungref}>
            <div>{islungref ? <div className="model_floater">
                <p><Translate text="LUNG REGION"/></p>
                <button onClick={(e)=>{setlopen(true)
                 sethopen(false)
                 setlegopen(false)
                 setaopen(false)
                 setpopen(false)}}>VIEW INFO</button>
            </div> :null}</div>
            </div>
            <div className='abdomr' ref={abref}>
            <div>{isabref ? <div className="model_floater">
                <p><Translate text="ABDOMINAL REGION"/></p>
                <button onClick={(e)=>{setlopen(false)
                 sethopen(false)
                 setlegopen(false)
                 setaopen(true)
                 setpopen(false)}}>VIEW INFO</button>
            </div> :null}</div>
            </div>
            <div className='pelvicr' ref={pelref}>
            <div>{ispelref ? <div className="model_floater">
                <p><Translate text="PELVIC REGION"/></p>
                <button onClick={(e)=>{setlopen(false)
                 sethopen(false)
                 setlegopen(false)
                 setaopen(false)
                 setpopen(true)}}>VIEW INFO</button>
            </div> :null}</div>
            </div>
            <div className='legr'    ref={legref}>
            <div>{islegref ? <div className="model_floater">
                <p><Translate text="LEG REGION"/></p>
                <button onClick={(e)=>{setlopen(false)
                 sethopen(false)
                 setlegopen(true)
                 setaopen(false)
                 setpopen(false)}}>VIEW INFO</button>
            </div> :null}</div>
            </div>
        </div>
        <div className='model_cont'>
          {hopen ? 
            <div className='lung_data'>
                  <div  className="upperdata">
                    <div className='upper_img'>
                        <img src="https://image.slidesharecdn.com/1-170422165039/85/anatomy-of-temporal-region-4-320.jpg?cb=1666031611"></img>
                    </div>
                    <div className="upper_text">
                        <h2><Translate text="HEAD REGION"/></h2>
                    </div>
                  </div>
                  <div className="lower_data">
                    <div className="lower_card1">
                        <div className="lower_img">
                            <img src="https://img.freepik.com/free-vector/human-internal-organ-with-brain_1308-108641.jpg?w=2000"></img>
                        </div>
                        <div className='lower_text'>
                            <p><Translate text="BRAIN"/></p>
                            <button onClick={(e)=>passdata("BRAIN")}>VIEW INFO</button>
                        </div>

                    </div>
                    <div className="lower_card1">
                        <div className="lower_img">
                            <img src="https://images.medicinenet.com/images/image_collection/anatomy/eye-anatomy.jpg"></img>
                        </div>
                        <div className='lower_text'>
                            <p><Translate text="EYE"/>EYE</p>
                            <button>VIEW INFO</button>
                        </div>

                    </div>
                    <div className="lower_card1">
                        <div className="lower_img">
                            <img src="https://media.istockphoto.com/id/535537597/vector/anatomy-of-human-ear-cross-section-illustration.jpg?s=612x612&w=is&k=20&c=nkOJMrdoDvDuKSwfyjBss6v1vQwE6jGmu6R-2hwFnoI="></img>
                        </div>
                        <div className='lower_text'>
                            <p><Translate text="EAR"/>EAR</p>
                            <button>VIEW INFO</button>
                        </div>

                    </div>
                    <div className="lower_card1">
                        <div className="lower_img">
                            <img src="https://training.seer.cancer.gov/images/anatomy/digestive/mouth.jpg"></img>
                        </div>
                        <div className='lower_text'>
                            <p><Translate text="MOUTH"/>MOUTH</p>
                            <button>VIEW INFO</button>
                        </div>

                    </div>
                    <div className="lower_card1">
                        <div className="lower_img">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Head_Olfactory_Nerve_Labeled.png/240px-Head_Olfactory_Nerve_Labeled.png"></img>
                        </div>
                        <div className='lower_text'>
                            <p><Translate text="NOSE"/>NOSE</p>
                            <button>VIEW INFO</button>
                        </div>

                    </div>
                    <div className="lower_card1">
                        <div className="lower_img">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Human_tooth_diagram-en.svg/480px-Human_tooth_diagram-en.svg.png"></img>
                        </div>
                        <div className='lower_text'>
                            <p><Translate text="TOOTH"/>TOOTH</p>
                            <button>VIEW INFO</button>
                        </div>

                    </div>
                  </div>

            </div> : null
            }
       
            {lopen ? 
            <div className='lung_data'>
                    <div  className="upperdata">
                    <div className='upper_img'>
                        <img src="https://www.physio-pedia.com/images/5/55/Lung_pleura.jpg"></img>
                    </div>
                    <div className="upper_text">
                        <h2><Translate text="LUNG REGION"/>LUNG REGION</h2>
                    </div>
                  </div>
                  <div className="lower_data">
                    <div className="lower_card1">
                        <div className="lower_img">
                            <img src="https://cdn1.byjus.com/wp-content/uploads/2022/07/lungs-diagram.png"></img>
                        </div>
                        <div className='lower_text'>
                            <p><Translate text="LUNGS"/>LUNGS</p>
                            <button>VIEW INFO</button>
                        </div>

                    </div>
                    <div className="lower_card1">
                        <div className="lower_img">
                            <img src="https://cdn.britannica.com/88/22488-050-8AAD90B0/conduction-heart-individuals-sinoatrial-node-pacemaker-cells.jpg"></img>
                        </div>
                        <div className='lower_text'>
                            <p><Translate text="HEART"/>HEART</p>
                            <button>VIEW INFO</button>
                        </div>

                    </div>
                    <div className="lower_card1">
                        <div className="lower_img">
                            <img src="https://images.medicinenet.com/images/image_collection/webmd_anatomy/esophagus-anatomy.jpg"></img>
                        </div>
                        <div className='lower_text'>
                            <p><Translate text="esophagus"/>esophagus</p>
                            <button>VIEW INFO</button>
                        </div>

                    </div>
                    <div className="lower_card1">
                        <div className="lower_img">
                            <img src="https://s3-us-west-2.amazonaws.com/courses-images-archive-read-only/wp-content/uploads/sites/403/2015/04/21031639/2309_The_Respiratory_Zone.jpg"></img>
                        </div>
                        <div className='lower_text'>
                            <p><Translate text="capilaries"/>CAPILARIES</p>
                            <button>VIEW INFO</button>
                        </div>

                    </div>
                
                  </div>
            </div> : null
            }
            {aopen ? 
            <div className='lung_data'>
                    <div  className="upperdata">
                    <div className='upper_img'>
                        <img src="https://o.quizlet.com/V7WEZ6hvr7BKlIDfuZDLsg.jpg"></img>
                    </div>
                    <div className="upper_text">
                        <h2><Translate text="ABDOMINAL REGION"/>ABDOBMINAL REGION</h2>
                    </div>
                  </div>
                  <div className="lower_data">
                    <div className="lower_card1">
                        <div className="lower_img">
                            <img src="https://i.pinimg.com/736x/a6/51/dc/a651dce643f1cbf60067c2733de765f8.jpg"></img>
                        </div>
                        <div className='lower_text'>
                            <p><Translate text="STOMACH"/>STOMACH</p>
                            <button>VIEW INFO</button>
                        </div>

                    </div>
                    <div className="lower_card1">
                        <div className="lower_img">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Blausen_0699_PancreasAnatomy2.png"></img>
                        </div>
                        <div className='lower_text'>
                            <p><Translate text="PANCREAS"/>PANCREAS</p>
                            <button>VIEW INFO</button>
                        </div>

                    </div>
                    <div className="lower_card1">
                        <div className="lower_img">
                            <img src="https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2013/11/15/17/40/ds00097_-ds00373_-ds00398_-ds00399_-ds00411_-ds00455_-ds00676_-ds00743_-ds00785_-ds00811_-ds00961_-ds01125_-ds01133_-my00349_im02250_r7_liverthu_jpg.jpg"></img>
                        </div>
                        <div className='lower_text'>
                            <p><Translate text="LIVER"/>LIVER</p>
                            <button>VIEW INFO</button>
                        </div>

                    </div>
                    <div className="lower_card1">
                        <div className="lower_img">
                            <img src="https://img.freepik.com/free-vector/human-internal-organ-with-intestine_1308-108772.jpg"></img>
                        </div>
                        <div className='lower_text'>
                            <p><Translate text="INTESTINE"/>INTESTINE</p>
                            <button>VIEW INFO</button>
                        </div>

                    </div>
                    <div className="lower_card1">
                        <div className="lower_img">
                            <img src="https://www.news-medical.net/image.axd?picture=2018%2F10%2Fshutterstock_1027902178.jpg"></img>
                        </div>
                        <div className='lower_text'>
                            <p><Translate text="KIDNEY"/>KIDNEY</p>
                            <button>VIEW INFO</button>
                        </div>

                    </div>
                    <div className="lower_card1">
                        <div className="lower_img">
                            <img src="https://my.clevelandclinic.org/-/scassets/images/org/health/articles/22467-uterus"></img>
                        </div>
                        <div className='lower_text'>
                            <p><Translate text="URETUS"/>URETUS</p>
                            <button>VIEW INFO</button>
                        </div>

                    </div>
                  </div>
            </div> : null
            }
            {popen ? 
            <div className='lung_data'>
                    <div  className="upperdata">
                    <div className='upper_img'>
                        <img src="https://cdn.britannica.com/99/120999-050-8E7B574A/Bones-girdle.jpg"></img>
                    </div>
                    <div className="upper_text">
                        <h2><Translate text="PELVIC REGION"/>PELIV REGION</h2>
                    </div>
                  </div>
                  <div className="lower_data">
                    <div className="lower_card1">
                        <div className="lower_img">
                            <img src="https://www.niddk.nih.gov/-/media/Images/Health-Information/Urologic/Urinary-Tract-BIG_2064x1895.jpg?h=1895&w=2064&hash=00F642264B81A60501C80AC35A4F6766"></img>
                        </div>
                        <div className='lower_text'>
                            <p><Translate text="URINARY BLADDER"/>URINARY BLADDER</p>
                            <button>VIEW INFO</button>
                        </div>

                    </div>
                    <div className="lower_card1">
                        <div className="lower_img">
                            <img src="https://www.malecontraceptive.org/uploads/1/3/1/9/131958006/male-vs-female-urethra_orig.png"></img>
                        </div>
                        <div className='lower_text'>
                            <p><Translate text="URETHRA"/>URETHRA</p>
                            <button>VIEW INFO</button>
                        </div>

                    </div>
                    <div className="lower_card1">
                        <div className="lower_img">
                            <img src="https://maleinfertility.org/sites/default/files/styles/panopoly_image_original/public/relabeled_anatomy_of_the_testicle.jpg?itok=Ywn6RDA9"></img>
                        </div>
                        <div className='lower_text'>
                            <p><Translate text="TESTICLES"/>TESTICLES</p>
                            <button>VIEW INFO</button>
                        </div>

                    </div>
                    
                  </div>
            </div> : null
            }
            {legopen ? 
            <div className='lung_data'>
                    <div  className="upperdata">
                    <div className='upper_img'>
                        <img src="https://images.medicinenet.com/images/featured/detail-leg.jpg"></img>
                    </div>
                    <div className="upper_text">
                        <h2><Translate text="LEG REGION"/>LEG REGION</h2>
                    </div>
                  </div>
                  <div className="lower_data">
                    <div className="lower_card1">
                        <div className="lower_img">
                            <img src="https://www.physio-pedia.com/images/thumb/a/aa/Femur_bone.png/400px-Femur_bone.png"></img>
                        </div>
                        <div className='lower_text'>
                            <p><Translate text="FEMUR"/>FEMUR</p>
                            <button>VIEW INFO</button>
                        </div>

                    </div>
                    <div className="lower_card1">
                        <div className="lower_img">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Blausen_0597_KneeAnatomy_Side.png"></img>
                        </div>
                        <div className='lower_text'>
                            <p><Translate text="KNEE JOINT"/>KNEE JOINT</p>
                            <button>VIEW INFO</button>
                        </div>

                    </div>
                    <div className="lower_card1">
                        <div className="lower_img">
                            <img src="https://www.versusarthritis.org/media/22616/oa-foot-bones-500x573.jpg?width=436.3001745200698&height=500"></img>
                        </div>
                        <div className='lower_text'>
                            <p><Translate text="FOOT"/>FOOT</p>
                            <button>VIEW INFO</button>
                        </div>

                    </div>
                  
                  </div>
            </div> : null
            }
       
            
            
           

        </div>
    </div>
    </div>
  )
}

const useHover = () => {
    const [isHovering, setIsHovering] = React.useState(false);
  
    const handleMouseOver = React.useCallback(() => setIsHovering(true), []);
    const handleMouseOut = React.useCallback(() => setIsHovering(false), []);
   
  
    const nodeRef = React.useRef();
  
    const callbackRef = React.useCallback(
      node => {
        if (nodeRef.current) {
          nodeRef.current.removeEventListener('mouseover', handleMouseOver);
          nodeRef.current.removeEventListener('mouseout', handleMouseOut);
         
        }
  
        nodeRef.current = node;
  
        if (nodeRef.current) {
          nodeRef.current.addEventListener('mouseover', handleMouseOver);
          nodeRef.current.addEventListener('mouseout', handleMouseOut);
       
        }
      },
      [handleMouseOver, handleMouseOut]
    );
  
    return [callbackRef, isHovering];
  };

export default Modelinfo
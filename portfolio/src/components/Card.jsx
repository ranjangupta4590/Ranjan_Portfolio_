
import { useState } from 'react';
import react from '../assets/cpp.jpg';
import Projects from './Projects';

const Cardseen =({handleHover})=>{
  return (
    <div 
    onMouseEnter={()=>handleHover(true)}
    onMouseLeave={()=>handleHover(false)}
    className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105  ">
                
        <img src={react} alt=''/>
    </div>
  )
}



const Card = () => {

  const [isPicStart,setIsPicStart]=useState(true);
const [isVideoCard,setIsVideoCard]=useState(false);

const handleHover=(cardNumber,visible)=>{
  if(cardNumber===1){
    setIsPicStart(visible);
  }
  else if(cardNumber===2){
    setIsVideoCard(visible);
  }
};

  return (
    <div>       
   {/* {!isVideoCard?<Cardseen handleHover={handleHover}/>:<Projects />} */}
   {(!isVideoCard) ?<Cardseen handleHover={()=>handleHover(2,true)}/>:<Projects handleHover={() => handleHover(1, true)} />}
   {/* {isPicStart && <Cardseen handleHover={() => handleHover(1, false)} />}
   {isVideoCard && <Projects handleHover={() => handleHover(2, false)} />} */}
    
      
    </div>
  )
};

export default Card;
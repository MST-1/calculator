import React from 'react'
import Displayrow from './Displayrow';

const Display = (props) => {
  const { expresion, answer } = props;

  const styles = {
    firstDis:{
      background:'rgb(166 233 225)'
    }
    ,
    secDis:{
 
 
    }
 
   
 }

  
  return (
    <div className='display'>
      <Displayrow value={answer} />
      <Displayrow value={expresion} />
    </div>
  )
}



export default Display

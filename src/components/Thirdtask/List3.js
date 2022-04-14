import React from 'react'

function List3(props) {

  const deleteImageHandler=()=>{
   document.getElementById('img1').src="";
   document.getElementById('img2').src="";
    console.log('deletehandler')
    console.log(document.getElementById('img1'))
  }
  
return (
  
    <div className='deletedata'>
      <img id="img1" src={props.imgData[0]}/>
      <img id="img2" src={props.imgData[1]}/>
  <button type='button' className='button'onClick={()=>deleteImageHandler()}>Delete</button>
    </div> 
   
  )
}

export default List3
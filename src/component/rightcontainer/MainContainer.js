import React,{useEffect} from 'react'
import Buttonlist from './Buttonlist';
import VideoContainer from './VideoContainer';
import { Rtubeapi } from '../../utils/constants';
console.log('Loading',Rtubeapi)
const MainContainer = () => {

  useEffect(()=>{
   fetch(Rtubeapi).then((res)=>res.json()).then((data)=>console.log(data)).catch((err)=>console.log(err));
  },[])









  return (
    <div className='col-span-11 bg-orange-700'>
    <Buttonlist/>
    <VideoContainer/>
    </div>
  )
}

export default MainContainer;
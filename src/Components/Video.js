import React,{useRef} from 'react'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ReactPlayer from 'react-player';

export default function Video() {
    const VIDEO_PATH = 'https://www.youtube.com/watch?v=L2pGwDngAMc&ab_channel=Hexnode';
    const playerRef = useRef(null);
  return (
    <>
    <div style={{"display":"flex","flex-direction":"column","justify-content":"space-between","height":"100%","width":"100%" ,"background-color":"white" ,"margin-top":"40px","border-radius":"5px"}}>

        <div style={{"display":"flex","flex-direction":"row","justify-content":"space-between"}}>
            <h3>Product Video</h3>
            <MoreVertIcon />
        </div>
            <ReactPlayer className="Player" ref={playerRef} url={VIDEO_PATH} controls={false} />
    </div>
    </>
  )
}

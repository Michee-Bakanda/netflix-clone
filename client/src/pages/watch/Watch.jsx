import './watch.scss'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const Watch = () => {
  return (
    <div className="watch">
        {/* <img src="./naruto.webp" alt="list-item" /> */}
        <div className="back">
           <ArrowBackOutlinedIcon />
           Back
        </div>
        <video className='video' autoPlay progress controls  src="trailera.mp4"/>
    </div>
  )
}

export default Watch
import { useState } from "react";
import "./listIterm.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";

const ListIterm = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "trailera.mp4";
  return (
    <div
      className="listIterm"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src="./naruto.webp" alt="list-item" />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop muted />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrowIcon className="icon" />
              <AddIcon className="icon" />
              <ThumbUpOutlinedIcon className="icon" />
              <ThumbDownOffAltOutlinedIcon className="icon" />
            </div>

            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+18</span>
              <span>2022</span>
            </div>

            <div className="desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
              aliquam, molestiae veniam illum eius adipisci explicabo quae eos
              earum neque repellat modi! Ea error totam sunt incidunt
              cupiditate, mollitia voluptate!
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListIterm;

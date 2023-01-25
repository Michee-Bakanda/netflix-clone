import { useRef, useState } from "react";
import "./list.scss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ListIterm from "../listItem/ListIterm";

const List = () => {
  const [isMoved, setIsMoved] = useState(false)
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true)
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosIcon
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{display: !isMoved && "none"}}
        />
        <div className="container" ref={listRef}>
          <ListIterm index={0} />
          <ListIterm index={1} />
          <ListIterm  index={2}/>
          <ListIterm index={3} />
          <ListIterm index={4} />
          <ListIterm index={5} />
          <ListIterm index={6} />
          <ListIterm index={7} />
          <ListIterm index={8} />
          <ListIterm index={9} />
        </div>
        <ArrowForwardIosIcon
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;

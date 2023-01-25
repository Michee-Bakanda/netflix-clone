import "./featured.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option value="genre">Genre</option>
            <option value="History">History</option>
            <option value="Comedy">Comedy</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
          </select>
        </div>
      )}
      <img
        width="100%"
        // height="2400px"
        src="./banner.webp"
        alt="banner-img"
        style={{ objectFit: "cover" }}
      />
      <div className="info">
        <img src="./netflix_logo.png" alt="info-text" />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem quam sed expedita minima dolorum cupiditate cumque quis
          doloribus! Explicabo numquam nemo sequi blanditiis, consequatur sint
          iste ullam! Laboriosam, repellat quae?
        </span>
        <div className="buttons">
          <button className="play">
           <PlayArrowIcon />
            <span>play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon/>
            <span>more</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

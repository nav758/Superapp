import action from "../../assets/action.png";
import drama from "../../assets/drama.png";
import fantasy from "../../assets/fantasy.png";
import fiction from "../../assets/fiction.png";
import horror from "../../assets/horror.png";
import music from "../../assets/music.png";
import romance from "../../assets/romance.png";
import thriller from "../../assets/thriller.png";
import western from "../../assets/western.png";
import Box from "../../components/MoviesBox";
import Chip from "../../components/Chip";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
const genres = [
  {
    id: "Action",
    color: "#FF5209",
    image: <img style={{ width: "120px", height: "100px" }} src={action} />,
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: <img style={{ width: "120px", height: "100px" }} src={drama} />,
  },
  {
    id: "Fantasy",
    color: " #FF4ADE",
    image: <img style={{ width: "120px", height: "100px" }} src={fantasy} />,
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: <img style={{ width: "120px", height: "100px" }} src={fiction} />,
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: <img style={{ width: "120px", height: "100px" }} src={horror} />,
  },
  {
    id: "Music",
    color: "#E61E32",
    image: <img style={{ width: "120px", height: "100px" }} src={music} />,
  },
  {
    id: "Romance",
    color: "#11B800",
    image: <img style={{ width: "120px", height: "100px" }} src={romance} />,
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: <img style={{ width: "120px", height: "100px" }} src={thriller} />,
  },
  {
    id: "Western",
    color: "#912500",
    image: <img style={{ width: "120px", height: "100px" }} src={western} />,
  },
];

function Info() {
  const [selectedMovies, setSelectedMovies] = useState([]);
  const navigate = useNavigate();
  console.log(selectedMovies);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        background: "black",
        color: "white",
        minHeight: "100vh",
        padding: "0 100px 0 80px",
        fontFamily: "Roboto",
      }}
    >
      <div
        style={{
          height: "80vh",
          width: "50vw",
          padding: "50px",
        }}
      >
        <h1
          style={{
            color: "#72DB73",
            fontFamily: "cursive",
            fontWeight: "100",
          }}
        >
          Super App
        </h1>
        <p
          style={{
            fontSize: "2.5rem",
          }}
        >
          Choose your entertainment category
        </p>
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            marginTop: "12px",
          }}
        >
          {selectedMovies.map((movie) => (
            <Chip
              key={movie}
              data={movie}
              selectedMovies={selectedMovies}
              setSelectedMovies={setSelectedMovies}
            />
          ))}
        </div>
        {selectedMovies.length < 3 ? (
          <p style={{ color: "red" }}>Minimum 3 categories are required</p>
        ) : (
          <></>
        )}
      </div>
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "10px",
            width: "50vw",
            padding: "0 50px 0 50px",
          }}
        >
          {genres.map((genre) => (
            <Box
              key={genre.id}
              data={genre}
              selectedMovies={selectedMovies}
              setSelectedMovies={setSelectedMovies}
            />
          ))}
        </div>
        <button
          style={{
            background: "green",
            borderRadius: "30px",
            border: "none",
            padding: "5px",
            fontFamily: "Roboto",
            fontWeight: "500",
            color: "#fff",
            position: "relative",
            float: "right",
            marginRight: "60px",
          }}
          onClick={()=>{
            navigate("/showcase");
          }}
          disabled={selectedMovies.length<3}
        >
          &nbsp;&nbsp;&nbsp;Next Page&nbsp;&nbsp;&nbsp;
        </button>
      </div>
    </div>
  );
}

export default Info;

/* eslint-disable react/prop-types */
export default function Chip({ data, selectedMovies, setSelectedMovies }) {
  const handleClick = () => {
    if (selectedMovies.includes(data)) {
      setSelectedMovies((prev) => prev.filter((item) => item !== data));
    } else {
      setSelectedMovies((prev) => [...prev, data]);
    }
  };
  return (
    <div
      style={{
        background: "green",
        borderRadius: "30px",
        padding: "5px",
        fontFamily: "Roboto",
        fontWeight: "300",
      }}
    >
      &nbsp;&nbsp;{data} &nbsp; &nbsp;
      <span
        style={{
          color: "#085C00",
          fontWeight: "500",
        }}
        onClick={handleClick}
      >
        X
      </span>
      &nbsp;&nbsp;
    </div>
  );
}

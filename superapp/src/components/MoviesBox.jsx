/* eslint-disable react/prop-types */
export default function Box({ data, selectedMovies, setSelectedMovies }) {
  const handelChick = () => {
    if (selectedMovies.includes(data.id)) {
      setSelectedMovies((prev) => prev.filter((item) => item !== data.id));
    } else {
      setSelectedMovies((prev) => [...prev, data.id]);
    }
  };
  return (
    <div
      style={{
        background: data.color,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "12px",
        padding: "5px",
        height: "80%", // Ensure the div takes up the full height
        border: `${selectedMovies.includes(
          data.id
        )? "4px Solid green" :  "1px Solid Black"}`,
      }}
      onClick={handelChick}
    >
      <h1>{data.id}</h1>
      {data.image}
    </div>
  );
}

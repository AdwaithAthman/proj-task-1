import { useState, useEffect } from "react";

function App() {
  const [director, setDirector] = useState();
  const [movie, setMovie] = useState();
  const [list, setList] = useState([]);

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("list")) || [];
    setList(storedList);
  }, []);

  const addToList = (e) => {
    e.preventDefault();
    const newList = [...list, { movie, director }];
    setList(newList);
    setMovie("");
    setDirector("");
  };

  const removeFromList = (indexToRemove) => {
    setList(list.filter((item, index) => index !== indexToRemove));
  };

  return (
    <div>
      <h1 className="text-center text-4xl font-medium my-10">
        Director and Movies
      </h1>
      <div className="mx-10 flex flex-col gap-10">
        <form className="flex w-full ">
          <div className="flex w-full gap-5">
            <div className="flex flex-col justify-center items-center gap-2 w-full">
              <input
                type="text"
                name="director"
                value={director}
                onChange={(e) => setDirector(e.target.value)}
                className=" w-full h-full px-2 bg-gray-200 text-gray-900 font-medium"
                placeholder="Director Name"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-2 w-full">
              <input
                type="text"
                name="movie"
                value={movie}
                onChange={(e) => setMovie(e.target.value)}
                className=" px-2 w-full h-full bg-gray-200 text-gray-900 font-medium"
                placeholder="Movie Name"
              />
            </div>
            <button
              type="button"
              className="text-white bg-green-500 px-7 py-2"
              onClick={addToList}
            >
              Add
            </button>
          </div>
        </form>
        <div className="flex flex-col gap-5">
          {list.map((item, index) => (
            <div key={index} className="flex w-full justify-center gap-5">
              <div className=" w-full h-full p-2 bg-white border border-black text-gray-900 font-medium">
                {item.director}
              </div>
              <div className=" w-full h-full p-2 bg-white border border-black text-gray-900 font-medium">
                {item.movie}
              </div>
              <button
                type="button"
                onClick={() => removeFromList(index)}
                className="text-white bg-red-500 px-4 py-2"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

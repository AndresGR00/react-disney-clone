import { useEffect, useState } from "react";
import Film from "../components/Film";

const Films = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await fetch(
          `${import.meta.env.VITE_API_URL}&s=love&type=movie&page=1`
        );
        const response2 = await fetch(
          `${import.meta.env.VITE_API_URL}&s=love&type=movie&page=2`
        );

        const data1 = await response1.json();
        const data2 = await response2.json();

        const films1 = data1.Search || [];
        const films2 = data2.Search || [];

        const allFilms = [...films1, ...films2];
        const allShuffledFilms = allFilms.sort(() => Math.random() - 0.5);
        setFilms(allShuffledFilms);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching films:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-6">
      <h1 className="font-bold text-5xl pt-16">Films</h1>
      {loading ? (
        <p className='font-semibold text-lg pt-10'>Loading...</p>
      ) : (
        <ul className="flex flex-wrap justify-center items-center gap-4 p-6 pb-16">
          {films.map((film) => (
            <li key={film.imdbID}>
              <Film img={film.Poster} name={film.Title} id={film.imdbID} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Films;

import { useEffect, useState } from "react";
import Film from "../components/Film";

const Series = () => {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await fetch(
          `${import.meta.env.VITE_API_URL}&s=game&type=series&page=1`
        );
        const response2 = await fetch(
          `${import.meta.env.VITE_API_URL}&s=game&type=series&page=2`
        );

        const data1 = await response1.json();
        const data2 = await response2.json();

        const series1 = data1.Search || [];
        const series2 = data2.Search || [];

        const allSeries = [...series1, ...series2];
        const allShuffledSeries = allSeries.sort(() => Math.random() - 0.5);
        setSeries(allShuffledSeries);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching series:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-6">
      <h1 className="font-bold text-5xl pt-16">Series</h1>
      {loading ? (
        <p className='font-semibold text-lg pt-10'>Loading...</p>
      ) : (
        <ul className="flex flex-wrap justify-center items-center gap-4 p-6 pb-16">
          {series.map((serie) => (
            <li key={serie.imdbID}>
              <Film img={serie.Poster} name={serie.Title} id={serie.imdbID}  />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Series
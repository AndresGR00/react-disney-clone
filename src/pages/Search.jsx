import SearchInput from '../components/SearchInput'
import { useEffect, useState } from "react";
import Film from "../components/Film";

const Search = () => {
  const [query, setQuery] = useState("war");
  const [searchs, setSearchs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const onHandleInput = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await fetch(
          `${import.meta.env.VITE_API_URL}&s=${query}&page=1`
        );
        const response2 = await fetch(
          `${import.meta.env.VITE_API_URL}&s=${query}&page=2`
        );

        const data1 = await response1.json();
        const data2 = await response2.json();

        const searchs1 = data1.Search || [];
        const searchs2 = data2.Search || [];

        if (searchs1.length === 0 && searchs2.length === 0) {
          setError(true);
        } else {
          const allSearchs = [...searchs1, ...searchs2];
          const allShuffledSearchs = allSearchs.sort(() => Math.random() - 0.5);
          setSearchs(allShuffledSearchs);
          setError(false);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching searchs:", error);
        setLoading(false);
        setError(true);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div className='min-h-[69vh] top-0'>
      <section className='pt-10 pb-4'>
        <SearchInput onChange={onHandleInput} />
      </section>
      <section className="flex flex-col items-center justify-center gap-6">
        {loading ? (
          <p className='font-semibold text-lg pt-10'>Loading...</p>
        ) : error ? (
          <p className='font-semibold text-lg pt-10'>No results found with this term</p>
        ) : (
          <ul className="flex flex-wrap justify-center items-center gap-4 p-6 pb-16">
            {searchs.map((search) => (
              <li key={search.imdbID}>
                <Film img={search.Poster} name={search.Title} id={search.imdbID}  />
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Search;

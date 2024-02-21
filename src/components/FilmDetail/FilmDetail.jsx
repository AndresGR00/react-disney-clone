import "./FilmDetail.css";

const FilmDetail = () => {
  return (
    <div className="container grid grid-cols-4 grid-rows-4 gap-3 w-[70%] h-3/4">
      <div className="title col-start-1 col-end-3 dark:bg-gray-900 bg-slate-400 rounded-lg flex justify-center items-center">
        <h1 className="font-bold text-2xl">Título de la película</h1>
      </div>
      <div className="button1 col-start-1 col-end-2 row-start-2 row-end-3 dark:bg-gray-900 bg-slate-400 rounded-lg flex justify-center items-center">
        <button className="dark:bg-stone-950 dark:hover:bg-gray-800 bg-slate-300 hover:bg-slate-500 rounded-full py-3 px-7 text-center text-md font-semibold">
          Watch
        </button>
      </div>
      <div className="button2 col-start-2 col-end-3 row-start-2 row-end-3 dark:bg-gray-900 bg-slate-400 rounded-lg flex justify-center items-center">
      <button className="dark:bg-stone-950 dark:hover:bg-gray-800 bg-slate-300 hover:bg-slate-500 rounded-full py-3 px-7 text-center text-md font-semibold">
          Trailer
        </button>
      </div>
      <div className="p col-start-1 col-end-3 row-start-3 row-end-5 dark:bg-gray-900 bg-slate-400 rounded-lg flex justify-center items-center p-4 font-semibold">
        <p className="w-[80%]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
          voluptatem accusantium omnis facilis inventore quas praesentium
          assumenda, voluptates, eligendi rem sapiente. Veritatis ut distinctio
          dolor voluptate maxime fugit quis modi.
        </p>
      </div>
      <div className="img col-start-3 col-end-5 row-start-1 row-end-5 dark:bg-gray-900 bg-slate-400 rounded-lg overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://png.pngtree.com/background/20230524/original/pngtree-sad-pictures-for-desktop-hd-backgrounds-picture-image_2705986.jpg"
          alt="imagen"
        />
      </div>
    </div>
  );
};

export default FilmDetail;

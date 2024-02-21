import './FilmDetail.css'

const FilmDetail = () => {
  return (
    <div className="container grid grid-cols-4 grid-rows-4 gap-4 w-3/4 h-3/4">
      <div className="title col-start-1 col-end-3 bg-slate-300">Title</div>
      <div className="button1 col-start-1 col-end-2 row-start-2 row-end-3 bg-orange-600">button1</div>
      <div className="button2 col-start-2 col-end-3 row-start-2 row-end-3 bg-red-400">button2</div>
      <div className="p col-start-1 col-end-3 row-start-3 row-end-5 bg-blue-400">p</div>
      <div className="img col-start-3 col-end-5 row-start-1 row-end-5 bg-green-400">img</div>
    </div>
  );
};

export default FilmDetail;

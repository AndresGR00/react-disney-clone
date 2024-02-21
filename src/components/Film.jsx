import PropTypes from 'prop-types'

const Film = ({ img , name }) => {
  return (
    <a href="#">
        <img className="dark:hover:border-slate-100 hover:border-neutral-950 rounded-xl max-w-[300px] border-2 p-1 border-transparent transition-all duration-300 transform hover:scale-105" src={img} alt={name} />
    </a>
  )
}

Film.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string
}

export default Film
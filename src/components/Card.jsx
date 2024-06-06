import PropTypes from 'prop-types'


const Card = ({children, bg='bg-gray-100'}) => {
    return (
        <div className={`${bg} rounded-lg shadow-md p-6`}>
        {children}
    </div>
  )
}

Card.propTypes = {
    children: PropTypes.node,
    bg: PropTypes.string
}

export default Card
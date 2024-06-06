import Cliploader from 'react-spinners/ClipLoader'
import PropTypes from 'prop-types'

const Spinner = ({loading}) => {
    const override = {
        display: 'block',
        margin: '100px auto'
    }

  return (
    <Cliploader 
        color='#4338ca'
        loading={loading}
        size={150}
        cssOverride={override}
     />
  )
}

Spinner.propTypes = {
    loading: PropTypes.bool
}

export default Spinner
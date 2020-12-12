import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeItem, changeStatus } from '../actions/data';

const List = ({ data, removeItem, changeStatus }) => {

  return (
    <div className="list-container"> {
      data.map(({ title, completed, id }) => (
        <div key={id}>
          <p className={completed ? 'completed': 'not-completed'}>{title}</p>
          <button onClick={() => changeStatus(id)}>
            {completed ? 'not-completed': 'completed'}
          </button>
          <button onClick={() => removeItem(id)}>Delete</button>
        </div>
      )) 
    }</div>
  )
}

List.propTypes = {
  data: PropTypes.array.isRequired,
  removeItem: PropTypes.func.isRequired,
  changeStatus: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  data: state.data  
})

export default connect(mapStateToProps, { removeItem, changeStatus })(List);

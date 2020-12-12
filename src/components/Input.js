import { useLayoutEffect, useRef } from 'react';
import uuid from 'react-uuid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addItem } from '../actions/data';

const Input = ({ addItem }) => {

  const input = useRef();

  useLayoutEffect(() => {
    input.current.focus();
  }, [])

  const add = e => {
    e.preventDefault();
    const title = input.current.value.trim();

    if (title === '') {
      alert('Empty Input');
      return;
    }

    const data = {
      title,
      completed: false,
      id: uuid()
    }
    addItem(data);
    input.current.value = ''
  }

  return (
    <form onSubmit={add}>
      <input
        ref={input}
        type="text"
        placeholder="Enter todo title" 
      />

      <button className='inpBtn'>Add</button>

    </form>
  )
}

Input.propTypes = {
	addItem: PropTypes.func.isRequired
}

export default connect(null, { addItem })(Input);

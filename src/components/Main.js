import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { initialData } from '../actions/data';
import List from './List';
import Input from './Input';

const Main = ({ initialData }) => {

	useEffect(() => {
		initialData();
	}, [initialData]);

	return (
		<div className='mainContainer'>
			<h1 style={styleHead}>TODO WITH REACT AND REDUX</h1>
			<Input />
			<List />
		</div>
	)
}

Main.propTypes = {
	initialData: PropTypes.func.isRequired
}

export default connect(null, { initialData })(Main);

const styleHead = {
	marginBottom: "30px"
};

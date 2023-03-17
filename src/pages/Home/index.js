import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getRequest } from '../../redux/actions/actions';

import User from '../../components/User';

class Home extends Component {
	componentDidMount() {
		this.props.getRequest();
	}
	render() {
		const { users } = this.props;

		let items = [];
		if (typeof users !== 'undefined') {
			items = users.map((value, index) => {
				return <User key={index} {...value} />;
			});
		}
		return <div>{items}</div>;
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		getRequest: payload => {
			dispatch(getRequest(payload));
		}
	};
};
const mapStateToProps = state => {
	return {
		users: state.reducer[0]
	};
};

Home.propTypes = {
	dispatch: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

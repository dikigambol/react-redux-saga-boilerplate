import React from 'react';

const User = ({ id, title }) => {
	return (
		<div>
			<h3>{`Title ${id}: ${title}`}</h3>
		</div>
	);
};

export default User;

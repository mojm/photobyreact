import React from 'react';
import ReactDOM from 'react-dom';

var HelloClass = React.createClass({
	render: function() {
		return <h1>hello world</h1>;
	}
});

ReactDOM.render(
	<HelloClass />,
	document.getElementById('app')
);
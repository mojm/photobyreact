import React from 'react';
import ReactDOM from 'react-dom';

require('../css/app.scss');
var imageDatas = require('../data/imageDatas.json');

imageDatas = (function genImageURL(imageDatasArr) {
	for (var i = 0, j = imageDatasArr.length; i < j; i++) {
		var singleImageData = imageDatasArr[i];
		singleImageData.imageURL = require('../images/' + singleImageData.fileName);
		imageDatasArr[i] = singleImageData;
	}
	return imageDatasArr;
})(imageDatas);



var Appcomponent = React.createClass({
	render: function() {
		return (
			<section className="stage">
				<section className="img-sec">
				</section>
				<nav className="controller-nav"></nav>
			</section>
		);
	}
})

Appcomponent.defaultProps = {};

export default Appcomponent;
import React from 'react';
import ReactDOM from 'react-dom';
import Appcomponent from './components/app.js';

var bpp = document.createElement('div');
bpp.setAttribute("id", "bpp");
var body = document.getElementsByTagName('body')[0];
body.appendChild(bpp);

ReactDOM.render(
	<Appcomponent />,
	document.getElementById('bpp')
);
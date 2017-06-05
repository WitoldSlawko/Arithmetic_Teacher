import React from 'react';
import { _getCurrentYear } from '../helpers/helpers.js';

class Footer extends React.Component {

	render () {
	    return (
	        <footer>
	        	<p>Witold Sławko & Łukasz Samulnik &copy; {_getCurrentYear()} All rights reserved.</p>
	        </footer>
	    )
	}
}

export default Footer;
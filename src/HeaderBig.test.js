import React from 'react';
import ReactDOM from 'react-dom';
import {HeaderBig} from './HeaderBig';

import * as configuration from './test.config';

import { shallow } from 'enzyme';

describe('HeaderBig', ()=>{
	it('renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<HeaderBig />, div);
	  ReactDOM.unmountComponentAtNode(div);
	});

	it('has the right value of state', ()=>{
		const _HeaderBig = shallow(<HeaderBig/>);
		expect(_HeaderBig.state().size).toEqual('Big');
	});
})

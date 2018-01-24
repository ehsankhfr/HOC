import React from 'react';
import ReactDOM from 'react-dom';
import {HeaderSmall} from './HeaderSmall';

import * as configuration from './test.config';

import { shallow } from 'enzyme';

describe('HeaderSmall', ()=>{
	it('renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<HeaderSmall />, div);
	  ReactDOM.unmountComponentAtNode(div);
	});

	it('has the right value of state', ()=>{
		const _HeaderSmall = shallow(<HeaderSmall/>);
		expect(_HeaderSmall.state().size).toEqual('Small');
	});
})

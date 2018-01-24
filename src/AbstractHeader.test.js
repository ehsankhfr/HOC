import React from 'react';
import ReactDOM from 'react-dom';
import {AbstractHeader} from './AbstractHeader';

import * as configuration from './test.config';

import { shallow } from 'enzyme';

describe('AbstractHeader', ()=>{
	let GeneratedComponent = null;
	beforeEach(()=>{
		GeneratedComponent = AbstractHeader({size: 'FOO'})((props)=>(<div className='fooClass'>abcd</div>));
	});

	it('renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<GeneratedComponent />, div);
	  ReactDOM.unmountComponentAtNode(div);
	});

	it('has the right value of state', ()=>{
		const _GeneratedComponent = shallow(<GeneratedComponent/>);
		expect(_GeneratedComponent.state().size).toEqual('FOO');
	});

	xit('has the right template', ()=>{
		const _GeneratedComponent = shallow(<GeneratedComponent/>);
		_GeneratedComponent.update();
		console.log(_GeneratedComponent.debug());
		expect(_GeneratedComponent.find('div.fooClass').exists()).toEqual(true);
	});
})

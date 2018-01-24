import React, { Component } from 'react';

import {AbstractHeader} from './AbstractHeader'

export const HeaderBig = AbstractHeader({size:"Big"})((props)=>(<h1>Header</h1>));
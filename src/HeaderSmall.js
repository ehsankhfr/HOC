import React, { Component } from 'react';

import {AbstractHeader} from './AbstractHeader'

export const HeaderSmall = AbstractHeader({size:"Small"})((props)=>(<h5>Header</h5>));
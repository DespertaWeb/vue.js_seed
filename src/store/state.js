import Vue from 'vue';
import Vuex from 'vuex';

import { links } from './links';
Vue.use( Vuex );

export const store = new Vuex.Store({
	state: {
		links
	}
});
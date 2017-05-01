import homeComponent from './components/home-component.vue';
import menuComponent from './components/menu/menu-component.vue';
import spaLayoutComponent from './components/layouts/spa.layout-component.vue';
import appLayoutComponent from './components/layouts/app.layout-component.vue';
import artistsHeaderComponent from './components/artists/artists.header-component.vue';
import artistsContentComponent from './components/artists/artists.content-component.vue';
import tattoosComponent from './components/tattoos/tattoos-component.vue';

export const routes = [
	{
		path: '/', 		
	 	component: spaLayoutComponent,  	   
		children: [
			{
			path: '/',
			name: 'home',
			components: {
				'header': homeComponent,
				'content': menuComponent 
				}
			},
			{
			path: '/tattoos',
			name: 'tattoos',
			components: {
				'header': menuComponent,
				'content': tattoosComponent 
				}
			},
			{
			path: '/artists',
			name: 'artists',
			components: {
				'header': menuComponent,
				'content': artistsContentComponent 
				}
			},
		]
	},
	{
		path: '/app', 		
	 	component: appLayoutComponent,  	   
		children: [
			{
			path: 'home',
			name: 'home_app',
			components: {
				'header': homeComponent,
				'content': menuComponent 
				}
			},
			{
			path: 'tattoos',
			name: 'tattoos_app',
			components: {
				'header': menuComponent,
				'content': tattoosComponent 
				}
			},
			{
			path: 'artists',
			name: 'artists_app',
			components: {
				'header': menuComponent,
				'content': artistsContentComponent 
				}
			},
		]
	}
]
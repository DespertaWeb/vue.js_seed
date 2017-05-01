<template>
    <ul>		    	
		<router-link 
			v-for="link in links"  
			:to="{ name: link.name }" 
			:key="link.name"
			active-class="active-class" tag="li" exact>{{link.title}}
		</router-link>
    </ul>
</template>


<script>
	import {mapState} from 'vuex';
    
    export default {
    	computed: mapState(['links']),
    }
</script>
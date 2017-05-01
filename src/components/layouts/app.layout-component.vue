<template>
	<section class="cols">
		<router-view name="header"></router-view>
		<router-view name="content"></router-view>
	</section>
</template>

<script>
    export default {
    }
</script>

<style>
    .activo a {
        color: red;
    }


	.cols {
		-webkit-column-count: 2; /* Chrome, Safari, Opera */
		-moz-column-count: 2; /* Firefox */
		column-count: 2;
	}
		

</style>

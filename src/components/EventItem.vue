<template>
	
	<div class="col-md-4">
		<p>{{event.title}}</p>
		<p>{{event.description}}</p>
		<p>{{event.email}}</p>
	</div>

</template>

<script>
	export default{
		props:['event']
	}
</script>
<template>
	
	<div class="container">
		<h4>Add an event</h4>
		<div>
			<input type="checkbox" v-model="showForm"> Show Form
		</div>
		<div class="form-group" v-if="showForm">
			<div>
				<label>Ttile:</label>
				<input class="form-control" type="" v-model="event.title">
			</div>
			<div>
				<label>Description</label>
				<input class="form-control" type="" v-model="event.description">
			</div>
			<div>
				<label>Date</label>
				<input  class="form-control" type="" v-model="event.date">
			</div>
			<div>
				<label>Location</label>
				<input class="form-control" type="" v-model="event.location">
			</div>
			<div>
				<button @click="addEvent" class="btn btn-default">Create</button>
			</div>
		</div>
	</div>

</template>

<script>
	
	import {eventsRef} from '../FireBaseApp'

	export default{
		data(){
			return{
				event:{
					title:'',
					description:'',
					date:'',
					location:'',
					email:''
				},
				showForm:false
			}
		},
		methods:{
			addEvent(){
				this.event.email = this.$store.state.user.email
				eventsRef.push(this.event)
			}
		}
	}
</script>
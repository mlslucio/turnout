<template>
	<div>
		<h3>DashBoard</h3>
		<button class="btn btn-danger btn-sm" @click="signOut">Sign Out</button>
		<br>
		<EventItem 
			v-for="(eventItem, index) in this.$store.state.events"
				:event="eventItem"
				key="index"
		/>
		<br>
		<br>
		<Event/>
	</div>
	
</template>

<script>
	import {fireBaseApp, eventsRef} from '../FireBaseApp'
	import Event from './Event'
	import EventItem from './EventItem'
	
	export default{
		methods:{
			signOut(){
				this.$store.dispatch('signOut')
				fireBaseApp.auth().signOut();
			}
		},
		components:{
			Event,
			EventItem
		},
		mounted(){
			eventsRef.on('value', snap => {
				let events = []
				 snap.forEach(event => {
				 	events.push(event.val())
				 })

				this.$store.dispatch('setEvents', events)
			})
		}
	}

</script>
<template>
	<div class="form-inline">
		<div class="form-group">
			<input type="text" placeholder="email" class="form-control"
			v-model="email">
			<input type="password" placeholder="password" class="form-control"
			v-model="password">
			<button @click="signIn" class="btn btn-primary">Sign In</button>
		</div><br>
		<p>{{error.message}}</p>
		<br>
		<router-link to="/signup">Sign Up</router-link>
	</div>
</template>

<script>
	
	import {fireBaseApp} from '../FireBaseApp'

	export default{
		data(){
			return{
				email:'',
				password:'',
				error:{
					message:''
				}
			}
		},
		methods:{
			signIn(){
				fireBaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
				.catch(error => {
					this.error = error
				})
			}
		}
	}
</script>
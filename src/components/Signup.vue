<template>
	<div>
		<h3>Sign Up</h3>
		<div class="form-group">
			<input type="text" class="form-control" v-model="email" placeholder="Email"><br>
			<input type="password" class="form-control" v-model="password" placeholder="Password"><br>
			<button class="btn btn-success" @click="signUp">Send</button>
		</div>
		<br>
		<br>
		{{error.message}}
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
			signUp(){
				fireBaseApp.auth().createUserWithEmailAndPassword(this.email, this.password)
				.catch(error => {
					this.error = error
				})
			}
		}
	}
</script>
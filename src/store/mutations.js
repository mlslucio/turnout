import * as type from './mutations-type'

export const mutations = {
	[type.SIGN_IN] (state, userPayload){
		state.user = userPayload
	},

	[type.SIGN_OUT] (state){
		state.user = {}
	},

	[type.SET_EVENTS] (state, eventsPayload){
		state.events = eventsPayload
	}
}
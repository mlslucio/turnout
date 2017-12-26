import * as type from './mutations-type'

export const mutations = {
	[type.SIGN_IN] (state, userPayload){
		state.user = userPayload
	}
}
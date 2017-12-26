import * as type from './mutations-type'

export const signIn = ({commit}, userPayload) => {
	commit(type.SIGN_IN, userPayload)
}
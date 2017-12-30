import * as type from './mutations-type'

export const signIn = ({commit}, userPayload) => {
	commit(type.SIGN_IN, userPayload)
}

export const signOut = ({commit}) => {
	 commit(type.SIGN_OUT)
}

export const setEvents = ({commit}, eventsPayload) => {
	commit(type.SET_EVENTS, eventsPayload)
}
import { auth as firebaseAuth } from '../firebaseConfig'

import { fetchUsersAction } from './fetchUsers'

const EMAIL_CHANGE = 'auth/EMAIL_CHANGE'
const PASSWORD_CHANGE = 'auth/PASSWORD_CHANGE'
const SET_USER = 'auth/SET_USER'

const initialState = {
    email: '',
    password: '',
    user: null
}

export const onEmailChanageAction = value => ({
    type: EMAIL_CHANGE,
    value
})

export const onPasswordChanageAction = value => ({
    type: PASSWORD_CHANGE,
    value
})

export const setUserAction = user => ({
    type: SET_USER,
    user
})

export const initAuthStateListening = () => (dispatch, getState) => {
    firebaseAuth.onAuthStateChanged(user => {
        dispatch(setUserAction(user)) // user is nul if user is logged out

        if (user) {
            dispatch(fetchUsersAction())
            //here is good place to dispatch after login action
        } else {
            //here is good place to dispatch after logOUT action

        }
        dispatch(setUserAction(user))
    })
}

export const logOutAction = () => (dispatch, getState) => {
    firebaseAuth.signOut()
        .then(() => console.log('SINGNOUT OK'))
        .catch(() => console.log('SINGNOUT ERROR'))
}

export const onLogInClickAction = () => (dispatch, getState) => {
    const state = getState()

    firebaseAuth.signInWithEmailAndPassword(
        state.auth.email,
        state.auth.password
    )
        .then(() => console.log('LOGED IN OK!'))
        .catch(() => console.log('LOGED IN ERROR!'))
}

export default (state = initialState, action) => {
    switch (action.type) {
        case EMAIL_CHANGE:
            return {
                ...state,
                email: action.value
            }
        case PASSWORD_CHANGE:
            return {
                ...state,
                password: action.value
            }
        case SET_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}
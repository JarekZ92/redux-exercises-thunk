import React from 'react'
import { connect } from 'react-redux'

import {
    onEmailChanageAction,
    onPasswordChanageAction,
    onLogInClickAction,
    logOutAction
} from '../state/auth'
import LoginByEmailAndPassword from './LoginByEmailAndPassword'


const Auth = (props) => (
    props._user ?
        <div>
            <button
                onClick={props._logOutAction}
            >
                LOG OUT
        </button>
            {props.children}
        </div>
        :
        <div>
            <LoginByEmailAndPassword
                emailValue={props._emailValue}
                onEmailChange={props._onEmailChange}
                passwordValue={props._passwordValue}
                onPasswordChange={props._onPasswordChange}
                onLogInClick={props._onLogInClick}
            />
        </div>
)

const mapStateToProps = state => ({
    _user: state.auth.user,
    _emailValue: state.auth.email,
    _passwordValue: state.auth.password
})

const mapDispatchToProps = dispatch => ({
    _onEmailChange: event => dispatch(onEmailChanageAction(event.target.value)),
    _onPasswordChange: event => dispatch(onPasswordChanageAction(event.target.value)),
    _onLogInClick: () => dispatch(onLogInClickAction()),
    _logOutAction: () => dispatch(logOutAction())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth)
import React from 'react'
import { connect } from 'react-redux'

import {
    onEmailChanageAction,
    onPasswordChanageAction,
    onLogInClickAction
} from '../state/auth'

const Auth = (props) => (
    <div>
        <div>
            <input type="email"
                onChange={props._onEmailChange}
            />
        </div>
        <div>
            <input type="password"
                onChange={props._onPasswordChange}
            />
        </div>
        <div>
            <button
                onClick={props._onLogInClick}
            >
                LOGIN!
            </button>
        </div>
    </div>
)

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    _onEmailChange: event => dispatch(onEmailChanageAction(event.target.value)),
    _onPasswordChange: event => dispatch(onPasswordChanageAction(event.target.value)),
    _onLogInClick: () => dispatch(onLogInClickAction())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth)
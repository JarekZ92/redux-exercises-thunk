import React from 'react'
import { connect } from 'react-redux'

//Wyświetlanie użytkowników
const Users = (props) => (
    <div>
        {
            props._isUsersAreLoading ?
                'Loading...'
                :
                props._users ?
                    props._users.results.map(user => (
                        <p>{user.name.first}</p>
                    ))
                    :
                    'No users!'
        }
    </div>
)

const mapStateToProps = state => ({
    _users: state.fetchUsers.users,
    _isUsersAreLoading: state.fetchUsers.isUsersAreLoading
})

const mapDispatchToProps = dispatch => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users)
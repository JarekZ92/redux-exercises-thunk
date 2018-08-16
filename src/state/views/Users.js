import React from 'react'
import { connect } from 'react-redux'

const Users = (props) => (
    <div>

    </div>
)

const mapStateToProps = state => ({
    _users: state.fetchUsers.users,
    _isUsersAreLoading: state.fetchUsers._isUsersAreLoading
})

const mapDispatchToProps = dispatch => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users)
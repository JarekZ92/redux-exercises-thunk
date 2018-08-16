import React from 'react'
import { connect } from 'react-redux'

const Auth = (props) => (
    <div>
        <div>
            <input type="text"
                onChange={() => { }}
            />
        </div>
        <div>
            <input type="text"
                onChange={() => { }}
            />
        </div>
        <div>
            <button>
                LOGIN!
            </button>
        </div>
    </div>
)

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth)
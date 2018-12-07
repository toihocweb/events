import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapState = (state) => ({
    data : state.test.data
})
export class TestComponent extends Component {
    render() {
        return (
            <div>
                <h1>Test Area</h1>
                <h3>the answer is : {this.props.data}</h3>
            </div>
        )
    }
}

export default connect(mapState)(TestComponent)     
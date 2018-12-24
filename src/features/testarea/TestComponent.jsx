import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
   return {
    data : state.data
   }
}



class TestComponent extends Component {
    
    render() {   
        
           return (
            <div>
                <h1>Test Area : </h1>
                <h3>the answer is:{this.props.data.data} </h3>
            </div>
        )
    }
}

export default connect(mapStateToProps)(TestComponent); 
import React from 'react'

const HomePage = ({history}) => {
  return (
    <div>
      <div className="ui inverted vertical masthead center aligned segment">
        <div className="ui text container">
          <h1 className="ui inverted stackable header">
            <img
              className="ui image massive"
              src="/assets/logo.png"
              alt="logo"
            />
            <div className="content">Welcome!</div>
          </h1>
          <h2>I'm not a Developer, I'm just a handsome boy</h2>
          <div onClick={()=>history.push('/events')} className="ui huge white inverted button">
            Get Started
                <i className="right arrow icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage

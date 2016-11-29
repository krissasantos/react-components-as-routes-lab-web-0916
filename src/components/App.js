import React from 'react'

import NavBar from './NavBar'

const App = (props) => {
    return (
        <div>
            <NavBar />
            <div className="div"> I am the child prop</div>
        </div>
    )
}

module.exports = App

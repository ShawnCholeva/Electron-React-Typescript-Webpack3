import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
    
    <div>
        <div>
            Node version: {process.versions.node}
        </div>
    </div>,
    document.getElementsByTagName('body')[0])
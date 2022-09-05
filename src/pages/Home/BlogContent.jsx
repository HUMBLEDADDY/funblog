import React, { Component } from 'react'
import {Switch} from 'react-router-dom'



function BlogContent() {
    return(
        <div>
            <Switch>
                <NavLink to="/blogs" state="admin">designdraft</NavLink>
                <NavLink to="/code" state="admin">code</NavLink>
            </Switch>
        </div>
    )
}

export default BlogContent

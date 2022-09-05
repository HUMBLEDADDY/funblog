import React, { NavLink} from 'react'

function HeadMenu() {
    return(
        <React.Fragment>
            <NavLink to="/designdraft" state="admin">designdraft</NavLink>
            <NavLink to="/code" state="admin">code</NavLink>
        </React.Fragment>
    )
}

export default  HeadMenu;
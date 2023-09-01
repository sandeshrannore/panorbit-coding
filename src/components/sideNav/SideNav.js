import React from 'react'
import { NavLink } from 'react-router-dom';
import './SideNav.css'
 
const SideNav = ({id}) => {  
    return (
      <div className='sideNavDiv'>
        <NavLink
          to={`/homepage/${id}`}
          className={({ isActive }) =>
            isActive ? 'active' : 'notActive'
          }
        >
          <p>Profile</p>
        </NavLink>
  
        <hr />
        
        <NavLink
          to="/post"
          className={({ isActive }) =>
          isActive ? 'active' : 'notActive'
          }
        >
          <p>Posts</p>
        </NavLink>
       
        <hr />
       
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
          isActive ? 'active' : 'notActive'
          }
        >
          <p>Gallery</p>
        </NavLink>
       
        <hr />
      
        <NavLink
          to="/todo"
          className={({ isActive }) =>
          isActive ? 'active' : 'notActive'
          }
        >
          <p>ToDo</p>
        </NavLink>
      </div>
    );
}

export default SideNav
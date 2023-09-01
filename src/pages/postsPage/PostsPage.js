import React from 'react'
import './PostsPage.css'
import SideNav from '../../components/sideNav/SideNav'
const PostsPage = () => {
  return (
    <div className='postsPage'>
      {/* --------- Left Navbar -------- */}
      <SideNav />

      {/* ---------- Profile --------- */}
      <div className='topDiv'>
        <div className='profile_section'>
          <h2>Posts</h2>
        </div>

        <hr style ={{ color: "grey", width: "100%" }} />

        {/* ---------- Screen ------- */}
        <div className='screen'>
          <h1 className='ComingSoon'>Coming Soon</h1>
        </div>
      </div>
    </div>
  )
}

export default PostsPage
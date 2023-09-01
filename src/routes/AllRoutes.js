import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProfileDashboar from '../pages/homePage/ProfileDashboard'
import LoginPage from '../pages/landingPage/LoginPage'
import PostsPage from '../pages/postsPage/PostsPage'
import GalleryPage from '../pages/galleryPage/GalleryPage'
import TodoPage from '../pages/todoPage/TodoPage'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="homepage/:id" element={<ProfileDashboar />} />
        <Route path="post" element={<PostsPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="todo" element={<TodoPage />} />
    </Routes>
  )
}

export default AllRoutes
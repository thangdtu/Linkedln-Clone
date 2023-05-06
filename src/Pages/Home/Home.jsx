import React from 'react'
import LoginComponents from '../../components/LoginComponents'
import HeaderLoginComponents from './HeaderLoginComponents/HeaderLoginComponents'
import FindJob from './FindJob/FindJob'
import PostJob from './PostJob/PostJob'
import SlideList from './SlideList/SlideList'


export default function Login() {
  return (
    <div>
      <HeaderLoginComponents/>
      <LoginComponents/>
      <FindJob/>
      <PostJob/>
      <SlideList/>
    </div>
  )
}

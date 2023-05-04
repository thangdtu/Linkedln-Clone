import React from 'react'
import LoginComponents from '../../components/LoginComponents'
import HeaderLoginComponents from './HeaderLoginComponents/HeaderLoginComponents'
import FindJob from './FindJob/FindJob'


export default function Login() {
  return (
    <div>
      <HeaderLoginComponents/>
      <LoginComponents/>
      <FindJob/>
    </div>
  )
}

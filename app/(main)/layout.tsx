import React from 'react'
import Navbar from '../components/navbar/page';

function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div>
      <Navbar />
      {
        children
      }
    </div>
  )
}

export default Layout

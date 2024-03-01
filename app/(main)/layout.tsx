import React from 'react'
import Navbar from '../components/navbar/page';
import Logo from '../components/navbar/logo';
import TopBar from '../components/navbar/top-bar';
import InputSearch from '../components/navbar/input-search';
import ComboBoxCate from '../components/navbar/combobox-cate';
import ActionButton from '../components/navbar/action-buttons';
import SelectCategory from '../components/navbar/select-category';
import NavigationBar from '../components/navbar/navigation-bar';



function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div>
        {
          children
        }
    </div>
  )
}

export default Layout

import ActionButton from "./action-buttons";
import ComboBoxCate from "./combobox-cate";
import InputSearch from "./input-search";
import Logo from "./logo";
import NavigationBar from "./navigation-bar";
import SelectCategory from "./select-category";
import TopBar from "./top-bar";

const Navbar = () =>{
  return (
    <main className=''>
        <div className="bg-gray-800 p-2.5 w-full px-4 md:px-6">
          <TopBar />
        </div>
        <div className="flex z-40 sticky top-0 px-5 bg-white md:px-6 justify-between items-center mx-auto py-3">
            <Logo />
            <div className='md:flex space-x-2 hidden'>
              <InputSearch />
              <ComboBoxCate />
            </div>
            <ActionButton />
        </div>
        <div className="bg-white p-2.5 w-full px-4 md:px-6 flex justify-between">
          <SelectCategory />
          <NavigationBar />
        </div>
      </main>
  )
}

export default Navbar;
 


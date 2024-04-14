import { Fragment, useContext } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { HiChevronDown } from 'react-icons/hi';
import { AuthContext } from '../../contexts/AuthContext';

export function ProfileMenu() {
  const { auth, setAuth } = useContext(AuthContext);

  function handleSignOut() {
    setAuth(null);
  }

  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span className="sr-only">Open user menu</span>
          <HiOutlineUserCircle className="h-8 w-8 mr-2 rounded-full stroke-1" />
          {auth?.user.name} ({auth?.user.role === 'admin' ? 'Admin' : 'Satgas'})
          <HiChevronDown />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            <button
              className="block px-4 py-2 text-sm text-gray-700"
              type="button"
              onClick={handleSignOut}
            >
              Sign out
            </button>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

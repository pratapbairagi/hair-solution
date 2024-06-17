import { Fragment, useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition
} from '@headlessui/react';
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon
  } from '@heroicons/react/24/outline';
  import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
    const products = [
        { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
        { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
        { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
        { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
        { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
      ]
      const callsToAction = [
        { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
        { name: 'Contact sales', href: '#', icon: PhoneIcon },
      ];

      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      };

      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

      const location = useNavigate() 
        // <PopoverGroup className="hidden lg:flex items-center lg:gap-x-12 lg:px-12 xl:px-16 lg:h-12 lg:translate-y-3 lg:bg-gray-100 lg:relative" style={{  boxShadow:"0px 1px 0 6px gray", clipPath: "polygon( 9% 0%, 90% 0%, 100% 100%, 100% 100%, 0% 100%, 0% 100%)"}}>
        

    return (
        <>
            <header className="bg-white shadow-sm fixed top-0 w-screen z-20 left-0">

      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8 lg:py-2   lg:fixed lg:h-max shadow-md top-0 left-0 lg:w-screen lg:bg-white z-20" aria-label="Global">
        <div className="flex lg:flex-1">
          <NavLink to="/" className="-m-1.5 p-1.5 flex flex-col w-max">
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            {/* <span className="text-xs text-red-600">SA</span> */}
          </NavLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {/* <PopoverGroup className="hidden lg:flex lg:gap-x-12"> */}
         <PopoverGroup className="hidden lg:flex items-center lg:gap-x-12 lg:px-12 xl:px-16 lg:min-h-12 lg:translate-y-0 lg:bg-gray-100"  >
          <span className='min-w-14 min-h-full flex bg-gray-100 absolute left-0' style={{ borderLeft:"20px solid white", borderRight:"35px solid transparent", borderTop:"48px solid white"}}></span>
          <span className='min-w-14 min-h-full flex bg-gray-100 absolute right-0' style={{borderTop:"48px solid white", borderLeft:"35px solid transparent"}} ></span>

          <Popover className="relative px-3 py-1">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 outline-0">
              Services
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </PopoverButton>

            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel className="fixed  top-full z-20 mt-[9px] -ml-[62%] lg:min-w-[96vw]  overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5" style={{border:"none", clipPath:"none", left:"-50%", right:"-50%"}}>
                <div className="p-4 grid grid-cols-12" >
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group col-span-12 lg:col-span-6 xl:col-span-4 relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>

          <NavLink to="/gallery" className="text-sm font-semibold leading-6 text-gray-900">
            Gallery
          </NavLink>
          <NavLink to="/testimonial" className="text-sm font-semibold leading-6 text-gray-900">
            Testimonial
          </NavLink>
          <NavLink to="/about" className="text-sm font-semibold leading-6 text-gray-900">
            About
          </NavLink>
          <NavLink to="/contact" className="text-sm font-semibold leading-6 text-gray-900">
            Contact
          </NavLink>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NavLink to="/product/add" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </NavLink>
        </div>
      </nav>

      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10 bg-red-500" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="-m-1.5 p-1.5 flex flex-col">
              {/* <span className="">Your Company</span> */}
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </NavLink>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root ">
            {/* mobile nav */}
            <div className="-my-6 divide-y divide-gray-500/10 ">

              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Services
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
                <button
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Gallery
                </button>
                <button
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Testimonial
                </button>
                <button
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </button>
                <button
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </button>
              </div>
              
              <div className="py-6">
                <NavLink
                  to="/product/add"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </NavLink>
              </div>
            </div>

          </div>
        </DialogPanel>
      </Dialog>
    </header>
        </>
    )
};

export default Header;
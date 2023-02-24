import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Outlet, Link } from "react-router-dom";
import vitLogo from '../../assets/vit-logo.png'



function Index(props) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="bg-transparent absolute top-0 w-full z-50 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 w-full">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex-shrink-0 w-32">
                                <a href="/">
                                    <img
                                        className=""
                                        src={vitLogo}
                                        alt="VIT Logo"
                                    />
                                </a>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link
                                        to="/Students"
                                        className={`hover:bg-green-600 hover:text-white  ${props.students? "text-gray-900" : "text-gray-600"} px-3 py-2 rounded-md text-sm font-medium`}
                                    >
                                        Students
                                    </Link>

                                    <Link
                                        to="/Faculties"
                                        className={`hover:bg-green-600 hover:text-white  ${props.faculties? "text-gray-900" : "text-gray-600"} px-3 py-2 rounded-md text-sm font-medium`}
                                    >
                                        Faculties
                                    </Link>



                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className=" inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden rounded-xl shadow-lg" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#f1f5f9] ">
                                <Link
                                    to="/students"
                                    className={`hover:bg-green-600 hover:text-white ${props.students? "text-gray-900" : "text-gray-500"} block px-3 py-2 rounded-md text-base font-medium`}
                                >
                                    Students
                                </Link>

                                <Link
                                    to="/faculties"
                                    className={`hover:bg-green-600 hover:text-white ${props.faculties? "text-gray-900" : "text-gray-500"} block px-3 py-2 rounded-md text-base font-medium`}
                                >
                                    Faculties
                                </Link>


                            </div>
                        </div>
                    )}
                </Transition>
            </nav>

        </>

    );
}

export default Index;

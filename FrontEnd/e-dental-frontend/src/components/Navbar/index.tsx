import React, { useState } from 'react';

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    return (
      <nav className="bg-violet-400 shadow-2xl">
        <div className="mx-auto">
          <div className="flex justify-left items-center h-13 font-rubik">
            <div className="text-2xl px-5 font-bold text-white">
              Logo
            </div>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-white px-4 py-2 hover:bg-violet-500 focus:outline-none h-13 flex items-center"
              >
                Pacientes
                <svg
                  className="w-5 h-5 ml-1 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
  
              {/* Dropdown Items */}
              {isDropdownOpen && (
                <div className="absolute right-0 w-48 bg-white border shadow-lg">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Lista de Pacientes
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Adicionar Paciente
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    );
  };

export default Navbar;
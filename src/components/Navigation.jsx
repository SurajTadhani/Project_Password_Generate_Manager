import React from 'react'

function Navigation() {
  return (
    <>
   
   <div class="px-10 py-4 bg-white container">
        <div class="flex md:flex-row flex-col justify-between items-center">
          <div>
            <h1 class="text-2xl font-bold text-[#272727]">Password Manager</h1>
          </div>
          <div class="hidden lg:block">
            <ul class="flex space-x-16 text-xl">
              <li>
                <a
                  class="decoration-slice cursor-pointer hover:text-red-400"
                  href="#home"
                  >HOME</a
                >
              </li>
              <li>
                <a
                  class="decoration-slice cursor-pointer hover:text-red-400"
                  href="#about"
                  >ABOUT</a
                >
              </li>
            </ul>
          </div>
          <div class="hidden lg:block">
            <div class="flex space-x-8">
              <div>
                <h1 class="cursor-pointer hover:text-red-400">
                  LOGIN <i class="fa-solid fa-user"></i>
                </h1>
              </div>
              <div class="hover:cursor-pointer hover:text-red-400">
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
          </div>
          <div class="block lg:hidden">
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
   
    </>
  )
}

export default Navigation
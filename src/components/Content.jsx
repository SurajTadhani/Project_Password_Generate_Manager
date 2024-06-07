import React from 'react'

function Content() {
  return (
    <div className='container text-white space-y-10'>
    <h1 className='text-5xl'>
    Overview of the Password Generator and Manager Project in React
    </h1>
    <p className='text-xl'>
    
    A password generator and manager project in React is designed to help users create strong, random passwords and store them securely for various websites and applications. The project consists of a frontend built with React and a backend server, typically using Node.js and Express, to manage data storage and retrieval. This application enhances security by ensuring users can generate and manage robust passwords without having to remember them all.
    </p>
<hr />
    <div className='space-y-4'>
    <h2 className='text-3xl'>Password Generation Form:</h2>
    <p className='text-xl'>

  1. The user interface includes a form where users can specify criteria for their new password, such as length, inclusion of uppercase letters, lowercase letters, numbers, and special characters.

  2.Upon submission, the application uses a random password generation algorithm to create a strong password that meets the specified criteria.

    </p>
    </div>

  <div className='space-y-3'>
  <h2 className='text-3xl'> Displaying the Generated Password:</h2>
    <p className='text-xl'>

   1. He generated password is displayed on the screen, allowing users to copy it for immediate use or save it within the application for future reference.
    </p>
  </div>

    <div className='space-y-3'>
      <h2 className='text-3xl'>Viewing and Copying Passwords:
      </h2>
      <p className='text-xl'>
         1. Users can view a list of all saved passwords, organized in an easily navigable format.
          Each entry includes options to copy the password to the clipboard for quick access.</p>
    </div>
    </div>
  )
}

export default Content
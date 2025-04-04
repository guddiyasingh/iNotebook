import React from 'react'

const Navbar = () => {
  return (
    
       <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow'>
       <h2 className='text-xl font-medium text-black py-2'>Notes</h2>
    </div>
  )
}
export default Navbar

// export default Navbar
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'


// // https://vite.dev/config/
// export default defineConfig({
// // Colors used in the project

// colors: {

//   primary: "#2BB5FF",
//   secondary: "#EF863E",
// },
//   plugins: [react(),tailwindcss()],
// })
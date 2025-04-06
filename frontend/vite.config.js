import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'



// https://vite.dev/config/
export default defineConfig({
// Colors used in the project

  plugins: [react(),tailwindcss()],
})























// export default {
//   content:["./index.html","./src/**/*.{js,ts,jsx,tsx"],
//   theme: {

//     extend: {
//       // Colors used in the project
//       colors: {
//         primary: "#2BB5FF",
//         secondary: "#EF863E",
//       }
//     },
//   },
//   plugins: [react(),tailwindcss()],
// }



import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'; // Import komponen Header
import Button from './Components/Button'; // Import komponen Header

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header title="PROGRESS TRACKER"/>
      {/* Konten lainnya bisa ditambahkan di sini */}
      <Button text="PROFIL MAHASISWA"/>
      <main>
        <p>Ini adalah konten utama aplikasi.</p>
      </main>
    </>
  )
}

export default App

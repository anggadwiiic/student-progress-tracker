// src/Header.jsx
function Header(props) { // 'props' adalah objek yang berisi semua data yang dikirim
const { title } = props;
  return (
    <header>
      {/* Tampilkan data dari props.title */}
      <h1>Selamat Datang di</h1>
      <h1>{title}</h1>
      <p>Jadikan proses belajar anda lebih terarah dan terukur dengan menggunakan Progress Tracker</p>
    </header>
  );
}

export default Header;
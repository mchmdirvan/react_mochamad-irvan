# (23) Authentication in React 

## Project
username:admin
password: password123

## Apa itu authentication?
Authentication merupakan proses untuk memastikan suatu pengenalan.

## Jenis auth
- Email & Password
- oauth (via gmail/github)

## Bagaimana langkah membuat auth in react?
1. Buat Fungsi Login : Pertama, buat fungsi login di dalam file `api.js`. Fungsi ini memeriksa apakah data masukan pengguna sesuai dengan data pengguna dummy yang telah di tentukan. Jika sesuai, fungsi akan mengembalikan data pengguna. Jika tidak sesuai, akan menghasilkan pesan kesalahan yang sesuai.

2. Membuat Halaman Login: Selanjutnya, buat halaman login di dalam file `Login.jsx`. Halaman ini akan menampilkan formulir login dan akan memanggil fungsi login saat formulir disubmit.

3. Menggunakan React Hook Form: Gunakan React Hook Form untuk mengelola formulir login. Pastikan Anda telah memasangnya sebelumnya.

4. Handle Login: Dalam fungsi `handleLogin`, akan memanggil fungsi login yang telah dibuat pada langkah pertama. Jika login berhasil, maka akan menyimpan token atau data pengguna (dalam kasus ini, hasil fungsi login) ke dalam state menggunakan `changeToken` dari `useToken`. kemudian dapat menggunakan `useNavigate` dari `react-router-dom` untuk mengarahkan pengguna ke halaman yang sesuai.

5. Tampilkan Pesan Error: menambahkan penanganan kesalahan di dalam fungsi `handleLogin`. Jika login gagal, maka akan menampilkan pesan kesalahan menggunakan library Swal atau cara lain sesuai preferensi.

6. Integrasi dengan Route: Pastikan untuk mengintegrasikan halaman login ke dalam rute. di mana  menggunakan `token` dari `useToken` untuk menentukan apakah pengguna harus diarahkan ke halaman login atau ke halaman lain sesuai status autentikasi.

7. Buat TokenContext : membuat TokenContext menggunakan createContext. Ini akan digunakan untuk mengelola token pengguna dan fungsi untuk mengubahnya.

8. Buat TokenProvider: membuat TokenProvider yang akan mengatur state token pengguna. Ini juga akan menyediakan fungsi changeToken untuk mengubah token pengguna.

9. Menggunakan useToken Hook: membuat useToken hook, yang memungkinkan komponen lain dalam aplikasi Anda untuk mengakses token pengguna dan fungsi changeToken. Ini digunakan di berbagai komponen seperti halaman login.

10. Inisialisasi Token: menginisialisasi token dengan nilai yang disimpan dalam localStorage. Jika tidak ada data di localStorage, maka token akan kosong.

11. Mengubah Token: menyiapkan fungsi changeToken yang digunakan dalam halaman login untuk mengubah token pengguna. Fungsi ini akan menyimpan token baru ke dalam localStorage dan memperbarui state token.

12. Gunakan Token dalam Autentikasi: Di halaman login, Anda menggunakan changeToken untuk menyimpan token pengguna setelah login berhasil. Ini memungkinkan Anda untuk mengakses token di seluruh aplikasi dan memeriksa apakah pengguna telah login sebelum mengizinkan akses ke halaman tertentu.


## Mock API auth
Dummy JSON

## Inspired design UI/UX
drible
godly

## MockAPI
Json Server
Dummy JSON
MockAPI
GitHub reference

## Library
Moment JS - Date
Toastify - Alert
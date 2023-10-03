# (15) React Routing

## Apa itu React Router?
React Router adalah sebuah library di dalam ekosistem React yang digunakan untuk mengelola routing (pemindahan antar halaman) dalam aplikasi web berbasis React. Routing adalah cara untuk mengatur tampilan berbeda di aplikasi web Anda berdasarkan URL yang diakses oleh pengguna.

React Router memungkinkan untuk membuat aplikasi React yang memiliki navigasi antar halaman seperti yang Anda temui dalam aplikasi web pada umumnya.

## Library untuk react router
- React Router (standar)
- Tanstack Router

## Apa perbedaan file .jsx dengan .js?
Kalau .jsx akan mereturn sebuah component sedangkan .js lebih banyak variable,function,dkk

## Bagaimana cara link page ke page lain?
dengan memanfaatkan module link dari react-dom. Lalu tambahkan tag link dan props to, seperti penggunaan anchor pada html. Hal ini disebut route by component

## Programmatic Routes
Contoh dari programmatic routes adalah mengarahkan dari halaman login ke homepage. contohnya dengan menggunakan hooks useNavigate

## Apa perbedaan Single Page Application dengan Multi Page Application?
1. SPA
   + waktu loading website lebih cepat
   + tidak ada query tambahakn ke server
   + front-end yang cepat dan responsif
   + meningkatkan pengalaman pengguna
   - Tidak bagus dalam hal SEO
   - Berat saat di load/buka pertama kali
   - Kurang aman dibanding dengan website biasa
   - Masalah kompabilitas browser

2. MPA
   + SEO Website akan lebih mudah di optimasi
   + Memudahkan untuk mengubah halaman tertentu untuk setiap kebutuhan yang berbeda
   + Menggunakan tools analisis seperti google analytics yang dapat terintegrasi langsung dengan website
   - Kecepatan download website jauh lebih lama jika dibandingkan dengan SPA
   - perlu mengintergasikan fe dan be
   - lebih sering membutuhkan maintance dan update
   - mungkin akan lebih sering menemukan masalah performa pada website

## untuk apa useHistory digunakan?
memberika akses ke instance riwayat yang dapat digunakan untuk bernavigasi

 

# (11) Introduction-React

## Apa itu React?
React adalah Javascript Library untuk membuat user-interface di web-platform. React dikembangkan oleh Meta. React merupakan V dari MVC (Model View Controller) design pattern. MC umumnya di back-end

## Mengapa menggunakan React?
1. Fast: React can handle complex updates and still feel quick and responsive (ex:InstaStories)
2. Modular: write many smaller and reusable files (bongkar-pasang:navbar,footer,button,etc)
3. Scalable: display a lot of changing data (ex:live)
4. Flexible: Multiplatform
5. Populer: employable

## Mengapa harus belajar React?
1. Simplicity: The component-based approach, well-defined lifecycle, and use of just plain Javascript - komponen
2. Native Approach: at the same time we can make iOS, Android, and web application -Konversi
3. Performance: React doesn't offer any concept of a built-in container for dependency 
4. Testability: Manipulate ReactJS view with state we pass and take a look at the output and triggered actions, events, function, etc - ex:side-effect
5. Data Binding: It uses one-way data binding,so it's easier to debug self-contained components of large ReactJS apps.
6. Easy to learn : basic knowledge HTML,CSS, Javascript

## Bagaimana cara mengetahui sebuah website menggunakan sebagian besar libray apa?
-> Ekstension Wappalyzer

## Mengapa react by default tidak bisa navigasi?
Karena react -> SPA (Single Page Application) -> HTML nya hanya satu

## Lalu bagaimana jika ingin menambahkan halaman lainnya?
Virtual DOM

## Bagaimana cara menjalankan react di Mobile?
1. cmd : ipconfig (mengetahui alamat IPv4)
2. membuka vite.config.js -> server: {
    host: true,
  } (membuka network IP)

## Bagaimana cara menginstall Tailwind dengan Vite?
https://tailwindcss.com/docs/guides/vite

## Bagaimana folder Structures src reacts?
berbasis tipe file:
- Assets: gambar
- Components: untuk menggunakan components berulang kali
- Pages: untuk halaman-halaman yang akan tampil 
- Routes: letak untuk menroutes halamannya akan seperti apa
- Styles: css
- Utils: untuk function helper

## Ekstension VSCode
-ES7+

## Apa arti (.) atau (..) dari directory import?
- Titik tunggal (.) dalam direktori adalah singkatan untuk direktori saat ini. Dengan menggunakan titik ini, Anda bisa merujuk ke direktori tempat Anda saat ini berada. Misalnya, jika Anda berada di direktori /home/user/documents, menggunakan . akan merujuk ke direktori /home/user/documents.
- Titik dua (..) dalam direktori adalah singkatan untuk direktori di atasnya (parent directory). Ini memungkinkan Anda untuk navigasi ke direktori di atasnya dalam hierarki. Misalnya, jika Anda berada di direktori /home/user/documents, menggunakan .. akan membawa Anda ke direktori /home/user.

## Bagaimana cara penamaan folder di React?
dengan menggunakan nama kecil semua. 
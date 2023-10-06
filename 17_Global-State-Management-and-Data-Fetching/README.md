# (17) Global State Management

## Bagaimana cara berkomunikasi antara komponen dengan komponen lainnya pada react?

bisa dengan menggunakan useContext, Redux, React Query untuk menjadi global state

## Bagaimana contoh Component Tree Local State?

React -
Router -
Login - Index - Create Product

## Bagaimana contoh component tree global state

React -
Global State -
Router -
Login - Index - Create Product

## Library apa yang dapat digunakan pada react?

useContext dan useReducer

## Apa itu Use Context?

useContext adalah React Hook yang memungkinkan untuk membaca dan berlangganan konteks dari komponen.
const value = useContext(SomeContext)

## Apa kegunaan useContext?

1. Passing data deeply into the tree
2. Updating data passed via context
3. Specifying a fallback default value
4. Overriding context for a part of the tree
5. Optimizing re-renders when passing objects and functions

## Kapan menggunakan useContext?

- Membutuhkan sebuah manajemen state yang simple
- Passing beberapa data secara mendalam tanpa perlu menggunakan redux
- Poin plus ketika kita memiliki aplikasi dengan skala kecil ke menengah

## Apa saja penggunanaan context pada umumnya?

- Global State
- Tema
- Konfigurasi Aplikasi
- username dari user yang telah login
- pengaturan user
- preferensi bahasa
  \*biasanya penggunaan yang jarang

## Kekurangan react context?

- Tidak di rekomendasikan untuk mengkombinasikan Context dengan hook lain seperti useReducer untuk merubah nilai dengan alasan performance
- Ketika nilai dari sebuah context berubah atau diganti, maka seluruh component yang mengkonsumsi context akan re-render

## Bagaimanakah langkah untuk membuat dan menggunakan useContext di react?

1. Create folder inside utils -> contexts -> .jsx
2. Import useContext dan createContext
3. Create context
4. Create Provider -> useState + useMemo
5. Use the context in a component -> custom hooks
6. Wrap app with provider

## Bagaimana cara menentukan types input pada files?

dengan menggunakan MIME types. Jenis media (juga dikenal sebagai Ekstensi Surat Internet Multiguna atau jenis MIME ) menunjukkan sifat dan format dokumen, file, atau kumpulan byte. Tipe MIME didefinisikan dan distandarisasi dalam RFC 6838 IETF .

# Redux

## Apa itu Redux?

Redux merupakan sebuah framework JavaScript yang ditujukan untuk membantu dalam mengelola state dalam aplikasi web. Dengan menggunakan Redux, developer dapat memisahkan state dari komponen-komponen aplikasi, sehingga mempermudah dalam pengelolaan dan pemantauan perubahan-perubahan yang terjadi pada state tersebut.

## Apa perbedaan redux dengan useContext?

- Redux: Redux adalah library eksternal yang memiliki konsep yang lebih kompleks dan memerlukan kode tambahan untuk mengatur store, actions reducers, dan dispatch. Ini cocok untuk mengelola state yang sangat besar dan kompleks.

- useContext: useContext adalah bagian dari React Core dan lebih sederhana. Ini digunakan untuk mengelola state dalam komponen tertentu atau dalam komponen yang memiliki hubungan hierarki yang lebih dangkal. Lebih cocok untuk state lokal dan manajemen state yang lebih sederhana.

## Apa kemiripan redux dengan state?
- Redux menyimpan seluruh state aplikasi dalam satu tempat yang disebut "store."
- Untuk memperbarui state dalam Redux, menggunakan "actions" yang dikirimkan ke "reducers." Actions adalah objek yang berisi instruksi tentang bagaimana state harus diperbarui.
- Redux mirip state perlu updater, updater nya namanya dispatch. fungsi "dispatch" digunakan untuk mengirimkan actions ke reducers sehingga state dapat diperbarui.

###

Action, reducers, store, subscribe.
Redux bisa menyimpan data apapun dalam satu konfigurasi redux
kapan
+/- redux
utils - states - redux - reducer (.js) + store (.js)
install npm i redux react-redux @reduxjs/toolkit
fungsi reducer
intial - updater - reducer
store = provider
refactor pelan-pelan
tailwind darkmode
prio 1
prio 2

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

- Redux: Redux adalah library eksternal yang memiliki konsep yang lebih kompleks dan memerlukan kode tambahan untuk mengatur store, actions reducers, dan dispatch. Ini cocok untuk mengelola state yang sangat besar dan kompleks. Redux bisa menyimpan data apapun dalam satu konfigurasi redux

- useContext: useContext adalah bagian dari React Core dan lebih sederhana. Ini digunakan untuk mengelola state dalam komponen tertentu atau dalam komponen yang memiliki hubungan hierarki yang lebih dangkal. Lebih cocok untuk state lokal dan manajemen state yang lebih sederhana.

## Apa kemiripan redux dengan state?

- Redux menyimpan seluruh state aplikasi dalam satu tempat yang disebut "store."
- Untuk memperbarui state dalam Redux, menggunakan "actions" yang dikirimkan ke "reducers." Actions adalah objek yang berisi instruksi tentang bagaimana state harus diperbarui.
- Redux mirip state perlu updater, updater nya namanya dispatch. fungsi "dispatch" digunakan untuk mengirimkan actions ke reducers sehingga state dapat diperbarui.

## Kapan Menggunakan redux?

Redux helps you deal with shared state management, but like any tool, it has tradeoffs. There are more concepts to learn, and more code to write. It also adds some indirection to your code, and asks you to follow certain restrictions. It's a trade-off between short term and long term productivity.

Redux is more useful when:

- You have large amounts of application state that are needed in many places in the app
- The app state is updated frequently over time
- The logic to update that state may be complex
- The app has a medium or large-sized codebase, and might be worked on by many people

## Kelebihan dan kekurangan Redux

Kelebihan dari Redux adalah memiliki fitur seperti immutability, central store, dan time-travel debugging yang membantu developer dalam mengelola state secara efektif dan efisien. Selain itu, Redux juga memiliki dokumentasi yang lengkap dan komunitas yang aktif yang dapat membantu developer dalam mempelajari dan menggunakan Redux.

Beberapa kekurangan dari Redux yaitu membutuhkan waktu dan pembelajaran yang lebih untuk memahami dan mengaplikasikannya pada aplikasi web. Selain itu, Redux juga memiliki kode yang lebih panjang dan kompleks dibandingkan dengan state management lainnya.

## Langkah-langkah penggunaan redux

1. Membuat Folder

- utils
  |- states
  | -- Redux
  | --- reducers
  | ---- reducers.js
  | --- store
  | ---- store.js
  | -- context

2. Install library redux

- Redux core : redux
- Complmenetary packages : react-redux
- Redux Toolkit : @reduxjs/toolkit

3. reducer.js
   Fungsi reducer adalah sebuah function yang menerima 2 parameter, yaitu state dan action. yang mana memiliki tugas untuk merubah value dari initial state menjadi nilai yang baru

4. store.js
   store ini digunakan untuk membuat sebuah wadah/tempat yang nantinya dipakai untuk menyimpan state/nilai setiap komponen. store seperti provider.

5. Buat provider di main.jsx dan import store

## di reducers.js ada apa saja?

1.  Import createSlice
2.  Initial State (inisialisasi nilai awal)
3.  Initial updater function menggunakan createSlice dalam bentuk object
    - terdapat nama
    - initialstate
    - reducers (menaruh updater yang ada) dengan param state dan action dan function.
4.  Reducer
5.  Export const {getProducts} = sliceState.actions
6.  Export default reducer

## di store.js ada apa saja?

1. Import configureStore
2. Import reducer
3. Variable store = cs dalam bentuk object dan tulis reducer nya tadi apa saja
4. Export store

####

tailwind darkmode
prio 1
prio 2

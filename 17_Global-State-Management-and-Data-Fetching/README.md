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
*biasanya penggunaan yang jarang

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

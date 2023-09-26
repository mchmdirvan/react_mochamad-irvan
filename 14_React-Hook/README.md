# (14) React Hook

## Apa itu React Hook?

React Hooks diperkenalkan oleh React Team untuk melakukan state management dan side effects di dalam function component. Dengan Hooks kita bisa menggunakan state dan lifecycle methods tanpa harus menulis class di React. Cleaner reusable components with react hooks

## perbandingan react hook dengan class?

- Tidak perlu lagi melakukan binding
- Mengeliminasi penggunaan this
- Kode nya lebih ringkas
- Kompleks component lebih mudah di pahami
- Lebih mudah digunakan jika ingin reusable logic antara component

## Ada apa saja hooks di react?

- useState : local states -> Variable states dan akan merender ulang terhadap spesif
- useEffect : Side effects through lifecycle
- useContext : Global state
- useReducer : Redux-like reducers
- useCallback : Prevent re-render (returns memoized callback) -> Mengorbankan memori untuk meningkatkan performa dalam skala function
- useMemo : Prevent re-render (returns memoized value) -> Mengorbankan memori untuk meningkatkan performa dalam skala variable
- useRef : Utilize ref object and instances variables
- useImperativeHandle : Customizes the instance value that is exposed to parent
- useLayoutEffect :
- useDebugValue :
- dkk at react.dev

## Alasan memakai react hooks?

- Readable & Simple
- Reusable Stateful Logic

## Bagaimana jika ingin menggunakan state di funcition component?

Hooks : const [stateName,setName] = useState()
stateName adalah nama state
setName adalah updater
useState adalah hooks
() adalah nilai default

## Bagaimana jika ingin menggunakan useEffect?

useEffect( () => {}, []) mirip dengan componentDidMount

## React Lifecycle

- Render()
- DidMount : sekali saja
- DidUpdate :
- WillUnmount : untuk cleanup

## Bagaimana Lifecycle pada Function Component?

1. Ketika terjadi perubahan state pada side effect berjalan makan akan sebuah re-render component (mirip dengan didMount) :
   useEffect(() =>{
   ...
   },[])

2. Side effect dijalankan sekali pada saat component telat dimuat, lalu akan dijalankan kembali ketika ada perubahan nilai dari salah satu scope (mirip didMount + didUpdate) :
   useEffect(() => {
   ...
   }, [state])

3. Side effect akan dijalankan terus-menerus kalau penulisannya tanpa scope ([]) :
   useEffect(() =>{
   ...
   })

4. Side effect akan dijalankan setiap waktu, namun dia akan berhenti ketika ingin meninggalkan halaman, atau sebelum komponen/elemen dihancurkan dalam DOM tree, dengan harap performa dari web tetap terjaga karena tidak ada proses berjalan dibelakang layar. contoh; OTP, Status Online. (mirip dengan DidMount+ DidUpdate + WillUnmount) :
   useEffect(() =>{
   ...
   return() => {
   ...
   }
   })

## Apa itu Custom Hook?

- Custom hook merupakan Javascript function yang dapat digunakan untuk memanggil hooks lain
- Digunakan untuk berbagi statefull logic antar komponen
- Diawali dengan "use" sebagai konvensi.

## Bagaimana cara jika ingin membuat custom hooks?

1. Buat folder hooks di utils
2. Buat file .js bisa customHooks.js
3. Import useState dan useEffect
4. buat function dengan awalan use...
5. Gunakan useEffect yang return
   useEffect (() => {
   ...
   return () => {
   ...
   }
   })
6. Panggil use... di jsx -> use...('')

## Apa saja helper yang biasanya ada di utils?

- API
- Configs
- Formatter

## Bagaimana cara melakukan absolute Import?

1. add code in vite-config.js
2. resolve: {
   alias: {
   "@": "/src",
   },
   },
3. pada import tambahkan "@/"

## Jika ingin menggunakan daisy UI apa yang perlu diperhatikan?

Samakan tag nya pembukusnya dan tambahkan tema di html

## Table Powerful

TanStack -> yang buat react query

## Helper Modal

SweetAlert2

## Apa arti config pada metode post?

Pada metode POST Axios, opsi config biasanya merujuk pada objek yang digunakan untuk mengkonfigurasi permintaan HTTP yang akan dikirimkan. Opsi ini memungkinkan untuk menentukan berbagai pengaturan yang diperlukan untuk permintaan POST, seperti header kustom, autentikasi, timeout, dll. Contohnya: ketika ingin hapus akun sosial media, perlu login dahulu.

## Method

GET -> url/endpoint config : Mengambil data
POST -> url/endpoint, body, config : Membuat data
PUT -> url/endpoint, body, config
DELETE -> url/endpoint, config

## Apa perbedaan path parameter dan query parameter?

Path parameter dan query parameter adalah dua cara umum untuk mengirim data ke server melalui URL dalam permintaan HTTP. Mereka digunakan untuk tujuan yang berbeda dan memiliki sintaksis yang berbeda:

1. Path Parameter:

   - Path parameter adalah bagian dari URL yang digunakan untuk mengirim data sebagai bagian dari jalur (path) itu sendiri.
   - Path parameter dimulai dengan karakter titik dua (":") diikuti oleh nama parameter yang Anda tentukan dalam definisi jalur.
   - Path parameter digunakan untuk mengidentifikasi sumber daya tertentu atau item dalam permintaan, seperti ID produk, nama pengguna, dll.
   - Path parameter tidak memiliki kunci atau nilai seperti query parameter.
   - Contoh: `/products/:productId`, di mana `:productId` adalah path parameter yang mengidentifikasi produk tertentu.

   Contoh penggunaan path parameter dalam URL filter:

   - Mengambil detail produk: `/products/123`, di mana "123" adalah nilai dari path parameter `productId`.

2. Query Parameter:

   - Query parameter adalah bagian dari URL yang digunakan untuk mengirim data sebagai pasangan kunci-nilai setelah karakter tanda tanya ("?").
   - Query parameter digunakan untuk memberikan parameter opsional atau filter tambahan dalam permintaan.
   - Mereka digunakan untuk mengurutkan data, memfilter berdasarkan kriteria tertentu, atau memberikan opsi lain kepada server.
   - Contoh: `/products?category=electronics&priceRange=100-500`, di mana "category" dan "priceRange" adalah query parameter.

   Contoh penggunaan query parameter dalam URL filter:

   - Mengambil semua produk dalam kategori elektronik dengan harga antara 100 hingga 500: `/products?category=electronics&priceRange=100-500`.

## Jika kita ingin mencopy folder react dan sudah ada beberapa library yang terinstall di dalamnya, apakah perlu install satu-satu lagi?
Tidak, tinggal npm i saja

## Capstone
1. Ide -> design 
2. User pesona - Market - Warna/ Typography
3. Backend- swagger documentation
4. Pastikan komunikasinya jalan dan ada daily update (scrum)
5. Berapa banyak kontribusi dari commit
6. FE -> Reusable - Slicing.
7. Yang perlu di sepakati FE -> Formatter : Pretier, Penamaan File (kebap,camelCase), function, folder structure, Styling, Penulisan Variable. Code standard and library


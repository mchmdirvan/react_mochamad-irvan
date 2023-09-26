# (13) React-Event Handling

## Apa itu event-handling?

Event handling adalah prosedur dalam rangkaian kode yang menangani sebuah aktivitas ketika peristiwa ( Event ) terjadi saat program dalam kondisi Runtime.

## Ada apa saja event di web?

- onClick : di mana aja : paragraph,ancor,gambar,dkk
- onSubmit : di button submit dan akan reload otomatis
- onChange : ex : biasanya form
- onScroll : ex: infinity scroll shopee, instagram

## Bagaimana penamaan function untuk submit?

handleSubmit

## bagaimana penamaan function untuk memanggil data?

fetchData

## Bagaimana cara mereturn dua buah element?

Kita dapat menggabungkan dua elemen dengan menggunakan elemen `div` atau `fragment` (`<component> </>`). Ini berhubungan dengan rendering dan tampilan elemen, yang sering berhubungan dengan event handling.

## Bagaimana jika ingin menggunakan useEffect?

Kita dapat menggunakan `useEffect` untuk menangani side effects yang berkaitan dengan perubahan dalam komponen, termasuk event handling. `useEffect` mirip dengan `componentDidMount` dalam hal penanganan event tertentu.

## React Lifecycle

siklus hidup komponen dalam React, termasuk `Render()`, `DidMount`, `DidUpdate`, dan `WillUnmount`. Ini terkait dengan penanganan event di berbagai tahap siklus hidup komponen.

## Lifecycle pada Function Component

`useEffect` dapat digunakan dalam function component untuk menangani berbagai tahap siklus hidup komponen, termasuk event handling yang terkait dengan perubahan state.

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

## Bagaimana jika kita menggunakan value?

onChange={(event) => setProductName(event.target.value)}
fungsi -> proses

## Bagaimana contoh menggunakan ternary operator di useState?

Poin ini menggambarkan cara menggunakan ternary operator dalam `useState`, yang dapat berhubungan dengan event handling ketika nilai state berubah.
const [isLoading, setIsLoading] = useState(true)

<p>{isLoading ? "Loading" : title }</p> // tapi harus di jadiin false pas pakai setTimeOut

## Bagaimana jika ingin menggunakan Map agar tidak error harus apa?

Ini menyinggung penggunaan `map` untuk mengiterasi melalui elemen-elemen dalam array. Event handling bisa berhubungan dengan cara kita memproses data saat melakukan iterasi. Map hanya bisa digunakan untuk Array. Maka buat default value terlebih dahulu. Contohnya data=[]

## Lalu bagaimana cara agar memasukan datanya ke array ([]) ?

Ini berkaitan dengan bagaimana kita dapat memasukkan data ke dalam array dengan menggunakan operator spread `...`, yang dapat digunakan dalam event handling saat memperbarui data di dalam array.

# Data Fetching

## Bagaimana cara memanggil data?
- fetchAPI
- Menggunakan library : axious, 
- Menggunakan library : react query 

## API gratis
- JSON Place Holder : testing pemanggilan API 

## Ada metode apa saja untuk memanggil API menggunakan restfulAPi?
- GET : Read , Memanggil data -> ex : memanggil list data dari API
- POST : Create  -> ex : menambahkan data 
- PUT  : Update
- PATCH : Update
- DELETE : delete -> ex : menghapus data

## Selain Restful API ada apa lagi?
GraphQL

## Bagaimana cara menampilkan fetchdata?
dengan menggunakan useEffect agar dapat berjalan seperti didMount

## Fetch API
- perlu input, init?, dan menghasilkan promise dimana bisa menggunakan try catch atau then catch
- perlu konversi menjadi json => .then((result) => result.json), lalu baru .then((response) => ...), .catch((error)=> ...), 
- untuk memunculkan datanya gunakan useState , {.map}, dan key
- Jika ingin menambahkan animasi saat loading dapat menggunakan  useState dan .finally(()=> setIsLoading(false)) dan menggunakan ternary operator pada {?():()}
- Lite edition dan sudah ada di server, bisa di render di server (react server component : di nextjs)

## Bagaimanakah cara melihat debugging fetch API?
dev tools : network - fetch/xhr - response

## Animasi
Spinner : Frammer React, lottiefiles lottie react (perlu dibuat reusable compo)
Skeleton : Tailwind Pulse -> untuk looping dapat menggunkan array [...Array(10).keys().map((data) => </component   key = {data}>)]

# Axious
- Mirip seperti memanggil promise : axious.get()
- tidak perlu konversi ke json terlebih dahulu karena hasilnya akan menjadi object 
- Mendapatkan konfigurasi tambahan yang sifat nya optional

# React Query
- Perlu effort
- Render perlu sekali saja
- bisa realtime ambil data 

# Summary on one.alterra

## List Event
1. Clipboard Events (Promise terpenuhi)
2. Form Events (onChange, onSubmit)
3. Mouse Events (onClick, onDoubleClick, onMouseOver)
4. Generic Events (onError,onLoad)

## Perbedaan Stateful dan Staless Component
1. Stateless :
   - Tidak tahu tentang aplikasi
   - Tidak melakukand data fetching (pengambilan data)
   - Tujuan utamanya adalah visualisasi
   - Dapat digunakan kembali
   - Hanya berkomunikasi dengan Induk langsungnya
2. Statefull :
   - Mengerti tentang aplikasi
   - Melakukand data fetching (pengambilan data)
   - Berinteraksi dengan aplikasi
   - Tidak dapat digunakan kembali
   - Meneruskan status dan data ke anak-anaknnya
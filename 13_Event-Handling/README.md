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

Kita dapat menggabungkan dua elemen dengan menggunakan elemen `div` atau `fragment` (`<> </>`). Ini berhubungan dengan rendering dan tampilan elemen, yang sering berhubungan dengan event handling.

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
- Menggunakan library : axious, react query 

## API gratis
- JSON Place Holder : testing pemanggilan API 

## Ada metode apa saja untuk memanggil API
- GET : Memanggil data -> ex : memanggil list dari API
- POST
- PUT 
- PATCH
- DELETE
# (12) React Fundamental

## Bagaimana cara export component jika lebih dari satu?

export {...,...}

## Apa perbedaan Function Component dengan Class Component?

## Apa itu state?

State mirip dengan variabel

## Apa fungsi setState?

setState merupakah updater yang fungsinya untuk merubah nilai dari suatu state

## Bagaimana jika ingin menggunakan state di funcition component?

Hooks : const [stateName,setName] = useState()
stateName adalah nama state
setName adalah updater
useState adalah hooks
() adalah nilai default

## Bagaimana jika ingin menggunakan useEffect?

useEffect( () => {}, []) mirip dengan componentDidMount

## Bagaimana cara mereturn dua buah element?

bisa digabungkan dengan element div atau fragment elemen (<></>)

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

## Kebanyakan State digunakan untuk apa?

digunakan untuk menyimpan data sementara

## Apa itu props?

Props sama seperti state layaknya variabel, namun props hanya bisa membaca saja dan tidak bisa di ubah.

## Bagaimana contoh cara menggunakan function props?

function Input (props){
const {param: label,onChange, value} = props
}

return (
<label>{param}</label>
<input onChagne={onChange}></input>
<value><value/>
)

## Bagaimana cara menyimpan data di Input?
Menggunakan state, contohnya :
function (){
    const [productName, setProductName] = useState("")
}

## Jika kita memasukan sebuah data ke Input, maka akan menghasilkan tipe data apa?
String. Jika ingin number maka gunakan valueAsNumber

## Bagaimana cara mengecek jika targetnya terekam atau mengecek tipe data pada Input?
onChange={(event) => console.log(event.target.value)}
onChange={(event) => console.log(typeof event.target.value)}

## Bagaimana jika kita menggunakan value?
onChange={(event) => setProductName(event.target.value)}
fungsi -> proses

## Bagaimana contoh menggunakan ternary operator di useState?
const [isLoading, setIsLoading] = useState(true)
<p>{isLoading ? "Loading" : title }</p> // tapi harus di jadiin false pas pakai setTimeOut

## Jika ingin menggunakan Map agar tidak error harus apa?
Map hanya bisa digunakan untuk Array. Maka buat default value terlebih dahulu. Contohnya data=[]

## Lalu bagaimana cara agar memasukan datanya ke array ([]) ?
Dengan menggunakan spread operator (...)

## Render Bersyarat 
- Menggunakan If 
- If dengan operator && 
- If-else  ternary operator
- Mencegah rendering (!...)

## Summary on one.alterra
{} untuk menaruh expression dari Javascript
penamaan variable atau function harus PascalCase agar tidak dilihat sebagai tag html
tambahkan key pada indeks array


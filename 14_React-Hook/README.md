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
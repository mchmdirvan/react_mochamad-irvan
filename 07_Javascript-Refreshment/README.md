# (07) Javascript Refreshemt

## Random Notes
suvery stackoverflow 2023
nodemon

## ada apa saja macam-macam cara penamaan variable?
- lowercase
- UPPERCASE
- camelCase
- PascalCase
- snake_case

## Apa saja tipe data di Javascript?
Tipe data Primitive
- Int
- Bool == / === / && / ||
- String ``,"",''
- Null
- Undefined

Tipe data collection
- Object {}
- Array []

## Bagaimana cara menulis function
function funcName (param) {
...
}

## Bagaimana cara mengetahui output function?
hover nama fungsinya. kalau mau ada hasilnya harus di return. bisa juga dengan console.log(functionName(params))

## Arrow Function Expression()
Regular function dapat berupa function declaration dan function expression. Namun, arrow function hanya berupa expression function saja. 
const variableName = (param) => {
  action
}
ketika body dari function hanya terdiri dari satu baris, kita bisa menghapus tanda kurung kurawal 
const sayName = name => console.log(`Nama saya ${name}`);

## Branching 
- if else
- switch case
- Ternary operator

-----

## Apa itu Javascript?

JavaScript adalah bahasa pemrograman serbaguna yang digunakan secara luas untuk membuat konten web interaktif dan dinamis. Bahasa ini berjalan di peramban web, memungkinkan untuk scripting di sisi klien, dan juga bisa digunakan di sisi server dengan Node.js.

## let and const

Variabel dalam JavaScript bisa dideklarasikan dengan menggunakan let dan const. Kata kunci let digunakan untuk variabel yang nilainya bisa diubah, sementara const digunakan untuk variabel dengan nilai yang tetap. var bisa dijalankan sebelum di inisialisasi, sedangkan let harus di deklerasikan.

## String template (backtick)

`${variable/expression}` + bisa multiline

## Function melakukan konversi String dan Number

- parseInt(string) : Mengkonversi string ke number (bilangan bulat)
- parseFloat(string) : Mengkonversi string ke number (bilangan pecahan)
- Number(string) : Mengkonversi string ke number (bilangan bulat atau pecahan)
- number.toString() : Mengkonversi number ke string (bilangan bulat)

## NaN (Not a Number)

isNaN() Function : untuk mengecek apakah sebuah number NaN atau bukan

## Operasi di Array []

- array.push(value) : menambahkan data ke array
- array.length : untuk mendapatkan panjang array
- array[index] : mendapatkan data di posisi index
- array[index] = value : mengubah data di posis index
- delete array [index] : Menghapus data di posisi index, namun index tidak bergeser
- console.table(array) : Melihat isi Array

## Operasi Object {}

Yang membedakan dengan array adalah index pada tipe data object bisa menggunakan string atau disebut attributes/propeties

- objcet[attribute] = value : menambah atau mengubah data object
- object {
  attribute: value
  } = membuat object dengan attributes
- delete object [attribute] : Menghapus data
- console.table(array) : Melihat isi object
- console.info(`string : ${object.attribute}`) :Mengakses properti di object\*
  \*gunakan [""] jika attribute lebih dari satu kata

## If Expression

if (condition){
action
}

## Pop-Up

- Alert() : memberi peringatan pop-up di browser
- Prompt() : meminta input string dari user dalam bentuk popup input text
- Confirm() : meminta input boolean dari user dalam bentuk popup input pilihan

## Undefined

Undefined adalah sebuah tipe data dimana sebuah variable belum ditambahkan nilai

## Null

Null merupakan representasi data kosong, null berarti variable yang sudah ditambahkan valuenya, hanya saja value nya null

## Switch Statement

Switch adalah statement percabangan yang sama dengan if, namun hanya menggunakan perbandingan dan lebih sederhana

## Operator typeof

operator typeof digunakan untuk melihat tipe data sebuah value atau variable

## In Operator

operator In digunakan untuk mengecek apakah sebuah property ada didalam object atau tidak

## Ternary Operator

Ternary Operator adalah operator sederhana dari if Statement
condition ? "" : ""

# Nullish Coalescing Operator (??)

Nullist value adalah null dan undefined, operator ini mirip dengan ternary operator yang membedakan adalah pada kondisi nya. Jika berinai null atau undefined baru value default nya di ambil
comparison ?? "value"

## Optional Chaining Operator (?)

Optional Chaining Operator (?) merupakan operator yang digunakan untuk mengamankan ketika kita ingin mengakses property sebuah object dari data nullish agar tidak terjadi error
object?.attributes

## Falsy dan Truthy

Falsy adalah value yang ketika dalam konteks boolean di anggap false : false, 0, -0, null, "", '', ``, undefined, NaN
Truthy kebalikannya, truthy selain yang disebutkan di atas

## Operator Logika di Non Boolean

|| : akan mengambil yang truthy
&& : akan mengambil yang falsy

## For Loop

for (init statement; kondisi; post statement){
//action
}

- init statement akan di eksekusi hanya sekali di awal sebelum perulangan
- kondisi akan dilakukan pengecekan dalam setiap perulangan, jika true lanjut
- post statement akan dieksekusi setiap kali di akhir perulangan
*jangan lupa declaration init statement dan (;)

## While Loop

While loop adalah versi perulangan yang lebih sederhana dibandingkan for loop dimana hanya terdapat init statment dan post statement
init statement
while (kondisi){
action
post statement
}

## Do While Loop

Pengecekan kondisi di while loop dilakukan setelah perulangan dilakukan
Minimal dilakukan sekali walaupun kondisinya false
init statement
do {
action
post statement
} while (kondisi)

## Break & Continue

- Break : Menghentikan perulangan
- Continue : Skip perulangan

## Label (:)

Label merupakan penanda yang bisa digunakan dengan kata kunci break dan continue

## For In

For in merupakan perulangan for yang digunakan untuk melihat seluruh data property/attribute di object ataupun index di array.
For in digunakan untuk melakukan iterasi property atau index
for (let variable in object) {
(${variable} : ${object[variable]})
}

## For Of

For of digunakan untuk melakukan iterasi terhadap isi value dari iterable object, seperti array, string,dll.
for ( variable of object){
(${variable})
}

## With Statement

With statement merupakan fitur yang digunakan untuk menurunkan sebuah scope data. Dengan menggunakan with statement, kita bisa mengakses property dalam sebuah data tanpa harus menyebut datanya.
with (object) {
properti
}

https://www.w3schools.com/css/css_pseudo_classes.asp
https://www.w3schools.com/html/html_form_attributes.asp
https://www.w3schools.com/js/js_validation_api.asp

## Spread Operator (...)

Spread digunakan untuk menyebarkan nilai array atau lebih tepatnya iterable object menjadi beberapa elemen.

## Destructuring

Destructuring dalam JavaScript merupakan sintaksis yang dapat mengeluarkan nilai dari array atau properties dari sebuah object ke dalam satuan yang lebih kecil. Iterasi object dan array adalah dua hal yang paling banyak digunakan dalam mengelola data di JavaScript. JSON (JavaScript Object Notation) merupakan format data paling populer yang digunakan dalam transaksi data saat ini.

- Destructuring Object : declaration {param} = objectName
- Destructuring Array : declaration [props] = arrayName

## Map

Map adalah tipe data yang menyimpan koleksi data dengan format key-value layaknya Object. Yang membedakan adalah Map memperbolehkan key dengan tipe data apa pun, dibandingkan Object yang hanya mengizinkan key bertipe String atau Symbol.
const myMap = new Map([]);

## Bagaimana cara mengakses Map?
Ketika sudah membuat objek Map, kita bisa mendapatkan nilainya berdasarkan key tertentu dengan metode get(). Lalu, untuk menambahkan pasangan key-value baru gunakan metode set().
get : mapName.get(key)
set : mapName.set(key,value)

## Function ()
function merupakan sebuah variabel yang berisi blok logika. Blok logika tersebut akan dieksekusi ketika variabelnya dipanggil.
function functioName(param) {
  logic action
}




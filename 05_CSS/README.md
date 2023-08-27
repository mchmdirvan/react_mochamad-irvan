# (05) CSS

## Apa yang dimaksud dengan metode inline, internal, dan eksternal dalam penambahan gaya CSS?

Metode inline melibatkan penulisan gaya langsung di dalam tag HTML, sedangkan metode internal melibatkan penambahan tag style di dalam HTML. Metode eksternal melibatkan penggunaan file .css terpisah.

## Apa konsep penting dalam CSS?

Terdapat pemahaman tentang konsep atribut selection (seleksi), properti (property), dan value (nilai) dalam CSS. Metode seleksi elemen HTML dapat menggunakan metode id (#) atau class (.), serta menggunakan tag HTML sebagai selektor.

## Apa hal lain yang di pelajari dalam CSS?

Selain itu, ada pemahaman yang lebih dalam tentang mengatur font, mengelola padding dan margin untuk tata letak yang lebih terstruktur, mengatur latar belakang (background), interaksi pengguna seperti tautan (link), serta teknik styling untuk elemen tabel. Konsep tampilan dengan properti display juga menjadi aspek penting dari pembelajaran ini.

## Apa fungsi properti display dan bagaimana perbedaannya?

1. Display: inline

   - Elemen HTML yang secara default tidak menambahkan garis baru ketika dibuat
   - lebar dan tinggi elemennya sebesar konten di dalamnya
   - tidak dapat diatur tinggi dan lebar elemen inline
   - Margin dan padding hanya mempengaruhi elemen secara horizontal
   - elemen default inline : a,button,input,label,select, ...

2. Display: inline-block

   - Tidak ada elemen yang secara default memiliki properti value display:inline-block
   - perilaku dasarnya sama dengan inline
   - perbedaannya : elemen inline-block dapat diatur tinggi dan lebarnya

3. Display: block

   - Elemen HTML secara default menambahkan baris baru ketika dibuat
   - Jika tidak diatur lebarnya, maka lebar default dari elemen block akan memenuhi lebar dari browser atau parent nya
   - dapat diatur tinggi dan lebar dari elemen blcok
   - di dalam elemen block, kita dapat menyimpan tag dengan elemen inline, inline-block, atau bahkan elemen block lagi
   - elemen default block: h1-h6, p,ul,li,form,div,...

4. Display:none
   - untuk hide

## Ada apa saja properti dimensi di css?

- Width
- Height

## ada apa saja value dari properti overflow?

1. Visible : lewat aja gitu
2. Auto : menambahkan scroll jika lebih dari parent
3. Hidden : sesuai parent
4. Scroll: akan ada elemen scroll walaupun konten cukup

## ada apa saja box model di css?

1. Margin : diluar border
2. Padding : antara content dan border, menambah ukuran elemen, tidak bisa auto
3. Border : di sekeliling content

## Box Sizing apa itu?

Properti Box-sizing memperbolehkan kita untuk memasukan padding dan border didalam total width dan height atau parentnya

## CSS Reset

https://meyerweb.com/eric/tools/css/reset/

## Cara mengatur gambar posisi dan ukuran?

height, background-size, background-position

## Satuan Unit

em : relatif terhadap parent atau font
rem : relatif terhadap root atau html


## Apa itu flexbox
Flexible Box Modul : Model layout 1D yang dapat mengatur jarak dan penjajaran antar item  dalam sebuah container
Maksudnya satu dimensi adalah hanya bisa memilih salah satu antara baris atau kolom. kalau mau dua-duanya atau 2D ada CSS grid

## Ada apa saja istilah dalam flexbox
- Container : wadah
- Items : Elemen yang ada di dalam atau childs
- Main-Axis : Elemen di set sejajar secara horizontal // Sumbu utama dari sebuah container yang menentukan arah dari penempatan Items secara horizonal
- Cross-Axis : --
- Main Size : ukuran container // Ukuran (Width/Height) dari container yang akan membuat dimensi dari items nya relatif terhadap main size
- Cross-Size : ukuran column 
- Main Start / Main-End : Awalan atau akhiran Items secara horizontal di dalam container 
- Cross-Start - Cross-End : Awalan secara vertikal 

## Ada apa saja properti di dalam container flexbox?
- Display : flex -> membuat sebuah element parent menjadi flex box dan membuat elemen-elemen di dalamnya bisa berperilaku flex juga. 
- Flex Direction : row (default) | row-reverse | column | column-reverse -> untuk mengatur arah container flex nya
- Flex-wrap : nowrap (default) | wrap | wrap-reverse -> wrap memungkinkan untuk memindahkan item ke baris bawahnya jika container sudah penuh 
- Justify-content : flex-start | flex-end | center | space-between | space-around | space-evenly -> mengatur jarak antar items
- Align-items : flex-star | flex-end | center | stretch | baseline -> mengatur perilaku penjajaran items terhadap cross axis
- Align-content : -> mengatur jarak antar items terhadap cross axis
  
  ## Ada apa saja properti pada items?
  - Order : mengatur urutan
  - flex-grow : mengatur ukuran items nya
  - Align-self : mengatur perilaku penjajaran sebuah item yang spesifik terhadap cross axis


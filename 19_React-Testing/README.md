# (19) React Testing 

## Apa itu software testing?
A process of "analyzing a software item" to "detect the differences" between existing and required conditions and to "evaluate the features" of the software item.

## Apa tujuan dari testing?
- Preventing Regression
- Confidence Level in Refactoring
- Improve code design
- Code Documentation
- Scaling the team

## Apa itu Level of testing? 
...

## Terdiri dari apa saja Level of Testing?
- UI : end to end test the interaction between the overall through the user interface -> QA
- Intergration : Tests a spesific modules or sub-system through the API -> ex: component -> FE
- Unit : Tests the smallest testable part (single logical operation) of an application through methods -> ex: function (backend)

## Framwework Testing
- Jest Js -> develop by facebook
- Moca
- Vitest
banyaklah pokoknya 

## Library yang perlu install
- @testing-library/jest-dom 
- @testing-library/react
- @testing-library/user-event
- vitest
- jsdom

## Bagaimana langkah untuk melakukan testing di react menggunakan vitest?
1. Install library
2. Buat Folder __tests__ -> Pages
3. didalam folder pages buat setup.js dan utils.jsx
4. Melakukan konfigurasi pada setup.js
5. Melakukan konfigurasi pada package.json -> scripts -> test:vitest
6. Melakukan konfigurasi pada vite.config.js 
7. Melakukan konfigurasi pada utils.jsx untuk :
   - support provider
   - customRender
8. Melakukan konfigurasi pada component untuk menambahkan aria label 
9. Membuat file testing di pages sesuai nama pages nya ditambahkan .test

## Jenis Routing di React :
- Browser Router -> History Navigasi pada browser
- Hash Router -> History Navigasi pada #
- Memory Router

## Vitest Coverage - html
Mengecek coverage testing nya sudah berapa  %, baru lakukan testing manual. 
Minimal bagusnya adalah 85%

## README
contoh readme yang proper : github.com/SyaifulGhifari/LesGoo
untuk membuatnya dapat menggunakan:  readme.so
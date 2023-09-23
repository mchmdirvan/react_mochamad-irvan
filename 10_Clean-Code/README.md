# (10) Clean Code

## Apa itu Clean Code?

Clean code adalah istilah untuk kode yang yang mudah dibaca, dipahami,dan diubah oleh programmer.

## Mengapa harus menerapkan Clean Code?

Clean code perlu diterapkan agar dapat berkeja sama dan berkolborasi dengan tim lebih mudah dan development dalam pembuatan feature program nya lebih cepat

## Rules apa saja yang perlu di perhatikan untuk menerapkan code?

1. Names Rules
2. Function Rules
3. Comment Rules
4. Source Code Structure

## Bagaimana rules untuk names?

1. Choose descriptive and unambiguous names. (Menggunakan kata yang deskriptif dan menghindari kata ambigu)
2. Make meaningful distinction. (Membuat kata yang berbeda)
3. Use pronounceable names. (Menggunakan kata yang bisa di ucapkan)
4. Use searchable names. (Menggunakan kata yang mudah dicari)
5. Replace magic numbers with named constants. (Mengganti nomor cantik dengan konstan)
6. Avoid encodings. Don't append prefixes or type information. (Mengindari enkoding. Jangan menggunakan awal atau informasi tipe data)

## Bagaimana rules Function?

1. Small.
2. Do one thing.
3. Use descriptive names.
4. Prefer fewer arguments. (less or equal to three)
5. Have no side effects.
6. Don't use flag arguments. Split method into several independent methods that can be called from the client without the flag. (Do one thing)
7. Describe parameter

## Bagaimana Rules Comment?

1. Always try to explain yourself in code. (usahakan ga usah komen, tapi kode nya mudah dibaca)
2. Don't be redundant. (hindari berulang)
3. Don't add obvious noise.
4. Don't use closing brace comments.
5. Don't comment out code. Just remove.
6. Use as explanation of intent.
7. Use as clarification of code. (menjelaskan bagaimana kode yang rumit bekerja)
8. Use as warning of consequences. (gunakan sebagai peringatan)

## Bagaimana Source code structure yang baik?

1. Separate concepts vertically.
2. Related code should appear vertically dense.
3. Declare variables close to their usage.
4. Dependent functions should be close.
5. Similar functions should be close.
6. Place functions in the downward direction.
7. Keep lines short.
8. Don't use horizontal alignment.
9. Use white space to associate related things and disassociate weakly related.
10. Don't break indentation.

## Tips

Gunakan Konvensi
https://github.com/airbnb/javascript

## Bagaimana cara refactor code?

1. Membuat sebuah abstraksi
2. Memecah kode dengan fungsi/class
3. Perbaikan penamaan dan lokasi kode
4. Deteksi kode yang memiliki duplikasi

## Motivation

Untuk membuat coding usahakan untuk mengetahu essensi dari penggunaan code nya agar bisa survive di dunia kerjaan. project test atau logic test.

## React Clean-Code
import library component dipisah, urutannya dari panjang ke pendek, sesuaikan tipe data
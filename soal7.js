const nama = "  muhammad rizki  ";

// Menghilangkan spasi awal dan akhir
let namaBersih = nama.trim();

// Mengubah menjadi huruf besar
let hurufBesar = namaBersih.toUpperCase();

// Mengubah menjadi huruf kecil
let hurufKecil = namaBersih.toLowerCase();

// Menghitung jumlah karakter
let jumlahKarakter = namaBersih.length;

// Menampilkan hasil
console.log("Nama asli:", nama);
console.log("Nama setelah trim:", namaBersih);
console.log("Huruf besar:", hurufBesar);
console.log("Huruf kecil:", hurufKecil);
console.log("Jumlah karakter:", jumlahKarakter);
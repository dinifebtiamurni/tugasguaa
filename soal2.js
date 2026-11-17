// Data belanja
let hargaBarang = 25000;
let jumlahBarang = 4;
let diskon = 10;

// Menghitung total harga
let totalHarga = hargaBarang * jumlahBarang;

// Menghitung besaran diskon
let besarDiskon = totalHarga * diskon / 100;

// Menghitung total pembayaran
let totalPembayaran = totalHarga - besarDiskon;

// Menampilkan hasil
console.log("=== TOTAL BELANJA ===");
console.log("Total sebelum diskon : Rp" + totalHarga);
console.log("Besaran diskon       : Rp" + besarDiskon);
console.log("Total pembayaran     : Rp" + totalPembayaran);


const nilai = [80, 75, 90, 65, 85, 95, 70];

// Menampilkan seluruh nilai
console.log("Seluruh nilai:", nilai);

// Mencari nilai tertinggi
let tertinggi = Math.max(...nilai);
console.log("Nilai tertinggi:", tertinggi);

// Mencari nilai terendah
let terendah = Math.min(...nilai);
console.log("Nilai terendah:", terendah);

// Menghitung rata-rata
let total = 0;

for (let i = 0; i < nilai.length; i++) {
    total += nilai[i];
}

let rataRata = total / nilai.length;
console.log("Nilai rata-rata:", rataRata);

// Menghitung mahasiswa yang lulus
let jumlahLulus = 0;

for (let i = 0; i < nilai.length; i++) {
    if (nilai[i] >= 75) {
        jumlahLulus++;
    }
}

console.log("Jumlah mahasiswa lulus:", jumlahLulus);
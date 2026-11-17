const mahasiswa = [
    { nama: "Andi", nilai: 85 },
    { nama: "Budi", nilai: 60 },
    { nama: "Citra ", nilai: 90 },
    { nama: "Doni", nilai: 70 },
    { nama: "Eka", nilai: 95 }
];

// Menampilkan mahasiswa yang lulus
console.log("=== MAHASISWA LULUS ===");

let lulus = mahasiswa.filter(m => m.nilai >= 75);

lulus.forEach(m => {
    console.log(m.nama.trim(), "-", m.nilai);
});

// Menampilkan mahasiswa yang tidak lulus
console.log("=== MAHASISWA TIDAK LULUS ===");

let tidakLulus = mahasiswa.filter(m => m.nilai < 75);

tidakLulus.forEach(m => {
    console.log(m.nama.trim(), "-", m.nilai);
});

// Menghitung jumlah mahasiswa lulus
console.log("Jumlah mahasiswa lulus:", lulus.length);

// Mengurutkan berdasarkan nilai tertinggi
console.log("=== URUTAN NILAI TERTINGGI ===");

let urutanNilai = [...mahasiswa].sort((a, b) => b.nilai - a.nilai);

urutanNilai.forEach(m => {
    console.log(m.nama.trim(), "-", m.nilai);
});
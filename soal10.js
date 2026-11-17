// Data produk
const produk = [
    { nama: "Mouse", harga: 50000 },
    { nama: "Keyboard", harga: 100000 },
    { nama: "Monitor", harga: 1500000 },
    { nama: "Headset", harga: 200000 }
];

// Data keranjang belanja
let keranjang = [
    { nama: "Mouse", jumlah: 2 },
    { nama: "Keyboard", jumlah: 1 },
    { nama: "Headset", jumlah: 1 }
];

// Variabel subtotal
let subtotal = 0;

console.log("========= STRUK PEMBELIAN =========");

// Memproses setiap barang
for (let i = 0; i < keranjang.length; i++) {

    let namaProduk = keranjang[i].nama;
    let jumlah = keranjang[i].jumlah;

    // Mencari harga produk
    let dataProduk = produk.find(p => p.nama === namaProduk);

    if (dataProduk) {

        // Menghitung subtotal produk
        let totalProduk = dataProduk.harga * jumlah;

        subtotal += totalProduk;

        // Menampilkan barang
        console.log(
            namaProduk.padEnd(12) +
            " x" + jumlah +
            "    Rp" + totalProduk.toLocaleString("id-ID")
        );

    } else {
        console.log("Produk tidak ditemukan:", namaProduk);
    }
}

// Menghitung diskon
let diskon = 0;

if (subtotal > 500000) {
    diskon = subtotal * 10 / 100;
}

// Menghitung total pembayaran
let totalPembayaran = subtotal - diskon;

// Menampilkan struk
console.log("----------------------------------");
console.log("Subtotal          Rp" + subtotal.toLocaleString("id-ID"));
console.log("Diskon            Rp" + diskon.toLocaleString("id-ID"));
console.log("Total             Rp" + totalPembayaran.toLocaleString("id-ID"));
console.log("===================================");
console.log("Terima kasih!");
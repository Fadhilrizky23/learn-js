import { API, sampleErrorData, sampleSuccessData } from './support.mjs';

/**
 * TODO:
 * Lengkapi fungsi processData di bawah ini dengan ketentuan:
 * 1. Mengembalikan data dari pemanggilan API.fetch berdasarkan argumen `data` yang diberikan.
 * 2. Membangkitkan error jika API.fetch mengembalikan Promise reject.
 *
 * Parameter:
 * - `data` merupakan array of object dengan struktur { delay, simulateError }.
 * - Jalankan kode untuk melihat contoh nilai argumen `data`
 */
async function processData(data) {
    try {
        const result = await Promise.all(
            data.map(item => API.fetch(item.delay,item.simulateError))
        );

        return result;

    } catch (err) {
        // console.error(err)
        throw err;
    }
}

processData(sampleErrorData).then(console.log).catch(console.log); // Throw exception: Error from delay 50
processData(sampleSuccessData).then(console.log).catch(console.log); // expected output: ['Data from delay 100', 'Data from delay 50']



// Mari saya jelaskan per baris:
// import { API, sampleErrorData, sampleSuccessData } from './support.mjs';

// Import 3 hal dari file support.mjs: API (untuk fetch), dan 2 data sample

// async function processData(data) {

// Fungsi async yang menerima parameter data (array of objects)

// try {
//     const result = await Promise.all(
//         data.map(item => API.fetch(item.delay, item.simulateError))
//     );

// data.map(): Ubah setiap object menjadi Promise dari API.fetch
// Promise.all(): Jalankan semua Promise secara bersamaan
// await: Tunggu sampai semua Promise selesai

// return result;

// Kembalikan hasil semua Promise yang berhasil

// } catch (err) {
//     throw err;
// }

// Tangkap error jika ada Promise yang gagal
// Lempar error tersebut

// processData(sampleErrorData)
//     .then(console.log)
//     .catch(console.log);

// Jalankan fungsi dengan data yang ada error
// .then: Handle sukses
// .catch: Handle error

// processData(sampleSuccessData)
//     .then(console.log)
//     .catch(console.log);

// Jalankan fungsi dengan data yang sukses semua
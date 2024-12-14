// Analogi Sederhana
// Bayangkan HOF seperti mesin pembuat mesin:

// Kamu memberikan instruksi dasar (fungsi)
// Mesin membuat mesin baru dengan instruksi tersebut
// Mesin baru bisa digunakan berkali-kali dengan cara yang berbeda

// Contoh dari Dunia Nyata Anda
// Sebagai insinyur elektrik, pikirkan HOF seperti membuat templat pengukuran:

// Input: Spesifikasi dasar
// Proses: Membuat alat ukur khusus
// Output: Alat ukur yang bisa digunakan berulang

// Tips Memahami:

// Mulai dengan contoh sederhana
// Praktekkan berkali-kali
// Jangan takut eksperimen
// Pahami bahwa fungsi di JavaScript adalah "objek khusus" 


// Fungsi yang menerima fungsi dan mengembalikan fungsi
function buatValidator(fungsiValidasi){
    // Mengembalikan fungsi baru yang melakukan validasi
    return function(data){
        console.log("Sedang memvalidasi data....");
        return fungsiValidasi(data)
    }
}


// Contoh validasi untuk cable 
function validasiCable(cable){
    return cable.panjang > 100 && cable.tegangan >= 20000;  
} 

// Membuat Validator 
const validatorCable = buatValidator(validasiCable);

// Datanyaa 

const cable1 = {
    panjang : 150,
    tegangan : 20000
}

const cable2 = {
    panjang : 150,
    tegangan : 11000
}


console.log(validatorCable(cable1))  


// Contoh Sederhana 

function buatPenjumlahan(x) {
    return function (y) {
      return x + y;
    };
  }
  
  const tambah1 = buatPenjumlahan(1);
  
  console.log(tambah1(2)); // 3



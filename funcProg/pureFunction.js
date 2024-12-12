// Menghasilkan nilai yang sama setiap kali dipanggil dengan argumen yang sama.
// Contoh, ketika fungsi diberikan argumen X, ia harus selalu mengembalikan nilai Y meski dipanggil dalam kondisi dan waktu yang beda. Jadi, nilai yang dihasilkan oleh fungsi selalu terprediksi. Untuk mencapai ini, fungsi tidak boleh mengakses nilai di luar argumen dan variabel cakupan global.

// Tidak memiliki efek samping yang dapat memengaruhi keadaan di luar fungsi tersebut.
// Dalam konteks ini, efek samping merujuk pada segala perubahan yang dilakukan oleh fungsi pada variabel atau keadaan di luar cakupannya, seperti mengubah variabel global, berinteraksi dengan input dan output.


{
    // Ini bukan pure Function karena merubah nilai variabel Global 

    let value = 0 

    function addWith(addingValue){
        value += addingValue;
        console.log(`Curent value is ${value}`);
        return value;
    } 


    const result1 = addWith(1);
    const result2 = addWith(1);
    const result3 = addWith(1);
}

{
    // Contoh Pure Function 
    const numbers = [1,2,3,4,5]; 

    function isEven(num){
        return num % 2 == 0; 
    } 

    const genap = numbers.filter(isEven); 
    console.log(genap)  



    // Data
    const user = {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com'
    };
    
    const address = {
        street: '123 Main St',
        city: 'New York',
        country: 'USA'
    };

    function createUserProfile(user,address){
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            address: {
              street: address.street,
              city: address.city,
              country: address.country
            }
        }; 
    } 


    let user1 = createUserProfile(user,address);
    console.log(user1.name);
    console.log(user1.address.street);
}
{
    const temperatureInCelsius = 100; 

    function conversion(temperature){
        let convert = 9/5 *temperature + 32;  

        return convert; 
    } 

    console.log(`Hasil Konversi Celcius ke Fareheit : ${conversion(temperatureInCelsius)}`); 
} 


{
    // Default parameter 

    const temperatureInCelsius = 200; 

    function conversion(temperature = 50){
        let convert = 9/5 * temperature + 32; 


        return convert;  
    } 

    console.log(`Hasil konversi Celcius ke Farenheit Default param : ${conversion()}`) 

    // Menggantikan Default value 
    console.log(`Hasil konversi Celcius ke Farenheit Default param : ${conversion(temperatureInCelsius)}`) 

}
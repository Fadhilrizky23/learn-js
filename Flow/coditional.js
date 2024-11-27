{
    // if 

    // if(expression){steatment} 

    const gajian = true;
    console.log("jalan jalan ke mall : "); 

    if(gajian){
        console.log("makan enak")
    } 
    console.log("Pulang ke rumah"); 

    const score = 75; 

    if(score >= 80){
        console.log("Selamat, Anda lulus ujian"); 
    } else {
        console.log("Maaf, anda belum lulus"); 
    } 
} 

{
    // Ternary Operator 

    let result = true ? "Benar" : "salah"; 

    console.log(result); 

} 

{
    const price = 100000; 
    const isMember = true; 
    const discount = isMember ? 0.1 : 0; 

    console.log(`"Anda mendapatkan discount sebesar ${discount * price}`); 
} 


{
    // Switch case 

    // switch(expression){steatment} 

    const fruit = "apple"; 

    switch (fruit) {
        case "apple":
            console.log("I'am apple"); 
            break;
        case "banana" : 
            console.log("I am banana");
            case 'orange':
            console.log('I am an orange.');
            break;
        case 'strawberry':
            console.log('I am a strawberry.');
        default:
            console.log("i am not a fruit, i am programmer");
            break;
    }
}
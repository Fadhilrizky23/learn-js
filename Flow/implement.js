// function checkGrades(grades){
//     for(let i=0; i < grades.length;i++){
//         if(typeof grades[i] !== 'number'){
//         throw new Error("Masukin hanya angka sajaa!!"); 
//         } 


//         const grade =grades[i];
//         let predicate; 

//         if(grade >= 90){
//             predicate = 'A'
//         } else if (grade >= 80){
//             predicate = "B"; 
//         } else if (grade >= 70){
//             predicate = "C"; 
//         } else if (grade >= 60){
//             predicate = "D"; 
//         } else {
//             predicate = "E"
//         } 


//         console.log(`Nilai kamu ${grades[i]} kamu dapet predikat ${predicate}`);
//     }
// } 


function checkGrades(...nilai){
    for ( let data of nilai){
        if(typeof data !== 'number'){
            throw new Error("MASUKAN HANYA ANGKAA !!!!"); 
        } 

        let predicate; 

        if(data >= 90){
            predicate = "A"; 
        } else if (data >= 80){
            predicate = "B"; 
        } else if (data >= 70){
            predicate = "C"; 
        } else if (data >= 60){
            predicate = "D"; 
        } else {
            predicate = "E"
        }


        console.log(`Nilai kamu ${data}, kamu dapat predikat ${predicate}`);

    }
}


try{
    // checkGrades([100,78,53,82]);
    checkGrades(10,100,10,12);
}catch(e){
    console.error(e)
} finally {
    console.log("Cek nilai selesaii")
}
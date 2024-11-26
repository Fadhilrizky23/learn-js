// Rest Operator 
// Bisa menjadi solusi untuk function yang lebih dari 2 paramter 


{
    // Rest 

    function test (...param){

        console.log(param); // jadinya Array 
    
        param.forEach((value)=>{
            console.log(value); 
        }) 
    }
    
    
    test(1,2,3,4,5,6,7,8,9); 
} 

{
    function test(number,...param){
        console.log(number);
        console.log(param);
    } 

    test(12,3,4,5,6,7,8,9);
}  

{
    // Karena rest itu returnnya Array kita bisa pake method di array 

    function test(...param){
        let total = 0; 
        for(let i = 0; i < param.length;i++){
            
            total += param[i];           
        }

        return total;
    } 

    console.log(test(1,2,3,4,5,6,7,8,9,10));
} 

{
    // Destruct 

   const favorites = ['Nasi Goreng', 'Mie Goreng', 'Ayam Bakar', 'Tahu', 'Tempe']; 

   let [first,second,...third] = favorites; 

   console.log(first)
   console.log(second)
   console.log(third)
}




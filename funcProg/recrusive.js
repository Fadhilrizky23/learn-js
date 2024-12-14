{ 
    // tanpa Recrusive 

    function generateArray(n){
        const result =[]; 
    
        for(let counter = 0;counter <= n;counter++){
            result.push(counter);
        }
    
        return result
    } 
    
    
    console.log(generateArray(10)); 
}


{
    // Dengan Recursive  

    function recArray(n){
        if(n<0){
            return []
        } 

        return[...recArray(n-1),n]
    }
} 

console.log(recArray(5)) 


// recArray(5)
// = [...recArray(4), 5]
// = [...[...recArray(3), 4], 5]
// = [...[...[ ...recArray(2), 3], 4], 5]
// = [...[...[...[recArray(1), 2], 3], 4], 5]
// = [...[...[...[...[recArray(0), 1], 2], 3], 4], 5]
// = [...[...[...[...[[], 1], 2], 3], 4], 5]
// = [0, 1, 2, 3, 4, 5] 


// Dia harus di kasih spread operator ... karena kalo enggak dia jadi 
// [ [ [ [Array], 3 ], 4 ], 5 ] 



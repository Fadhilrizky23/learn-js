const sampleProducts = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
    { id: 2, name: 'Phone', category: 'Electronics', price: 500 },
    { id: 3, name: 'Shirt', category: 'Apparel', price: 50 },
    { id: 4, name: 'Shoes', category: 'Apparel', price: 80 },
    { id: 5, name: 'Watch', category: 'Accessories', price: 200 },
  ];
  
  function getProductsByCategory(products, category) {
    /**
     * TODO:
     * Gunakan metode array immutable untuk mengembalikan array produk yang termasuk dalam kategori yang diberikan.
     */

    return products.filter((product) => {
        // Kalo mau pake{ } harus pake return
        return product.category === category
    });
    
  }
  
  // function findProductById(products, id) {
  //   /**
  //    * TODO:
  //    * Gunakan metode array immutable untuk mengembalikan produk dengan ID yang cocok.
  //    */ 

  //   // Pake Find biar dia returnnya 1 object aja tanpa berbentu array lagi 
  //   return products.find((product) => product.id === id);

  // } 

  // Bisa pake Filter 
  function findProductById(products, id) {
    /**
     * TODO:
     * Gunakan metode array immutable untuk mengembalikan produk dengan ID yang cocok.
     */ 

    return products.filter((product)=>{
      return (product.id === id);
      // kasih index nya dia luar filter karena dia kan by ID jadi pasti uniqe cuman balikin 1 nilai aja di arraynya 
    })[0]

  } 

  
  function calculateTotalPrice(products) {
    /**
     * TODO:
     * Gunakan metode array immutable untuk menghitung total harga semua produk.
     */
    return products.reduce((total,value)=>{
        return total += value.price;
    },0)
  }
  



        // Object Literal Return
        // const emptyObjects = products.map(product => ({}));
        // console.log(emptyObjects);
        // Output: [ {}, {} ]

        // Function Body (No Return)
        // const undefinedValues = products.map((product) => {});
        // console.log(undefinedValues);
        // Output: [ undefined, undefined ]


  function applyDiscount(products, discount) {
    /**
     * TODO:
     * Gunakan metode array immutable untuk mengembalikan array baru,
     * di mana setiap produk memiliki harga yang sudah dikurangi dengan diskon yang diberikan.
     */ 

    return products.map((product)=>({
        ...product,
        price : product.price * (100 - discount) / 100
    }))
  }
  
  console.log(getProductsByCategory(sampleProducts, 'Electronics')); // Should return products with id 1 and 2
  console.log(calculateTotalPrice(sampleProducts)); // Should return 1830
  console.log(applyDiscount(sampleProducts, 10)); // Should return products with prices reduced by 10%
  console.log(findProductById(sampleProducts, 3)); // Should return the product with id 3


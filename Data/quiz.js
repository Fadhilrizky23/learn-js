const employees = [
    {
      name: 'Fulan',
      email: 'fulan@dicoding.com',
      joinYear: 2020,
    },
  ]; 

 
  function addEmployee(name, email, joinYear) {
    /**
     * @TODO
     * lengkapi fungsi ini agar dapat menambahkan objek employee baru
     * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
     */ 

    employees.push({
        name : name,email : email,joinYear : joinYear,});    
  } 

  addEmployee("fadhil","fadhilrizky231@gmail.com","2024");
  console.log(employees)


  
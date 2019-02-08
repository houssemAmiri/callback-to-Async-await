
async function displayMovies(){

    const customer = await getCustomer(1);
    console.log('customer',customer);
    if(customer.isGold){
      const topMovies = await getTopMovies();
      console.log('top movies', topMovies);
      await sendEmail(customer.email, topMovies);
      console.log('email sent');
    }

}
displayMovies();

function getCustomer(id) {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve({ 
        id: 1, 
        name: 'Mosh Hamedani', 
        isGold: true, 
        email: 'email' 
      });
    }, 4000);  
  })
}
function getTopMovies() {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve(['movie1', 'movie2']);
    }, 4000);
  }) 
}
function sendEmail(email, movies) {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve()
    }, 4000);
  })
}
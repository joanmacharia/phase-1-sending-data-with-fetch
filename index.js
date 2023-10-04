// Add your code here

const info = {
    name:"Steve",
    email:"steve@steve.com",
}

function submitData() {
    fetch('http://localhost:3000/users',{
        method: 'POST',
        headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
        body: JSON.stringify(info)
    })

.then((res) => res.json())
.then((data) =>  {
    const id = data.id;
    const idElement = document.createElement("p");
    idElement.textContent = `New ID: ${id}`;
    document.body.appendChild(idElement);
    return data; 
  })
  .catch((error) => {
    const errorElement = document.createElement("p");
    errorElement.textContent = `Error: ${error.message}`;
    document.body.appendChild(errorElement);
    throw error;
  });

}
const userName = "Lucky Pendo";
const userEmail = "luckypendo@gmail.com";

submitData(userName, userEmail)
.then(response => console.log(response))
.catch(error =>console.error(error))


    

  
// Add your code here
const email = 'steve@steve.com'

function submitData(name, email) {
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
        "name": name,
        "email": email
     })
    
  };
  
  return fetch("http://localhost:3000/users", configurationObject)
    .then((response)=> response.json())
    .then(body => document.body.append(body.id))
    .catch(response => document.body.append( `
    <p> ${response.code} </p>
    <p> ${response.message} </p>
    `))
}


submitData(name,email)


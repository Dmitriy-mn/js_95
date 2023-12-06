import axios from "axios";
const BASE_URL = "http://localhost:3000/todos"




// ------------------- GET

// fetch(BASE_URL)
//     .then(response => {
//         if(!response.ok) {
//             throw new Error("Error!!!!")
//         }
//         return response.json()
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
//     .finally(() => console.log("finally"))




// ----------- axios (params)

// axios(BASE_URL, {
//     headers: {
//         "x-api-key": "lalala",
//     },
//     params: {
//         page: "24"
//     }
// })
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error.message))
//     .finally(() => console.log("finally"))








// -------------- POST

// fetch(BASE_URL, {
//     method: "POST",
//     headers: {
//         "Content-type": "application/json"
//     },
//     body: JSON.stringify({title: "Купити шоколад", completed: false})
// })
//     .then(response => {
//         if(!response.ok) {
//             throw new Error("Error!!!!")
//         }
//         return response.json()
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log(error))






// ------------- Axios


// axios.post(BASE_URL, {
//     title: "Купити шоколад", 
//     completed: false
// })
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error.message))



// axios({
//     url: BASE_URL,
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     data: {
//         title: "Купити шоколад", 
//         completed: false
//     }
// })
//     .then(data => console.log(data.data))
//     .catch(error => console.log(error.message))
//     .finally(() => console.log("finally"))







// ----------------- PUT, PATCH


// fetch(`${BASE_URL}/4`, {
//     method: "PUT",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ completed: false })
// })
//     .then(response => {
//         if(!response.ok) {
//             throw new Error("Error!!!!!")
//         }
//         return response.json()
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log(error))







// ------------------ Axios

// axios.put(`${BASE_URL}/4`, {
//     completed: true,
// })
//     .then(resposne => console.log(resposne.data))
//     .catch(error => console.log(error))


// axios({
//     url: `${BASE_URL}/4`,
//     method: "PATCH",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     data: {
//         completed: true
//     }
// })
//     .then(data => console.log(data.data))
//     .catch(error => console.log(error.message))







// ------------------ DELETE

// fetch(`${BASE_URL}/4`, {
//     method: "DELETE"
// })
//     .then(response => {
//         if(!response.ok) {
//             throw new Error("Error!!!!!!")
//         }
//         return response.json()
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
    




//  ------------------- Axios


// axios.delete(`${BASE_URL}/4`)
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error.message))




// axios(`${BASE_URL}/4`, {
//     method: "DELETE"
// })
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))











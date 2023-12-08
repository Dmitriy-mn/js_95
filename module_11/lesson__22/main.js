//  ------------------------ AXIOS async await
// import axios from "axios";
// const BASE_URL = "http://localhost:3000/todos";

// async function foo() {
//     const data = await axios(BASE_URL)
//     console.log(data);
// }
// foo()

// axios(BASE_URL)
//     .then(data => console.log(data))


// 1
// async function foo() {
//     try {
//         const data = await axios(BASE_URL)
//         console.log(data.data);
//     } catch(error) {
//         console.log(error.message);
//     }
//     console.log("end");
// }

// foo()



// 2
// async function foo() {
//     const response = await axios(BASE_URL)
//     return response.data
// }

// foo()
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))


// 3
// async function foo() {
//     const response = await axios(BASE_URL)
//     return response.data
// }

// async function result() {
//     try {
//         const data = await foo()
//         console.log(data);
//     } catch(error) {
//         console.log(error.message);
//     }
// }

// result()



// async function getTodos() {

//     const todo1 = await axios(`${BASE_URL}/1`)
//     const todo2 = await axios(`${BASE_URL}/2`)
//     const todo3 = await axios(`${BASE_URL}/3`)

//     return [todo1.data, todo2.data, todo3.data]
// }

// getTodos()
//     .then(data => console.log(data))
//     .catch(error => console.log(error))



// async function getTodos() {
//     const todosArr = [1, 2, 3];

//     const promRes = todosArr.map(async (item) => {
//         const result = await axios(`${BASE_URL}/${item}`)
//         return result.data;
//     })
    
//     const result = await Promise.all(promRes)
//     return result
// }

// getTodos()
//     .then(data => console.log(data))
//     .catch(error => console.log(error))




// async function getTodos() {
//     const todosArr = [1, 2, 3];

//     try {
//         const promRes = todosArr.map(async (item) => {
//             const result = await axios(`${BASE_URL}/${item}`)
//             return result.data;
//         })
        
//         const result = await Promise.all(promRes)
//         console.log(result);
//     } catch(error) {
//         console.log(error.message);
//     }
// }

// getTodos()


// async function getTodos() {
//     const todosArr = [1, 2, 3];

//     const promRes = todosArr.map(async (item) => {
//         const result = await axios(`${BASE_URL}/${item}`)
//         return result.data;
//     })
    
//     const result = await Promise.all(promRes)
//     return result
// }

// async function foo() {
//     try {
//         const data = await getTodos()
//         console.log(data);
//     } catch(error) {
//         console.log(error.message);
//     }
//     console.log("end");
// }
// foo()





import axios from "axios";
const BASE_URL = "http://localhost:3000/todos";

const container = document.querySelector(".list");
const form = document.querySelector(".todo__form");

form.addEventListener("submit", handleSubmit)
container.addEventListener("click", handleUpdate);
container.addEventListener("click", handleDelete);

async function serviceTodos(options) {
    const response = await axios(options)
    return response.data
}

function createMarkup(arr) {
    return arr.map(({ id, title, completed }) => `
        <li class="list__item" data-id="${id}">
            <input type="checkbox" class="list__checkbox" ${completed ? "checked" : ''}/>
            <h2 class="list__title">${title}</h2>
            <button class="list__btn">x</button>
        </li>
    `).join("")
}

async function render() {
    try {
        const data = await serviceTodos({
            url: BASE_URL
        })
        container.insertAdjacentHTML("beforeend", createMarkup(data))
    } catch(error) {
        console.log(error.message);
    }
}

render()

async function handleSubmit(event) {
    event.preventDefault()

    // const formData = new FormData(form)
    // const obj = {}
    // for(const key of formData.keys()) {
    //     // console.log("key", key);
    //     // console.log("value", formData.get(key));
    //     obj[key] = formData.get(key)
    // }
    // console.log(obj);
    // const object = Object.fromEntries(formData.entries())
    // console.log(object);

    const { todo } = event.currentTarget.elements

    try {
        const data = await serviceTodos({
            url: BASE_URL,
            method: "POST",
            data: {
                title: todo.value,
                completed: false
            }
        })
        container.insertAdjacentHTML("beforeend", createMarkup([data]))
        // form.reset()
    } catch(error) {
        console.log(error);
    } finally {
        console.log("finally");
        form.reset()
    }
}


async function handleUpdate(event) {

    if(!event.target.classList.contains('list__checkbox')) {
        return
    }
    event.preventDefault()
    
    const parent = event.target.closest(".list__item");
    const id = parent.dataset.id;
    
    try {
        const data = await serviceTodos({
            method: "PATCH",
            url: `${BASE_URL}/${id}`,
            data: {
                completed: event.target.checked
            }
        })
        event.target.checked = data.completed;
    } catch(error) {
        console.log(error.message);
    }
}

async function handleDelete(event) {
    if(!event.target.classList.contains("list__btn")) {
        return;
    }

    const parent = event.target.closest(".list__item");
    const id = parent.dataset.id;

    try {
        await serviceTodos({
            url: `${BASE_URL}/${id}`,
            method: "DELETE"
        })
        parent.remove()
    } catch(error) {
        console.log(error.message);
    }
}
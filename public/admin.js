
// Your Code Here

// Your Code Here
async function main() {

    let response = await fetch('http://localhost:3001/listBooks')
         
         
    let books = await response.json()

    books.forEach(renderBook)

}

let updatedBook = await response.json();


function renderBook(book) {
    let root = document.querySelector('#root')

    let li = document.createElement('li')
    li.textContent = book.title

    let quantityInput = document.createElement('input')
    quantityInput.value = book.quantity

    let saveButton = document.createElement('button')
    saveButton.textContent = 'Save'

    saveButton.addEventListener('click', () => {
     fetch('http://localhost:3001/updatedBook',{
        method: 'patch',
        headers: {
            'Content-Type': 'application/json'
        },
     
        body: JSON.stringify({
            id: book.id,
            quantity: quantityInput.value
        })
    })
    })
    li.append(quantityInput, saveButton)

    root.append(li)
}

main();


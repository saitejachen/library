let myLibrary = [];

function Book(author, title, pages, readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

addBookToLibrary = (book) => {
    let newDiv = document.createElement('div');
    let table = document.getElementById('table');
    let newRow = document.createElement('tr');
    let delBtn = document.createElement('button');
    delBtn.innerHTML = "DELETE";
    delBtn.className = 'delete';
    for (let prop in book){
        let newEntry = document.createElement('td');
        newEntry.innerText = book[prop];
        newRow.appendChild(newEntry);
        newDiv.appendChild(newRow);
    }
    newRow.appendChild(delBtn);
    table.appendChild(newDiv);
    delBtn.addEventListener('click',function(){
        delBtn.parentNode.parentNode.removeChild(delBtn.parentNode);
    })
}

getBook = () => {
    let author = document.getElementById('author').value;
    let title = document.getElementById('title').value;
    let pages = document.getElementById('pages').value;
    let readSelect = document.getElementById('read-select');
    let readStatus = readSelect.options[readSelect.selectedIndex].value;

    let newBook = new Book(author,title,pages,readStatus);

    return newBook;

}

let button = document.getElementById('submit');

button.addEventListener('click', function(){
    let newBook = getBook();
    addBookToLibrary(newBook);

})

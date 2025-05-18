
const myLibrary =[];

let newBook = document.createElement("Button")
newBook.innerHTML = "NEW BOOK"
newBook.addEventListener("click",newBookOnClick)

function Book(name,author){
this.name = name;
this.author = author

this.read =0
this.id = crypto.randomUUID();

}

function addBookToLibrary(name,author){
myLibrary.push(new Book(name, author))


}


function displayBooks(){
    clearTable()
    let table = document.getElementById("mainTable")

    for(i=0; i<myLibrary.length; i++){
       let row = document.createElement("tr")

       let title = document.createElement("td")
       let author = document.createElement("td")
       let read = document.createElement("td")
       let removeBox = document.createElement("td")
       let removeButton = document.createElement("button")
       removeButton.id = myLibrary[i].id
        removeButton.innerHTML = "REMOVE"
        

        removeButton.addEventListener("click",removeBook)
        

        let readBox = document.createElement("td")
        let readButton = document.createElement("button")
        readButton.id = myLibrary[i].id
        readButton.innerHTML = "BOOK FINISHED"
        readButton.addEventListener("click",readStatus)


       removeBox.appendChild(removeButton)
       readBox.appendChild(readButton)
        title.innerHTML = myLibrary[i].name
        author.innerHTML = myLibrary[i].author

        if(myLibrary[i].read == 0){
            read.innerHTML = "Not Read"
        }else{
            read.innerHTML = "Read"
        }
        

       row.appendChild(title)
       row.appendChild(author)
       row.appendChild(read)
       row.appendChild(readBox)
       row.appendChild(removeBox)


       table.appendChild(row)
       
    }





}

function readStatus(event){
    
for(i=0;i<myLibrary.length;i++){
        if(this.id==myLibrary[i].id){
            
           if(myLibrary[i].read == 0){
            myLibrary[i].read = 1
           }else{
            myLibrary[i].read = 0
           }
            
            
        }
    }
    displayBooks();
}

function removeBook(event){
    index = 500;
    
    
    for(i=0;i<myLibrary.length;i++){
        if(this.id==myLibrary[i].id){
            
            index = i
            
        }
    }
    
    for(i=index; i<myLibrary.length; i++){
        myLibrary[i] = myLibrary[i+1]
    }
    myLibrary.pop();

    displayBooks()
}

function newBookOnClick(){
    clearForm();
    let box = document.getElementById("formContainer")
    

    let form = document.createElement("form")

    let nameInput = document.createElement("input")

    nameInput.id = "nameInput"
    let authorInput = document.createElement("input")
    authorInput.id = "authorInput"
    let submitButton = document.createElement("button")
    submitButton.innerHTML = "SUBMIT"

    submitButton.addEventListener("click",submitOnClick)

    form.appendChild(nameInput)
    form.appendChild(authorInput)
    form.appendChild(submitButton)

    box.appendChild(form)


}
function clearForm(){
let box = document.getElementById("formContainer")
box.innerHTML =""
}

function submitOnClick(event){
event.preventDefault()

nameInput = document.getElementById("nameInput")


authorInput = document.getElementById("authorInput")

if(nameInput.value != "" && authorInput.value != ""){
    addBookToLibrary(nameInput.value, authorInput.value)
}else{
    console.log(nameInput.value)
}
displayBooks()
clearForm()

}

function clearTable(){
    let table = document.getElementById("mainTable")
    table.innerHTML = ""
}





document.body.appendChild(newBook)

addBookToLibrary("Book1", "Me")
addBookToLibrary("Book2", "you")


displayBooks();
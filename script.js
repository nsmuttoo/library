
const myLibrary =[];

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
    let table = document.getElementById("mainTable")

    for(i=0; i<myLibrary.length; i++){
       let row = document.createElement("tr")

       let title = document.createElement("td")
       let author = document.createElement("td")
       let read = document.createElement("td")
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

       table.appendChild(row)
       
    }



}

addBookToLibrary("Book1", "Me")
addBookToLibrary("Book2", "you")

displayBooks();
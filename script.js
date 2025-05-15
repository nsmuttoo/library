
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



// selecting pop and button
let popoverlay=document.querySelector(".popup-overlay")
let popbox=document.querySelector(".popup-box")
let addbutton=document.getElementById("plus")

addbutton.addEventListener("click",function(){
    popoverlay.style.display="block";
    popbox.style.display="block";
})

let cancelBook=document.getElementById("cancelBook")
    cancelBook.addEventListener("click",function(event){
    event.preventDefault()
    popoverlay.style.display="none";
    popbox.style.display="none";
})

let outer=document.querySelector(".outer")
let addBook=document.getElementById("addBook")
let booktitle=document.getElementById("book-title")
let bookauthor=document.getElementById("book-author")
let booknotes=document.getElementById("book-notes")

addBook.addEventListener("click",function(event){
    event.preventDefault()
    let div=document.createElement("div")
    div.setAttribute("class","inner")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h4>${bookauthor.value}</h4>
    <p>${booknotes.value}</p>
    <button class="btn" onclick="deleteItem(event)">Delete</button>`
    outer.append(div)
    popoverlay.style.display="none";
    popbox.style.display="none";
}) 
 function deleteItem(event){
    event.target.parentElement.remove()
 }
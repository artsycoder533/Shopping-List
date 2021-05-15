var button = document.getElementById("add");
var input = document.getElementById("input");
var ul = document.querySelector("ul");
var remove = document.getElementsByClassName("delete");
//var li = document.querySelector("li").classList


function inputLength() {
	return input.value.length;
}

function createListElement() {

  //check list size, if list < 10 alert displays saying you have to delete items.
    //create new list item element
    var li = document.createElement("li");
    //create new button element
    var deleteButton = document.createElement("BUTTON");
    //change the text of the new button to display text "delete"
    deleteButton.innerHTML = "Delete";
    //add list item to list class
    li.classList.add("list");
    //create a new text node with the value of user input and add it to a new list item at the end
    li.appendChild(document.createTextNode(input.value));
    //add button to button class
    deleteButton.classList.add("delete");
    //add a button beside the text in the list item
    li.appendChild(deleteButton);
    //add the list item to the unordered list
    ul.appendChild(li);
    //clear the user input in the text bo
    input.value = "";

}

function addListAfterClick() {
  //if the user adds input
	if (inputLength() > 0) {
    //create new list item by calling createListElement function
            createListElement();
    }
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function removeItem(x){
  if(x.target.className === "delete"){
    x.target.parentElement.remove();
  }
}

function crossOut(y){
  if(y.target.tagName === "LI"){
    //var p = y.currentTarget;
    y.target.classList.toggle("done");
  }
}

function checkClickedElement(event) {
  crossOut(event);
  removeItem(event);
  
}

ul.addEventListener("click", checkClickedElement);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
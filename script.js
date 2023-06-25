const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// if the input box value is empty then it should give alert and once you add something it goes in the else condition with the tag name li
function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");

    // text added in input feild = what ever text we will add in input box that will be added in this li
    li.innerHTML = inputBox.value;

    // li should be displayed under list container variable
    listContainer.appendChild(li);
    // to display cross icon after each task
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    //displaying the span
    li.appendChild(span);
  }
  inputBox.value = ""; //after adding the text the box be again empty
  saveData();//when any task will be added the save data fun will be called andit will sav the data in the browser
}

//javascript for click function

// when ever we will click on the container where our task is written:
// 1. first it will check where we have clicked
// **if we have clicked li , it should add the checked classname
// 2. and if checked class name is already there then we will remove them
// 3.if we have clickedon span then it will remove the parent element

listContainer.addEventListener("click",function(e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    }
     else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData(){
    // what ever cntent is there in the list container it will be stored in our browser with the name of data and we can display it using the getitem data 
    localStorage.setItem("data", listContainer.innerHTML);
}

//to display the data ever we open the site again
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
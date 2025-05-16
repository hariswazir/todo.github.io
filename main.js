const input = document.querySelector(".input");
const addBtn = document.querySelector(".add-btn");
const list = document.querySelector(".list");

let inputData = "";

addBtn.addEventListener("click", () => {
  // here trim() function removes extra spaces only if theere are extra spaces.
  if (inputData.trim() == "") {
    return;
  }
  renderData();
  //   console.log("the add btn is clicked");
});
input.addEventListener("input", (event) => {
  //   console.log("the event target data is: ", event);
  inputData = event.target.value;
  //   console.log("the input data is: ", inputData);
});

// here trigger/cal the same renderData function by using keypress event
// keypress is a type of event where it will trigger a function everytime when I press any button inside input field
// now our need is to renderData when user press the "Enter" key.
// for for this we will add a condition where we will check if the press key is "enter" than execute renderData
input.addEventListener("keypress", (event) => {
  console.log("the event key pressed is: ", event.key);
  if (event.key === "Enter") {
    if (inputData.trim() == "") {
      return;
    }
    renderData();
  }
});

function renderData() {
  // create li element
  let li = document.createElement("li");
  // create span element for displaying input data
  let text = document.createElement("span");
  text.classList.add("list-text");
  text.textContent = inputData;
  // create another span element for delete button
  let deleteBtn = document.createElement("span");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", function () {
    this.parentElement.remove();
  });

  // first add text span element into li
  li.appendChild(text);
  // second add delete button
  li.appendChild(deleteBtn);

  // for displaying li into html we need to put this li in html,
  // here we will add this li into our ul which is List here we willa add it.

  list.appendChild(li);

  inputData = "";
  input.value = "";
}

var taskInput = document.getElementById("toDoInput");
var addBtn = document.getElementById("btnAdd");
// var listTo = document.getElementById("listTo");
// var deleteBtn = document.getElementsByClassName("delete");
// function drumAlert(value){
//     var submitValue = taskInput.value;
//     var li = document.createElement("li");
//     var inputValue = document.getElementById("taskInput").value;
//     var t = document.createTextNode(inputValue);
//     li.appendChild(t);
//     alert(submitValue);
// }
// addBtn.addEventListener("click",drumAlert)
// function drumAlert(){
//     console.log('drum');
//     var li = document.createElement("li");
//     var inputValue = taskInput.value;
//     var t = document.createTextNode(inputValue);
//     li.appendChild(t);
//     document.getElementById("listTo").appendChild(li);
//     document.getElementById("taskInput").value = "";
// }
// addBtn.addEventListener("click",drumAlert)
// function drumAlert(_value){
//     var submitValue = taskInput.value;
//     alert(submitValue);
// }
// addBtn.addEventListener("click",drumAlert)
// Create a "close" button and append it to each list item
// var myNodelist = document.getElementsByTagName("li");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }
// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }
// Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'li') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);
// Create a new list item when clicking on the "Add" button
// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("toDoInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     document.getElementById("listTo").appendChild(li);
//   }
//   document.getElementById("toDoInput").value = "";
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);
//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }
const newEvent = ()=>{
    var listTo = document.getElementById('listTo');
    var newList = document.createElement('li');
    const btn = document.createElement('button');
    btn.innerHTML = '刪除';
    var toDo = taskInput.value;
    newList.innerText = toDo;
    newList.appendChild(btn);
    listTo.appendChild(newList);
};
addBtn.addEventListener("click", newEvent);

//# sourceMappingURL=index.d644d586.js.map

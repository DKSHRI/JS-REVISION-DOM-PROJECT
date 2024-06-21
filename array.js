const todoList=[
   
];
reuse();
function reuse() {
    let todoListHtml=``;
for (let index = 0; index < todoList.length; index++) {
    const todoOject = todoList[index];
    const name= todoOject.name;
    const duedate= todoOject.duedate;
    const html=`
    <div id="para">
    <div class"namet">${name}</div>
    <div class"datet">  ${duedate}</div>
    <div class"deletet"><button id="delete" onclick="todoList.splice (${index},1);  reuse()">Delete</button>
    </div>
</div>`
    todoListHtml+=html;
}
console.log(todoListHtml);
document.querySelector('.jstodp').innerHTML=todoListHtml;
}
function addtodo(){
const inputElement=document.querySelector('.js-name-input');
const name =inputElement.value;
const dateinputelement =document.querySelector('.js-due-date-input');
const duedate=dateinputelement.value;
console.log(name);
todoList.push({name:name,
    duedate:duedate
});
console.log(todoList); 
inputElement.value='';
reuse();
}


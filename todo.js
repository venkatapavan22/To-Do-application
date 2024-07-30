const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value===""){
        alert("you must write something")
    }
    else{
        let li=document.createElement('li')
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li)
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    inputBox.value=""
    saveData()
}

listContainer.addEventListener("click",function(r){
    if(r.target.tagName==="LI"){
        r.target.classList.toggle("checked");
        saveData()
    }
    else if(r.target.tagName==="SPAN"){
        r.target.parentElement.remove()
        saveData()
    }
},false)

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data")
}
showTask()
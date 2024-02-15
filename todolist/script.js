var inputtxt =document.getElementById('input-txt')
var listcontainer =document.getElementById('list-container')
var container = document.querySelector('.container');

function AddTask(){
     if(inputtxt.value==''){
        alert("Please enter a task before adding")
     }
     else{
        var li = document.createElement("li")
        li.innerHTML=inputtxt.value
        listcontainer.appendChild(li)
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)

     }
     inputtxt.value=""
     saveTask()
     adjustContainerHeight();
}  

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked")
        saveTask()
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove()
        saveTask()


    }

},false)

function saveTask(){
    localStorage.setItem("data",listcontainer.innerHTML)
}

function displayTask(){
    listcontainer.innerHTML = localStorage.getItem("data")
    
}
displayTask()

function adjustContainerHeight() {
    var containerHeight = listcontainer.offsetHeight + 710; // Adjust this value based on your design
    container.style.minHeight = containerHeight + "px";
}



adjustContainerHeight();
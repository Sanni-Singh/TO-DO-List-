const input = document.getElementById("input");
const btn = document.getElementById("button");
const lists = document.getElementById("list");

btn.addEventListener('click',()=>{
    if(input.value === "") {
        alert("Kuch Likh to lo Bhaiii!!!")
    }
    else {
        let list = document.createElement('li')
        list.innerText = input.value;
        lists.appendChild(list);

        let span = document.createElement('span');
        span.innerText = "\u00d7";
        list.appendChild(span)
    }
    input.value = "";
});

lists.addEventListener('click',(e)=>{
   if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        console.log("hello");
    }
},false);

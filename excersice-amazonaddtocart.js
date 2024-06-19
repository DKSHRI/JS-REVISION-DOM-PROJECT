
  document.querySelector("#button-jsa").innerHTML="Add to Cart";

 document.querySelector("#button-jsr").innerHTML="Remove Item";
 let spanjs = document.querySelector("#spancss");
 let count = 0;
 spanjs.innerHTML = count;
 spanjs.innerHTML=`${0}`;
 function buttonnclickedA() {
   
    count++;
    spanjs.innerHTML = count;
    if (count === 1) {
        spanjs.style.display = "inline-block"; 
    }
 }
 function buttonnclickedr() {
    if (count > 0) {
        count--;
        spanjs.innerHTML = count;

        if (count === 0) {
            spanjs.style.display = "none"; 
        }
    }
   
 }



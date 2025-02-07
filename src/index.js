let accordian = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    if (this.childNodes[1].classList.contains("fa-plus")) {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
    } else {
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

let getstart=document.querySelectorAll(".primary__button");
getstart[0].addEventListener("click",()=>{
  if(document.getElementsByClassName("email__input")[0].value==="user@gmail.com"){
     window.open("index.html");
  }else{
    alert("Wrong email");
  }
});
getstart[1].addEventListener("click",()=>{
  if(document.getElementsByClassName("email__input")[1].value==="user@gmail.com"){
     window.open("index.html");
  }else{
    alert("Wrong email");
  }
});
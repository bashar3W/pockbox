// FAQ Functionality
const plusIcon = document.querySelectorAll(".faq")
plusIcon.forEach((an)=>{
    an.addEventListener("click",()=>{
        console.log("clicked")
        an.classList.toggle("active")
    })
})
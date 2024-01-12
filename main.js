//Start Modal
const modal=document.querySelector(".modal-container");
const openModal=document.getElementById("openBtn");
const closeModal=document.querySelector(".closeBtn");

openModal.addEventListener("click" , ()=>{
    modal.style.display="block"
})
closeModal.addEventListener("click" , ()=>{
    modal.style.display="none"
})
window.addEventListener("click",(e)=>{
    if(e.target===modal){
        modal.style.display="none"
    }
})
//End Modal


//Start Accordion
const accordionContent=document.querySelectorAll(".accordion-content");
accordionContent.forEach((item,index)=>{
    let header=item.querySelector(".accordion-header");
    header.addEventListener("click",()=>{
        item.classList.toggle("open");
        let description=item.querySelector(".description");
        if(item.classList.contains("open")){
            description.style.height=`${description.scrollHeight}px`;
            item.querySelector("i").classList.replace("fa-plus","fa-minus");
        }else{
            description.style.height="0px";
            item.querySelector("i").classList.replace("fa-minus","fa-plus")
        }
        removeOpen(index);
    })
})
function removeOpen(index1){
    accordionContent.forEach((item2,index2)=>{
        if(index1 != index2){
            item2.classList.remove("open");
            let des=item2.querySelector(".description");
            des.style.height="0px";
            item2.querySelector("i").classList.replace("fa-minus","fa-plus");
        }
    })
}
//End Accordion

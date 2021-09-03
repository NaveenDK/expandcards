const panels= document.querySelectorAll('.panel')

let BtnEle = document.querySelector(".Btn");


var  mouseover  = true ;



 
function removeActiveClassesOnHover(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
    }
    

function removeActiveClassesOnClick(){
panels.forEach(panel=>{
    panel.classList.remove('active')
})
}


BtnEle.addEventListener("click", () => {
    mouseover = !mouseover;
    console.log("i toggled "+ mouseover);
 });
 if(mouseover= false){
    console.log("effect event is onclick")
    panels.forEach((panel)=>{
        console.log(effectEvent)
        console.log(panel)
       
            panel.addEventListener('click',()=>{
                removeActiveClassesOnClick()
               panel.classList.add('active')
           })
        
    })


}

 
if(mouseover=true){
    console.log("effect event is onhover")
    panels.forEach((panel)=>{
        
        //console.log(panel)
       
            panel.addEventListener('mouseover',()=>{
                removeActiveClassesOnHover()
               panel.classList.add('active')
           })
    })

}
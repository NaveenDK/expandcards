const panels= document.querySelectorAll('.panel')


 
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


    panels.forEach((panel)=>{
         
    
            panel.addEventListener('click',()=>{
                removeActiveClassesOnClick()
               panel.classList.add('active')
           })
        
    })



 

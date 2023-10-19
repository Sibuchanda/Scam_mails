




function Myfunction(){
    let emailVal=document.getElementById("email").value; 

    let formatVal=document.getElementById("formatVal");  
    let scamVal=document.getElementById("scamVal");  

    const obj1 = {
        email: emailVal
    };
    
    // console.log(emailVal);

        const request = fetch('https://scam-emailapi.vercel.app/api', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(obj1).toString()
            })
            .then((data) => data.json());
            // .then((data) => obj2=data)

        request.then((data) => {
            if(data.ok==true) {
                formatVal.innerHTML=`Valid mail address format`;
                document.getElementById("format").style.backgroundColor = "#4CAF50";
                
            } 
            else if(data.ok==false){
                formatVal.innerHTML="Invalid mail address format!";
                document.getElementById("format").style.backgroundColor = "#fd4141b0";
            } 

            if(data.found==true) {
                scamVal.innerHTML="Entered mail address is scammed!!!";
                document.getElementById("scam").style.backgroundColor = "#fd4141b0";
                
            } else if (data.found==false) {
                scamVal.innerHTML="Entered mail address is verified";
                document.getElementById("scam").style.backgroundColor = "#4CAF50";
            } 
            
            


        });
   
    }



 
/*=========================================== NAVBAR SCROLL  ===============================================*/



    window.addEventListener("scroll", function(){

        let header=document.querySelector("header");
        header.classList.toggle("stickyHeader",window.scrollY > 0);
        
        
        });



        


    
/*=========================================== SROLL REVEAL ANIMATION ===============================================*/
// const sr=ScrollReveal({

//     origin: 'top',
//     distance: '60px',
//     duration: 2500,
//     delay: 200,
    
//     // reset: true
    
//     })
    
//     sr.reveal(`.mailFormat, .scamFormat`)
//     sr.reveal(`.mailFormat`,{delay: 600, origin: 'bottom'})
//     sr.reveal(`.scamFormat`,{interval: 50})
//     // sr.reveal(`.collection__explore:nth-child(1)`,{origin: 'right'})
//     // sr.reveal(`.collection__explore:nth-child(2)`,{origin: 'left'})




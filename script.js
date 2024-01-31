// CATTURATO IL TOGGLE DELLA NAVBAR
let bottoneNavbar = document.querySelector('#bottonNavbar');
// CATTURA NAVBAR
let myNavbar = document.querySelector('#mynavbar')
// CATTURA LOGHI
let logo1 = document.querySelector('#logo1')
let logo2 = document.querySelector('#logo2')
// CATTURIAMO I NAV-LINK
let navLinks=document.querySelectorAll('.nav-link')



// VARIABILE D'APPOGGIO PER IL BOTTONE DELLA NAV

 let confirm = false;


bottoneNavbar.addEventListener('click', ()=>{
   
    if (confirm == false) {
        bottoneNavbar.style.transform = 'rotate(180deg)';
        confirm=true;
      
    } else {
        bottoneNavbar.style.transform = 'rotate(0deg)';
        confirm=false;
        
    }
});

// EVENTO SULLO SCROLL PER LA NAVBAR
window.addEventListener('scroll',()=>{

    if(window.scrollY > 0) {
        myNavbar.style.backgroundColor="var(--accent)"; 
        logo1.classList.add("d-none");
        logo2.classList.remove("d-none");

        navLinks.forEach((link) =>{ 
            link.classList.add('txt-secondarycust');
            link.classList.remove('txt-accent');
        });   
    }else{
        myNavbar.style.backgroundColor="transparent"; 
        logo1.classList.remove("d-none");
        logo2.classList.add("d-none");
        
        navLinks.forEach((link) =>{ 
            link.classList.add('txt-accent');
            link.classList.remove('txt-secondarycust');
        });
    }
 
});

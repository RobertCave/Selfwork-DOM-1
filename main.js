// Cattura degli elementi

//Paragrafi
let paragrafi = document.querySelectorAll('p');

//Bottoni
let btn1 = document.querySelector("#btn-uno");
let btn2 = document.querySelector("#btn-due");
let btn3 = document.querySelector("#btn-tre");

//check 
let check=false;
let visualizza = true;

// funzione genera valori randomici per i colori
function valoreRandom() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;

}

// Cambia Colore
btn1.addEventListener("click", ()=> {

    paragrafi.forEach( (p)=> {
        p.style.color = valoreRandom();
    })

})

/// Testo in grassetto
btn2.addEventListener("click", ()=> {
    

        if (check == true) {

            paragrafi.forEach( (p)=> { 
                p.style.fontWeight = 'normal'; 
                check = false;
            } )

        } else {
            paragrafi.forEach( (p)=> {
                p.style.fontWeight = 'bold';
                check = true;
                }
            )}
        
  

});

// Nascondi/visualizza
btn3.addEventListener("click", ()=> {

    if (visualizza == true) {

        paragrafi.forEach( (p)=> {
            p.style.display = 'none';
            visualizza = false;
        })
            
    } else {

        paragrafi.forEach( (p)=> {
            p.style.display = 'block';
            visualizza = true;
        })
        
    }




 

})
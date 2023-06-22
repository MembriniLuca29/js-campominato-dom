
const container = document.querySelector('.container');

const generate = document.getElementById("generate")

const difficult = document.getElementById("difficult")

const termine = document.getElementById("termine")

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


generate.addEventListener("click",
function tabella() {

    termine.style.display = "none";
if (difficult.value == "facile"){

    
let randomNumbers = [];

while (randomNumbers.length < 15) {
    const aNumber = randomNumber(1, 100);
    console.log(aNumber, typeof aNumber);

    if (!randomNumbers.includes(aNumber)) {
        randomNumbers.push(aNumber);
    }

    
}

console.log(randomNumbers)
    const gamecontainer = document.getElementById("container");
    gamecontainer.innerHTML = "";
    for (let numero = 1; numero <= 100; numero++) {
    
        const celle = document.createElement('div');
        celle.innerHTML = numero;
        container.append(celle);
        celle.classList.add("celle")


    
        celle.addEventListener('click', function () {
                console.log(this.innerHTML);

            let numeroSelezionato = parseInt(this.innerHTML) 
            
                
                for (var i = 0; i < randomNumbers.length; i++) {

                    if (numeroSelezionato === randomNumbers[i]) {
                      console.log("La variabile è uguale a uno dei valori dell'array.");
                      break; // Se trovi una corrispondenza, puoi uscire dal ciclo
                    }
                  }

                  console.log("mio", numeroSelezionato , randomNumbers[i])

            if(numeroSelezionato === randomNumbers[i]){
                celle.classList.add("bomb");
                termine.style.display = "flex";
            }
            else if( numeroSelezionato != randomNumbers[i]) {
                celle.classList.add("active");
            }
               
            
            
    },{once : true}
    )
    }
}

else if (difficult.value == "normale"){

    let randomNumbers = [];

while (randomNumbers.length < 15) {
    const aNumber = randomNumber(1, 81);
    console.log(aNumber, typeof aNumber);

    if (!randomNumbers.includes(aNumber)) {
        randomNumbers.push(aNumber);
    }

    
}
    console.log(randomNumbers)
    const gamecontainer = document.getElementById("container");
    gamecontainer.innerHTML = "";
    for (let numero = 1; numero <= 81; numero++) {
    
        const celle = document.createElement('div');
        celle.innerHTML = numero;
        container.append(celle);
        celle.classList.add("celle")
        celle.classList.add("normal")
     
        celle.addEventListener('click', function () {
            console.log(this.innerHTML);

        let numeroSelezionato = parseInt(this.innerHTML) 
        
            
            for (var i = 0; i < randomNumbers.length; i++) {
                if (numeroSelezionato === randomNumbers[i]) {
                  console.log("La variabile è uguale a uno dei valori dell'array.");
                  break; // Se trovi una corrispondenza, puoi uscire dal ciclo
                }
              }

              console.log("mio", numeroSelezionato , randomNumbers[i])

        if(numeroSelezionato === randomNumbers[i]){
            celle.classList.add("bomb");

        }
        else if( numeroSelezionato != randomNumbers[i]) {
            celle.classList.add("active");
        }
           
        
        
},{once : true}
    )
    }
}
else if (difficult.value == "difficile"){

    let randomNumbers = [];

while (randomNumbers.length < 15) {
    const aNumber = randomNumber(1, 49);
    console.log(aNumber, typeof aNumber);

    if (!randomNumbers.includes(aNumber)) {
        randomNumbers.push(aNumber);
    }

    
}
console.log(randomNumbers)
    const gamecontainer = document.getElementById("container");
    gamecontainer.innerHTML = "";
    for (let numero = 1; numero <= 49; numero++) {
    
        const celle = document.createElement('div');
        celle.innerHTML = numero;
        container.append(celle);
        celle.classList.add("celle")
        celle.classList.add("hard")
       
    
     
        celle.addEventListener('click', function () {
            console.log(this.innerHTML);

        let numeroSelezionato = parseInt(this.innerHTML) 
        
            
            for (var i = 0; i < randomNumbers.length; i++) {
                if (numeroSelezionato === randomNumbers[i]) {
                  console.log("La variabile è uguale a uno dei valori dell'array.");
                  break; // Se trovi una corrispondenza, puoi uscire dal ciclo
                }
              }

              console.log("mio", numeroSelezionato , randomNumbers[i])

        if(numeroSelezionato === randomNumbers[i]){
            celle.classList.add("bomb");
        }
        else if( numeroSelezionato != randomNumbers[i]) {
            celle.classList.add("active");
        }
           
        
        
},{once : true}
    )
    }
}   
}
 ,
)


// {once : true}



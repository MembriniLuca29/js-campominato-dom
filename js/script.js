
const container = document.querySelector('.container');

const generate = document.getElementById("generate")

const difficult = document.getElementById("difficult")

const x = 100;
const randomNumbers = [];

while (randomNumbers.length < 15) {
    const aNumber = randomNumber(1, x);
    console.log(aNumber, typeof aNumber);

    if (!randomNumbers.includes(aNumber)) {
        randomNumbers.push(aNumber);
    }

}
console.log(randomNumbers);
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}



generate.addEventListener("click",
function tabella() {
if (difficult.value == "facile"){
    const gamecontainer = document.getElementById("container");
    gamecontainer.innerHTML = "";
    for (let numero = 1; numero <= 100; numero++) {
    
        const celle = document.createElement('div');
        celle.innerHTML = numero;
        container.append(celle);
        celle.classList.add("celle")

        
       
       
    
        celle.addEventListener('click', function () {
                console.log(this.innerHTML);
                celle.classList.toggle("active")
            
    }
    )
    }
}

else if (difficult.value == "normale"){
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
                celle.classList.add("active")
            
                
    }
    )
    }
}
else if (difficult.value == "difficile"){
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
                celle.classList.toggle("active")
            
    }
    )
    }
}   
}
 ,
)




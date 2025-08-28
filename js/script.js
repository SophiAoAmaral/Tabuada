//seleçaõ dos elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");

const multiplicationTable = document.querySelector("#multiplcation-operations")
const multiplicationTitle = document.querySelector("#multiplication-title span")
//funçoes
const createTable = (number, multiplicatiorNumber) =>{
    multiplicationTable.innerHTML="";//zzera o conteduo 

    for( let i=1; i <= multiplicatiorNumber; i++){
        const result = number * i
       
        const template = `<div class="row">
        <div class="operation>${number} x ${i} = </div>
        <div class="result">${result}</div
        </div>`
        const parser = new DOMParser()
        const htmlTemplate = parser.parseFromString(template, "text/html")

        const row = htmlTemplate.querySelector(".row")

        multiplicationTable.appendChild(row)
    }
    multiplicationTitle.innerText = number;
}


//Eventos baseado em seleçaõ de elementos

multiplicationForm.addEventListener("submit", (e) =>{
    e.preventDefault();//esta excluindo as açoes padros 

    const multiplicationNumber = +numberInput.value;//torna o valor que vai ser recebido inteiro com esse + na frente

    const multiplicatiorNumber = +multiplicationInput.value;

    if(!multiplicationNumber || !multiplicatiorNumber) return; // esta verificando se o value de um dos dois nao existir/ser vazio ele nao vai retornar nada 
    createTable(multiplicationNumber, multiplicatiorNumber)
})
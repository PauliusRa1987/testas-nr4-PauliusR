const africa = ['Zebras', 'Liūtas',  '', 'Raganosis', '','Raganosis', 'Begemotas'];
const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//1 a. Paspaudus mygtuką kiekvienam tagui sugeneruotkite rand() atskirą skaičių nuo 1 iki 6 ir jį įrašykite į tago vidų naudojant innerText() metodą. (4 taškai)
const manoKnopke = document.querySelector('#knopke');

manoKnopke.addEventListener("click", addText);

function addText(){
    const tagas = document.querySelectorAll('.h2_tag');
    tagas.forEach(box => {
        box.innerText =  Math.floor(Math.random() * (6 - 1 + 1) + 1);;
    })
    // b. Paspaudus mygtuką skaičiai turi būti pergeneruojami iš naujo. Jeigu sugeneruoti skaičiai yra vienodi, juos nudažyti raudonai. (4 taškai)
    if(tagas[0].innerText !== tagas[1].innerText){
        tagas[0].style.color = '#000000';
        tagas[1].style.color = '#000000';
    }else{
        tagas[0].style.color = '#FA8072';
        tagas[1].style.color = '#FA8072';
    }
    
}
// 2 a. Paspaudus mygtuką, sugeneruokite rand() skaičių nuo 1 iki 10. Sugeneruotą skaičių pridėkite į masyvą, o tą masyvą atspausdinkite konsolėle. (4 taškai)

let emtptyArr = [];

const nrAntras = document.querySelector('#btn');
nrAntras.addEventListener('click', pushArr);
let counter = 0;
function pushArr() {
    const skaicius = rand(1, 10);
    emtptyArr.push(skaicius);
    console.log(emtptyArr);
// b. <h3> tage skaičiuokite ir su innerText() metodu rašykite visų sugeneruotų skaičių sumą. (4 taškai)
    const tagasH3 = document.querySelector('.h3_tag');
    counter+=skaicius;
    tagasH3.innerText=counter;
}

// 3. a. JS pagalba perskaitykite masyvą africa. (4 taškai)
africa.forEach(kintamasis =>{
    if(kintamasis.length === 0){
        console.log('Tuscias stringas!');
    }else{
        console.log(kintamasis);
    }
} )
// b. Naudodami createElement() ir kitus reikalingus metodus sukurkite kiekvienam masyvo elementui po <li> tagą su elemento stringu viduje ir juos įrašykite į <ul> tago vidų. (5 taškai)
// c. Elementus su tuščiais stringais praleiskite ir jiems <li> elementų nekurkite. (4 taškai)
const listas = document.querySelector('#listas');

    africa.forEach(element =>{
        if(element.length !==0){
            const eile = document.createElement('li');
            eile.innerText = element;
            listas.appendChild(eile);
        }
    });
//4 a. Suprogramuokite kalkuliatorių taip, kad įrašius skaičius į abu input laukelius ir paspaudus atitinkamą mygtuką su skaičiais būtų atlikta atitinkama aritmetinė operacija. (10 taškai)
// b. Jos rezultatas būtų atvaizduotas <h5> tage. (3 taškai)
// Pasirinkite patys sau patogiausius metodus tai atlikti.
const add = document.querySelector('#plius');
const remove = document.querySelector('#minus');
let firstNumber = document.querySelector('#a');
let secondNumber = document.querySelector('#b');
const resultatas = document.querySelector('#resul');
add.addEventListener('click', function(){
    firstNumber += secondNumber;
    resultatas.innerText = firstNumber;
})
remove.addEventListener('click', function(){
    firstNumber -= secondNumber;
    resultatas.innerText=firstNumber;
})


///5. a. JS pagalba perskaitykite masyvą australia ir kiekvieną masyvo elementą įrašykite į strigą su <li> tagais iš abiejų pusių, o visus gautus stringus sudėkite į vieną bendrą stringą. (8 taškai)
australia.forEach(kinta =>{   
        console.log('Penkto uzdavinio elementai: ', kinta);
} )

let stringas = '';
for (let i = 0; i < australia.length; i++) {
    if (australia[1] !== 'Dingo') {
        stringas+=`<li>${australia[i]}</li>`; 
    }else{
        stringas+=`<li style="background-color: #0000CD;">${australia[i]}</li>`;
    }
    

    } 
console.log(stringas);
//b. Tą stringą naudodami innerHTML() metodą įdėkite į <ul> tago vidų. (5 taškai)
//c. Generavimo metu “Dingo” background’ą nuspalvinkite mėlynai. (5 taškai)

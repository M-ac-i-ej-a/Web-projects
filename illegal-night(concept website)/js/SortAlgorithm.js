let Images = document.querySelectorAll(".item")
const ImagesBackup = Images
let Prices = document.querySelectorAll(".item p")
const PricesBackup = Prices
const Container = document.querySelector(".rightSecondRow")

const FromHighest = document.querySelector("#fromHighest") 
const FromLowest = document.querySelector("#fromLowest") 
const Sort = document.querySelector("#MakeThisHappendBaby") 


let which = 2;

FromHighest.addEventListener('click',() => {
    which=1
    FromHighest.style.backgroundColor="#e0e0e0"
    FromLowest.style.backgroundColor="white"
});

FromHighest.addEventListener('mouseover',() => {
    FromHighest.style.backgroundColor="#e0e0e0"
    FromHighest.addEventListener('mouseout',() => {
        if(which!=1){
            FromHighest.style.backgroundColor="white"
        }
    });
});

FromLowest.addEventListener('click',() => {
    which=0
    FromLowest.style.backgroundColor="#e0e0e0"
    FromHighest.style.backgroundColor="white"
});

FromLowest.addEventListener('mouseover',() => {
    FromLowest.style.backgroundColor="#e0e0e0"
    FromLowest.addEventListener('mouseout',() => {
        if(which!=0){
            FromLowest.style.backgroundColor="white"
        }    
    });
});



Sort.addEventListener('click',()=>{
    if(which == 1) {
        let ArrayOfPrices = [];

        for(let i = 0; i<=Prices.length-1;i++){
            let x = parseInt(Prices[i].innerText); 
            ArrayOfPrices.push(x)
        }

        ArrayOfPrices.sort((x,y) => y-x)
        
        for(let i = 0; i<=Images.length-1;i++){
            let img = Images[i]
            for(let j = 0; j<=Images.length-1;j++){
                if(img.outerHTML.includes(ArrayOfPrices[j])){
                    ArrayOfPrices[j] = img
                }
            }
        }
        for(let k = 0; k<=Images.length-1;k++){
            Container.append(ArrayOfPrices[k])
        }
    }
    else if(which == 0) {
        let ArrayOfPrices = [];

        for(let i = 0; i<=Prices.length-1;i++){
            let x = parseInt(Prices[i].innerText); 
            ArrayOfPrices.push(x)
        }
        
        ArrayOfPrices.sort((x,y) => x-y)
        
        for(let i = 0; i<=Images.length-1;i++){
            let img = Images[i]
            for(let j = 0; j<=Images.length-1;j++){
                if(img.outerHTML.includes(ArrayOfPrices[j])){
                    ArrayOfPrices[j] = img
                }
            }
        }
        for(let k = 0; k<=Images.length-1;k++){
            Container.append(ArrayOfPrices[k])
        }
    }
});

const Sort2 = document.querySelector("#MakeThisHappendBaby2")
const insertHigh = document.querySelector("#high")
const insertLow = document.querySelector("#low")


Sort2.addEventListener('click',()=>{
        let LowValue = insertLow.value
        let HighValue = insertHigh.value

        if (LowValue==0 && HighValue==0) {
            HighValue=10000
        }

        let ArrayOfPrices = [];
        let ArrayofP = []

        for(let i = 0; i<=PricesBackup.length-1;i++){
            let x = parseInt(PricesBackup[i].innerText);
            if (x >= LowValue && x <= HighValue) {  
                ArrayOfPrices.push(x)
                ArrayofP.push(PricesBackup[i])
            }
        }
        
        const error = document.querySelector(".error")
        if(ArrayOfPrices.length==0){
            error.style.display = "block"
        } else {
            error.style.display = "none"
        }

        Prices = ArrayofP

        for(let i = 0; i<=ImagesBackup.length-1;i++){
            let img = ImagesBackup[i]
            for(let j = 0; j<=ArrayOfPrices.length-1;j++){
                if(img.outerHTML.includes(ArrayOfPrices[j])){
                    ArrayOfPrices[j] = img
                }
            }
        }

        Images = ArrayOfPrices

        Container.innerHTML = "";
        console.log(ArrayOfPrices)
        for(let k = 0; k<=ArrayOfPrices.length-1;k++){
            Container.append(ArrayOfPrices[k])
        }
});
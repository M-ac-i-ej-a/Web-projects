const Clothes = document.querySelector("#clothes");
const Gaming = document.querySelector("#gaming");
const Gadget = document.querySelector("#gadget");
const Sale = document.querySelector("#sale");

const ClothesView = document.querySelector(".clothesRow");
const GamingView = document.querySelector(".gamingRow");
const GadgetView = document.querySelector(".gadgetRow");
const SaleView = document.querySelector(".saleRow");
const WhiteBox = document.querySelector(".whiteBox");


Clothes.addEventListener('mouseover', () => {
    const ClothesTab = document.querySelector(".clothesTab");
    const SaleButton = document.querySelector("#clothes");
    const Photos = document.querySelector(".twoHalfs");
    Photos.style.filter = "brightness(70%)";
    WhiteBox.style.filter = "brightness(70%)";
    ClothesTab.style.display = "block";
    SaleButton.style.borderBottom = "2px solid black";
    ClothesView.addEventListener('mouseover', () => {
        ClothesTab.style.display = "block";
        SaleButton.style.borderBottom = "2px solid black";
        Photos.style.filter = "brightness(70%)";
        WhiteBox.style.filter = "brightness(70%)";
        
    }) 
}); 

Clothes.addEventListener('mouseout', () => {
    const ClothesTab = document.querySelector(".clothesTab");
    const ClothesButton = document.querySelector("#clothes")
    const Photos = document.querySelector(".twoHalfs")
    Photos.style.background = "#f0f0f0";
    Photos.style.filter = "brightness(100%)";
    WhiteBox.style.filter = "brightness(100%)";
    ClothesButton.style.borderBottom = "2px solid transparent";
    ClothesTab.style.display = "none";
    ClothesView.addEventListener('mouseout', () => {
        ClothesTab.style.display = "none";
        ClothesButton.style.borderBottom = "2px solid transparent";
        Photos.style.background = "#f0f0f0";
        Photos.style.filter = "brightness(100%)";
        WhiteBox.style.filter = "brightness(100%)";
        
    }) 
}); 

Gaming.addEventListener('mouseover', () => {
    const GamingTab = document.querySelector(".gamingTab");
    const GamingButton = document.querySelector("#gaming")
    const Photos = document.querySelector(".twoHalfs")
    Photos.style.filter = "brightness(70%)";
    WhiteBox.style.filter = "brightness(70%)";
    GamingTab.style.display = "block";
    GamingButton.style.borderBottom = "2px solid black";
    GamingView.addEventListener('mouseover', () => {
        GamingTab.style.display = "block";
        GamingButton.style.borderBottom = "2px solid black";
        Photos.style.filter = "brightness(70%)";
        WhiteBox.style.filter = "brightness(70%)";
    }) 
}); 

Gaming.addEventListener('mouseout', () => {
    const GamingTab = document.querySelector(".gamingTab");
    const GamingButton = document.querySelector("#gaming");
    const Photos = document.querySelector(".twoHalfs")
    Photos.style.background = "#f0f0f0";
    Photos.style.filter = "brightness(100%)";
    WhiteBox.style.filter = "brightness(100%)";
    GamingTab.style.display = "none";
    GamingButton.style.borderBottom = "2px solid transparent";
    GamingView.addEventListener('mouseout', () => {
        GamingTab.style.display = "none";
        GamingButton.style.borderBottom = "2px solid transparent";
        Photos.style.background = "#f0f0f0";
        Photos.style.filter = "brightness(100%)";
        WhiteBox.style.filter = "brightness(100%)";
        
    }) 
}); 

Gadget.addEventListener('mouseover', () => {
    const GadgetTab = document.querySelector(".gadgetTab");
    const GadgetButton = document.querySelector("#gadget");
    const Photos = document.querySelector(".twoHalfs")
    Photos.style.filter = "brightness(70%)";
    WhiteBox.style.filter = "brightness(70%)";
    GadgetTab.style.display = "block";
    GadgetButton.style.borderBottom = "2px solid black";
    GadgetView.addEventListener('mouseover', () => {
        GadgetTab.style.display = "block";
        GadgetButton.style.borderBottom = "2px solid black";
        Photos.style.filter = "brightness(70%)";
        WhiteBox.style.filter = "brightness(70%)";
        
    }) 
}); 

Gadget.addEventListener('mouseout', () => {
    const GadgetTab = document.querySelector(".gadgetTab");
    const GadgetButton = document.querySelector("#gadget");
    const Photos = document.querySelector(".twoHalfs")
    Photos.style.background = "#f0f0f0";
    Photos.style.filter = "brightness(100%)";
    WhiteBox.style.filter = "brightness(100%)";
    GadgetTab.style.display = "none";
    GadgetButton.style.borderBottom = "2px solid transparent";
    GadgetView.addEventListener('mouseout', () => {
        GadgetTab.style.display = "none";
        GadgetButton.style.borderBottom = "2px solid transparent";
        Photos.style.background = "#f0f0f0";
        Photos.style.filter = "brightness(100%)";
        WhiteBox.style.filter = "brightness(100%)";
        
    }) 
}); 

Sale.addEventListener('mouseover', () => {
    const SaleTab = document.querySelector(".saleTab");
    const SaleButton = document.querySelector("#sale");
    const Photos = document.querySelector(".twoHalfs")
    Photos.style.filter = "brightness(70%)";
    WhiteBox.style.filter = "brightness(70%)";
    SaleTab.style.display = "block";
    SaleButton.style.borderBottom = "2px solid black";
    SaleView.addEventListener('mouseover', () => {
        SaleTab.style.display = "block";
        SaleButton.style.borderBottom = "2px solid black";
        Photos.style.filter = "brightness(70%)";
        WhiteBox.style.filter = "brightness(70%)";
        
    }) 
}); 

Sale.addEventListener('mouseout', () => {
    const SaleTab = document.querySelector(".saleTab");
    const SaleButton = document.querySelector("#sale");
    const Photos = document.querySelector(".twoHalfs")
    Photos.style.background = "#f0f0f0";
    Photos.style.filter = "brightness(100%)";
    WhiteBox.style.filter = "brightness(100%)";
    SaleTab.style.display = "none";
    SaleButton.style.borderBottom = "2px solid transparent";
    SaleView.addEventListener('mouseout', () => {
        SaleTab.style.display = "none";
        SaleButton.style.borderBottom = "2px solid transparent";
        Photos.style.background = "#f0f0f0";
        Photos.style.filter = "brightness(100%)";
        WhiteBox.style.filter = "brightness(100%)";
        
    }) 
}); 
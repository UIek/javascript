class Body{
    constructor(){
        this.bodystyle();
    }
    bodystyle(){
        const body = document.body;
        body.style.display = "flex";
        body.style.flexDirection = "column";
        body.style.justifyContent = "center";
        body.style.backgroundColor = "black";
    }
    
}
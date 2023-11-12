class Header{
    constructor(ile){
        this.header = this.createheader();
        this.adddivtoheader(ile);
    }
    createheader(){
        const header = document.createElement("header");
        document.body.appendChild(header);
        header.style.width = "100vw";
        header.style.height = "25vw";
        header.style.display = "flex";
        header.style.border = "1px solid red";
        header.style.flexDirection = "row";
        header.style.flexWrap = "wrap";
        header.style.justifyContent = "center";
        header.style.alignItems = "center";
        document.body.appendChild(header);
        return header;
    }
    adddivtoheader(ile){
        for(let i = 0; i < ile; i++){
            let div = document.createElement("div");
            div.style.width = "20vw";
            div.style.height = "15vw";
            div.style.margin = "5vw";
            div.style.backgroundColor = "red";
            this.header.appendChild(div);
        }
    }
}


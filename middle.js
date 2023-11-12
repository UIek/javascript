class Middle{
    constructor(){
        this.maindiv = this.cteatemaindiv()
        this.createnewdiw()
    }
    cteatemaindiv(){
        const maindiv = document.createElement("div");
        document.body.appendChild(maindiv);
        maindiv.style.width = "100vw"
        maindiv.style.height = "50vw"
        maindiv.style.marginTop = "1vw"
        maindiv.style.border = "1px solid white"
        maindiv.style.display = "flex"
        maindiv.style.flexDirection = "column"
        maindiv.style.justifyContent = "center"
        maindiv.style.alignItems = "center"
        return maindiv

    }
    createnewdiw(){
        for(let i = 0; i<5; i++){
            let color
            if (i%2==0){
                color = "green"
            }
            else{
                color = "blue"
            }
            const newdiv = document.createElement("div")
            newdiv.style.width = "90vw"
            newdiv.style.height = "10vw"
            newdiv.style.margin = "1vw"
            newdiv.style.backgroundColor = color
            this.maindiv.appendChild(newdiv)
        }
    }
}
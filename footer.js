class Footer{
    constructor(){
        this.foorer = this.createfooter()
        this.createnewdiv()
    }
    createfooter(){
        const foorer = document.createElement("div")
        document.body.appendChild(foorer)
        foorer.style.width = "100vw"
        foorer.style.height = "20vw"
        foorer.style.display = "flex"
        foorer.style.marginTop = "1vw"
        foorer.style.border = "1px solid white"
        foorer.style.alignItems = "center"
        foorer.style.justifyContent = "center"
        return foorer
    }
    createnewdiv(){
        for(let i = 0; i<2; i++){
            let width
            let color
            if(i==0){
                width = "60vw"
                color = "red"
            }
            else{
                width = "30vw"
                color = "orange"
            }
            const newdiv = document.createElement("div")
            this.foorer.appendChild(newdiv)
            newdiv.style.height = "10vw"
            newdiv.style.width = width
            newdiv.style.backgroundColor = color
            newdiv.style.margin = "1vw"
        }
    }
}
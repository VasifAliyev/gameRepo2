const list = ["Paper.png","Rock.png","Scissors.png"]

const kagiz = document.getElementById("paper")
const dash = document.getElementById("rock")
const qayci = document.getElementById("scissors")

const komputer_qerari = document.getElementById("computer-select")
 const netice = document.getElementById("result")

 function Big(x){
 x.style.height = "200px"
 x.style.width = "200px"
 }
 function small(x){
    x.style.height = "150px"
    x.style.width = "150px"
    }

    kagiz.onclick = Select
    dash.onclick = Select
    qayci.onclick = Select

    function Select() {
        const ComputerResult =randomSelect()
        const Myselect = this.dataset.id

        if(ComputerResult==0 && Myselect==1){
            netice.innerText="Computer is won"
        }
        else if(ComputerResult==1 && Myselect==0){
            netice.innerText="You are won"
        }
        else if(ComputerResult==0 && Myselect==2){
            netice.innerText="You are won"
        }
        else if(ComputerResult==1 && Myselect==2){
            netice.innerText="Computer is won"
        }
        else if(ComputerResult==2 && Myselect==0){
            netice.innerText="Computer is won"
        }
        else if(ComputerResult==2 && Myselect==1){
            netice.innerText="You are won"
        }
        else{
            netice.innerText="Try agein"
        }
       
        
    }
    document.getElementById("result").innerHTML= netice
    

 
    function randomSelect(){
        const say = Math.round( Math.random()*2)
        komputer_qerari.src = `./img/${list[say]}`
        return say
    }

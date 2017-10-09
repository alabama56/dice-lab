var allDie = [],
    i,
    sum,
    num;
    

document.addEventListener("DOMContentLoaded", function(){

    function Die(){
        num = Math.floor((Math.random() * 6) + 1);
        this.value = num;
        this.div = document.createElement("div");
        document.body.appendChild(this.div);
        this.div.setAttribute("class", "dice");
        this.div.setAttribute("id", num);
    
        this.div.innerText = num;

        this.div.addEventListener("click", this.roll.bind(this))

        this.div.addEventListener("dblclick", this.goodbye.bind(this))
       
    }

    Die.prototype.goodbye = function(){
        this.div.remove();
        allDie.splice(this, this);
    }

    Die.prototype.roll = function(){
        var newNum = Math.floor((Math.random() * 6) + 1);
        this.div.innerText = newNum;
        this.div.setAttribute("id", newNum);
        this.value = newNum;

        // console.log(this);
    }

    function sumDice(){
     var total = allDie.reduce((acc, curr) => {
            return acc + curr.value
       },0);
       
       console.log(total)

         
    }
   

    var getDie = document.getElementById("button1");
    getDie.addEventListener("click", function(){
        allDie.push(new Die());

    });

    var rollDie = document.getElementById("button2");
    rollDie.addEventListener("click", function(){
        for (var i = 0; i <= allDie.length - 1; i++){
            // console.log(allDie[i]);
            var x = allDie[i];
            x.roll();
        }
    });

    var getSum = document.getElementById("button3");
    getSum.addEventListener("click", function(){
        sumDice();
     
       
        
    })
});
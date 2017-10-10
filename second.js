var allDie = [],
i,
sum,
num;



document.addEventListener("DOMContentLoaded", function(){

    function Die(){
        num = Math.floor((Math.random() * 6) + 1);
        this.value = num;
        this.span = document.createElement("span");
        document.body.appendChild(this.span);
        this.span.setAttribute("class", "dice dice-" + num);
        this.span.setAttribute("title", "Dice "+ num)
        this.span.setAttribute("id", num);
        this.span.addEventListener("click", this.roll.bind(this))
        this.span.addEventListener("dblclick", this.goodbye.bind(this))
    }

    Die.prototype.goodbye = function(){
        this.span.remove();
        current = allDie.indexOf(this);
        allDie.splice(current, 1);
    }

    Die.prototype.roll = function(){
        var newNum = Math.floor((Math.random() * 6) + 1);
        // this.div.innerText = newNum;
        this.span.setAttribute("id", newNum);
        this.span.setAttribute("class", "dice dice-" + newNum);
        this.span.setAttribute("title", "Dice "+ newNum)
        this.value = newNum;

    }

    function sumDice(){
    var total = allDie.reduce((acc, curr) => {
            return acc + curr.value
    },0);
    
    alert(`The total number is ${total}`);

        
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
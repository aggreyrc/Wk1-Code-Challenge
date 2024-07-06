function speedDetector(){
    let speed = parseInt(prompt("Enter Speed of Car"));
    let points = 0;
    if(speed <= 70){
        console.log("Ok");
    }else{
        points = Math.floor((speed - 70) / 5);
            if(points > 12){
                console.log("License Suspended");
            }else{
                console.log(`Points:${points}`);
            }
    }    
} 

      
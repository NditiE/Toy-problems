const readLine = require('readline')
const rl=readLine.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('enter speed',(input)=>{
    const speed = input;
speedDetector(speed);
rl.close();
})

function speedDetector(speed){
    const speedLimit = 70;

    let demerit = 0;
    if(speed < 70){
        console.log('OK');
    }
    else{
        excessSpeed = speed-speedLimit;
        demerit = excessSpeed/5;
        if (demerit > 12){
            console.log("Licence suspended");
        }
          else{
            console.log('demeritPoints${demerit}');
          }
    }
}
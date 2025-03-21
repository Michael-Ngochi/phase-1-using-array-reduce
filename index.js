const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let gettotal=(current,next)=>{
return current+next;
}

let totalBatteries=batteryBatches.reduce(gettotal)



console.log(totalBatteries);

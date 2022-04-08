const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


//used const to create totalBatteries variable
//batteryBatches array already created above, so...sum means total
//use reduce()with batteryBatches, create a function to use arguments for result
//add batches and total with return 
// Code your solution here
const totalBatteries = batteryBatches.reduce(function(total, batches){
    return batches + total
    }
  )
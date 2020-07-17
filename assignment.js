 feetToMile

  function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}
   var result =feetToMile();
    result = result.toFixed(3);

    console.log(result);



  //woodCalculator

    function woodCalculator(chair,table,bed){
      var chairCount = chair*1;
      var tableCount =table*3;
      var bedCount = bed*5;

      var totalWood = chairCount+tableCount+bedCount;
      return totalWood;
     }
     var woodResult= woodCalculator();
     console.log(woodResult);



 //brickCalculator

     function brickCalculator(floor){

     const brick =1000;

     if(floor <= 10){

       var numberOfBrick = 15 * brick * floor;
       
       return numberOfBrick; 

     }else if(floor <= 20){

        numberOfBrick = (15 * 1000 * 10) + (12*1000 *(floor - 10)); // (15 * 1000 * 10)=150000, 1 to 10th floor brick
        return numberOfBrick; 

     }else

      numberOfBrick = (15 * 1000 * 10) + (12 * 1000 * 10) + (10*1000 *(floor - 20)); // (15 * 1000 * 10) + (12 * 1000 * 10) = 1 to 10th floor brick and 10th to 20th floor brick
      return numberOfBrick;

    }

    var calculateBrick= brickCalculator();
    console.log("Number Of Brick "+ calculateBrick);


  tinyFriend

  function tinyFriend(names){
    var shortestName = names[0];
         for(var i=0; i<names.length;i++){
            var currentNames = names[i];
            if(currentNames.length < shortestName.length){
                shortestName=currentNames;
            }
        }
        return shortestName;
   }


   var names= ([]);
   var result = tinyFriend(names);
   console.log("Smallest friend name is:", result);



   

  
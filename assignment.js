//feetToMile

    function feetToMile(feet){
      var mile = feet/5280;
        return mile;
     }
     var number =feetToMile();
     var result =Math.floor(number);

     console.log(result);



//woodCalculator

    function woodCalculater(chair,table,bed){
      var chairCount = chair*1;
      var tableCount =table*3;
      var bedCount = bed*5;

      var totalWood = chairCount+tableCount+bedCount;
      return totalWood;
     }
     var woodResult= woodCalculater();
     console.log(woodResult);



//brickCalculator

    function brickCalculator(floor){
     const brick =1000;

     if(floor <= 10){

      var numberOfBrick = 15 * brick;
      return numberOfBrick; 
     }
     else if(floor <= 20){

       numberOfBrick = 12 * brick;
       return numberOfBrick; 
     }
     else{

       numberOfBrick =10 * brick;
       return numberOfBrick;
     }

   }

  var calculateBrick= brickCalculator();
  console.log("Number Of Brick "+ calculateBrick);



  //tinyFriend

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



   

  
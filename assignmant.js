//https://github.com/boynayon000/assignment-4




//problem solving 1
function kilometerToMeter(kilometer){
    var meter=1000;
    var result=meter*kilometer;

    return result;
}


// problem solving 2
function budgetCalculator(ghoriCount,mobileCount,laptopCount){
    var ghori=50;
    var mobile=150;
    var laptpop=200;
    var x=ghori*ghoriCount;
    var y=mobile*mobileCount;
    var z=laptpop*laptopCount;
    var result=x+y+z;
   
    return result;
   }

   
   //problem solving 3
   function hotelCost(days){
    var  totalhotelDays=0;
      
      if(days<=10){
           totalhotelDays=days*100;
      }
      else if(days<=20){
         var  firstdayCost=10*100;
          var remainning= days-10;
          var secoundDayscost=remainning*80;
          totalhotelDays=firstdayCost+secoundDayscost;
      }
      else{
         firstdayCost=10*100;
         secoundDayscost=10*80;
         remainning=days-20;
      var nextDays=remainning*50;
      totalhotelDays=firstdayCost+secoundDayscost+nextDays;
      
  
  
  
      }
      return totalhotelDays;
  }
 // problem solving 4
 function megaFriend(){
    var arry=['nayon khlifa ','rasel ahmmed khan toton','junayed','sakin khan','likhon uddin'];
    var max=arry [0];
    for (var i=0; i<arry.length;i++){
        var element=arry[i];
        if(element.length>max.length){
          max =element;
        }
        
    }
     return max;
}

   


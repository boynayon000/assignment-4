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
var result=megaFriend();
console.log(result);
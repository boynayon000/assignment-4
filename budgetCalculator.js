function megaFriend(){
    var arry=["md Nayon khalifa","rifat hossain sonet","Gazi rasel"];
    var friendname=arry[0];
    for(var i=0; i<arry.length;i++){
        var element=arry[i];
        if(element>friendname){
            friendname=element;

        }
    }
    return friendname
}

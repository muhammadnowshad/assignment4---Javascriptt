function perfectFriend(names){
    
    for(const name of names){
        if(name.length == 5){
            return name;
        }  
    }    
}

const friendName = perfectFriend([4444444444,66666666,77777]);
console.log(friendName);
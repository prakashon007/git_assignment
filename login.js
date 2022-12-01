// Prime number code

let prime = 0;
let num = 13;
    for(i = 1;i <= num; i++){
        if(num %i== 0){
        prime++;
    }
}
     if(prime==2){
        console.log("Yes Prime Number");
    }
    else{
        console.log("No Prime Number");
  }


// Palindrome Code

let string = "prakash";
let new_str = "";
for(let i = string.length-1; i >= 0; i--){
new_str = new_str + string[i];
}
if(string == new_str){
console.log("yes string is palindrome")
}
else{
console.log("No string is not Palindrome")
}


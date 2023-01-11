let n=5;
let prime=true;
for(let i=2;i<n;i++){
    if(n%i==0){
        prime=false;
    }
}
if(prime){
    console.log("Prime",n)
}
else{
    console.log("Not Prime",n)
}
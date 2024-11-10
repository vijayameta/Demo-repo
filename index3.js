//Mapping
const input = [1,8,3,4,5];

const mappedArray = input.map(el=>{
    return el*3
});

console.log("mappedArray:", mappedArray);

//filtering
const filteredArr = input.filter(el => {
    if(el % 2 === 0){
        return true;
    }else{
        return false; 
    }
});

console.log(filteredArr);


const arr = ['vrkirat', 'vijay', 'prash', 'naman']

const ans = arr.filter(n=>{
    if(n.includes('a') && n.startsWith('v')){
        return true
    }else{
        return false
    }
})

console.log(ans);

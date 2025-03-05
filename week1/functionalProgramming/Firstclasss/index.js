const add=(a,b)=>{
    return a+b;
}

let firstclassfn=add;
console.log(firstclassfn(2,3));


const greet=(name)=>{
    return "hello"+ name;

}

const welcomemessage=(func,name)=>{
    console.log(func(name))
}

welcomemessage(greet,("Yujen"))
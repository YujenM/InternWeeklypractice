const moduler=(function(){
    // private variable
    let count=0;

    // private function
    const fncount=()=>{
        console.log("Current count= "+count);
    }
    return{
        increment:function(){
            count++
            fncount();
        },
        decrement:function(){
            count--;
            fncount();
        },
        getCurrentCount:function(){
            return count;
        }
    }
    
})();

moduler.increment();
moduler.decrement();
console.log(moduler.getCurrentCount())
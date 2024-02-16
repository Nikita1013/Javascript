// CONSTRUCTOR
var obj = {
    name : "Nikita",
    returnName : function(){
        return this.name
    }
}

console.log(obj.returnName());
console.log(this);
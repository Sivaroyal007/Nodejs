//object destructibng

const person ={
    name:'siva',
    age:25,
    greet(){console.log('Hey'+ this.name)}

}
const printName =({name,age})=>{
console.log(name,age);
}
printName(person)
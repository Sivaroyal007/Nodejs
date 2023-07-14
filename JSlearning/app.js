var name='siva';
var proffession='devloper';

// function userDetails(userName,userProfession){
//     return(
//         'name ='+userName + 'prof =' +userProfession
//     );
// }




// arrow func


const userDetails=(userName, userProfession)=>{
    return (
        'name =' + userName + 'prof =' + userProfession
    );
}

const add =()=>1+2;
console.log(add());

console.log(userDetails(name,proffession));

//this keyword

const person ={
    name:'siva',
    age:25,
    greet:()=>{console.log('Hey'+ this.name)}

}
//array

const skills=['react','rn'];
// for (let skill of  skills){
//     console.log(skill)
// }

console.log(skills.map(skill=>'Hobby ='+skill))

skills.push('aws');
console.log(skills.map(skill=>'Hobby ='+skill))

//soread operator
const b = [...skills];
console.log(b)

const toarr=(a1,a2,a3)=>{
return[a1,a2,a3]
};
console.log(toarr(1,2,3));

//res ope
const toarr2=(...args)=>{
    return args;
    };
    console.log(toarr2(1,2,3,5,5,5));
//
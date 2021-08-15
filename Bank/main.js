// יכיל שם אימייל , טלפון וסכום בע"וש (  balnce )
// משיכה, הפקדה של כספים 


const allClient = [
    {id: 1, fullName : "Osnat" , email: "ooooo@gmail.com", phone: "1111111" , balance: 10000 , },
    {id: 2 ,fullName : "Tikva" , email: "tttttt@gmail.com", phone: "222222" , balance: 1000 ,},
    {id: 3 ,fullName : "Yafit" , email: "yyyyy@gmail.com", phone: "33333333" , balance: -7000 ,},
    {id: 4, fullName : "Keren" , email: "kkkkk@gmail.com", phone: "4444444" , balance: 200 ,},
    {id: 5,fullName : "Orit" , email: "rrrrrr@gmail.com", phone: "5555555" , balance: 300 ,},
]



//function : 

// a . 

// function addClient(array) {
//    array.push({id: 6,fullName : "Dalia" , email: "ddddddd@gmail.com", phone: "666666" , balance: 12300 ,});
//     return array
// }

// var x = addClient(allClient)
// console.log(x);


// b . 
// Get client by ID

// function clientById(array ,id) {
//     for (let i=0; i<array.length;i++){
//         if (id == array[i].id ){
//             return array[i]
//         }
//     }
    
// }


// const x = clientById(allClient,2);
// console.log(x);


// c . 

// Delete Client by ID:
// function deleteClientId(array,id) {
//     for (let i=0;i<array.length;i++){
//         if(id==array[i].id){
//             array.splice(i,1)
//             return array
//         }
//     }
    
// }


// const x = deleteClientId(allClient,3);
// console.log(x);

// d .
// Withdraw money find by ID משיכה

// function Withdraw(array , id , amount) {
//     for(let i=0; i<array.length; i++)
//     if (id == array[i].id)
//     array[i].balance -= amount
//     return array
// }

// const x = Withdraw(allClient,5,300);
// console.log(x);


// e . 
// Deposit money find by ID הפקדה

// function depositMoneyClient(array , id , amount) {
//     for (let i=0; i<array.length; i++){
//         if (id== array[i].id){
//             array[i].balance += amount
//             return array
//         }
//     }
    
// }

// const x = depositMoneyClient(allClient,5,300);
// console.log(x);
// const students= [
// {fullName : "Eden Tasama" , email:"edentasama19@gmail.com" , phoneNumber: "+972527303780"},
// {fullName : "Daniel Tal" , email:"dddddddd@gmail.com" , phoneNumber: "+9725275555555"},
// {fullName : "Yafit Samuel" , email:"yyyyyyy@gmail.com" , phoneNumber: "+972528888888"},
// ]

// for (let i=0; i<students.length; i++){

//     console.log(students[i].fullName);
//     console.log(students[i].email);
//     console.log(students[i].phoneNumber);}

const products = [
  {
    name: "Books",
    price: 160,
    images: [
      "https://pixabay.com/photos/book-read-old-literature-books-1659717/",
      "https://pixabay.com/photos/book-rose-book-mark-open-book-419589/",
    ],
  },
  {
    name: "Pen",
    price: 10,
    images: [
      "https://pixabay.com/photos/calculator-calculation-insurance-385506/",
      "https://pixabay.com/photos/coffee-phone-paper-business-792113/",
    ],
  },
  {
    name: "Note-book",
    price: 12,
    images: [
      "https://pixabay.com/photos/adult-diary-journal-notebook-book-1850177/",
      "https://pixabay.com/photos/writing-writer-notes-pen-notebook-923882/",
    ],
  },
  {
    name: "Calculator",
    price: 40,
    images: [
      "https://pixabay.com/photos/calculator-calculation-insurance-385506/",
      "https://pixabay.com/photos/euro-seem-money-finance-piggy-bank-870757/",
    ],
  },
  {
    name: "Eraser",
    price: 2,
    images: [
      "https://pixabay.com/photos/impossible-possible-eraser-white-701686/",
      "https://pixabay.com/photos/eraser-abrasion-stationery-office-3822402/",
    ],
  },
];

// הדפסה של מערך של מערך 
// for (let i = 0; i < products.length; i++) {
//     for (let j=0; j<products[i].images.length ; j++)
//     console.log(products[i].images[j]);
// }

// דרך נוספת 
// for (let i=0; i<products.length ; i++){
//     const arrayInProduct = products[i].images
//     for (let j=0 ; j<arrayInProduct.length; j++){
//         console.log(arrayInProduct[j]);
//     }
// }
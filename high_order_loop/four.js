//map filter reduce

// const arr = ["js",'java',"react",'node js'];

// const values = arr.forEach((item)=>{
// console.log(item);
// return item

// });
// console.log(values);// note forEach koi bhi value return nhi krta hai.



const myNum = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNum.filter((num)=> num>4);
const newNums = myNum.filter((num)=> {
    return num>4;
});

// console.log(newNums);

const books = [
    { title: "The Great Gatsby", genre: "Fiction", publish: 1925 },
    { title: "To Kill a Mockingbird", genre: "Fiction", publish: 1960 },
    { title: "1984", genre: "Dystopian", publish: 1949 },
    { title: "The Catcher in the Rye", genre: "Fiction", publish: 1951 },
    { title: "Moby-Dick", genre: "Adventure", publish: 1851 },
    { title: "Pride and Prejudice", genre: "Romance", publish: 1813 },
    { title: "The Hobbit", genre: "Fantasy", publish: 1937 },
    { title: "The Road", genre: "Post-apocalyptic", publish: 2006 },
    { title: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy", publish: 1997 },
    { title: "The Da Vinci Code", genre: "Thriller", publish: 2003 },
    { title: "Brave New World", genre: "Dystopian", publish: 1932 },
    { title: "The Lord of the Rings", genre: "Fantasy", publish: 1954 },
    { title: "Jane Eyre", genre: "Romance", publish: 1847 },
    { title: "The Shining", genre: "Horror", publish: 1960 },
    { title: "The Alchemist", genre: "Adventure", publish: 1988 },
    { title: "The Hunger Games", genre: "Dystopian", publish: 2008 },
    { title: "A Game of Thrones", genre: "Fantasy", publish: 1996 },
    { title: "The Fault in Our Stars", genre: "Romance", publish: 2012 },
    { title: "The Girl with the Dragon Tattoo", genre: "Mystery", publish: 2005 },
    { title: "The Handmaid's Tale", genre: "Dystopian", publish: 1985 }
  ];
  


//   const userBooks = books.filter((bk)=>{
//     return bk.genre =="Dystopian"
//   });

// const userBooks = books.filter((bk)=>{
//     return (bk.genre =="Dystopian" && bk.publish >= 1985)
//   });


const userBooks = books.filter((bk)=>{
    return (bk.publish>=2001)
  });


  console.log(userBooks);
  
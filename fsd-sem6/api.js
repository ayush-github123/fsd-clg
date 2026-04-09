const express=require('express');
const app=express();
const port=3000;

let books=[
    { id:1,
      title:"The great Gatsby",
      author:"F. Scott Fitzgerald",
    },
    {
      id:2,
      title:"To Kill a Mockingbird",
      author:"Harper Lee",
    },
];

app.get('/api/books',(req,res)=>{
    res.json(books);
});
app.get('/api/books/:id',(req,res)=>{
  const id=parseInt(req.params.id);
  const book=books.find(book=>book.id===id);
  if(book){
    res.json(book);
  }else{
    res.status(404).json({message:"Book not found"});
  }
});

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});

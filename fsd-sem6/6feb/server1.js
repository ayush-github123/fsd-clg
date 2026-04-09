const fs= require('fs').promises;

async function readfileExample(){
    try{
        const data=await fs.readFile('myfile.txt','utf8');
        console.log("File content:",data);
    }catch(err){
        console.error("Error reading file:",err);
    }
  }
readfileExample();

const{promisify}=require('util');
const readFileAsync=promisify(fs.readFile);

async function readWithPromisify(){
    try{
        const data=await readFileAsync('myfile.txt','utf8');
        console.log(data);
    }catch(err){
        console.log(err);
    }
}
readWithPromisify();

const PORT=3000;  
server.listen(PORT,()=>{
    console.log(`Server running on http://localhost:3000`);
});

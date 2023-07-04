import  mongoose from "mongoose";
import app from "./app";


const port:number = 5000;


async function tailwind() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      });
  }
  tailwind();
  
  
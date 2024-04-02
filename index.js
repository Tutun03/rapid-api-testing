const express =require('express');
const axios=require('axios');

const app=express();
const PORT=304;

app.use(express.json());

app.post('/fetch',async(req,res)=>{
    try{
        const {language,version,code,input} = req.body;
        
      const response=await axios.post('https://online-code-compiler.p.rapidapi.com/v1/',{
        // "language": "python3",
        // "version": "latest",
        // "code": "num = float(input('Enter a number: '))\nnum_sqrt = num ** 0.5\nprint('The square root of %0.3f is %0.3f'%(num ,num_sqrt))",
        // "input": 4.5
        "language": language,
        "version": version,
        "code": code,
        "input": input,
        
      },{
        headers:{
            'content-type': 'application/json',
            'X-RapidAPI-Key': '54e418fc25mshc530c2f1a7d3b3dp182ca4jsn62e8f30340e5',
            'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
        }
       
      
      });

      
      res.status(200).json({success:true,data:response.data})
    }
    catch(err){
        console.log(err);
        res.status(500).json({success:false,error:'Internal Server ERROR'})
    }
})


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
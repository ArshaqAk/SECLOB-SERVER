import dbData from "../Model/schema.js"

const getData=async(req,res)=>{
 try {
     const allData = await dbData.find()
     if(allData.length>0){
        res.status(200).json({allData})
     }
     else{
        res.status(404).json({message: 'No data found'})
     }
 } catch (error) {
   res.status(500).json({message: 'Internal Server Error'})
 }
}




export {getData}
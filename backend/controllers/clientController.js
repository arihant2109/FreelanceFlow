import { addClient } from "../services/client";


export const addClientController =async (req,res)=>{
    try{
        const response = await addClient();
        if(response){
            res.status(200).json({data:response});
        }
    }catch(error){
        console.log("Error in adding Client from controller",error);
        res.status(500).json({data:"Error in Adding from controller"});
    }




}
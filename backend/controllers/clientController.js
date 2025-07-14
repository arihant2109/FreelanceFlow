import { addClient, fetchClients } from "../services/client.js";


export const addClientController =async (req,res)=>{
    try{
        console.log(req.body)
        const response = await addClient(req.body);
        if(response){
            res.status(200).json({data:response});
        }
    }catch(error){
        console.log("Error in adding Client from controller",error);
        res.status(500).json({data:"Error in Adding from controller"});
    }
}

export const fetchClientController =async (req,res)=>{
    try{
    
        const response = await fetchClients();
        if(response){
            res.status(200).json({data:response});
        }
    }catch(error){
        console.log("Error in fetching Client from controller",error);
        res.status(500).json({data:"Error in fetching client from controller", error:error});
    }
}
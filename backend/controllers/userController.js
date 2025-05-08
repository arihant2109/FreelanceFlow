import { addUser} from "../services/user.js";


export const addUserController = async(req,res)=>{
    try{
        const response =await addUser(req.body);
        if(response){
            res.status(200).json({data:response});
        }
    }catch(error){
        console.log("Error in adding User from controller",error);
        res.status(500).json({data:"Error in Adding user from controller"});
    }




}
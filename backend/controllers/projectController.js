import {addProject, fetchProjects} from "../services/project.js";


export const addProjectController = async(req,res)=>{
    try{
        const response = await addProject(req.body);
        if(response){
            res.status(200).json({data:response});
        }
    }catch(error){
        console.log("Error in adding Project from controller",error);
        res.status(500).json({data:"Error in Adding project from controller"});
    }

}

export const fetchProjectController = async(req,res)=>{
    try{
        const response = await fetchProjects();
        if(response){
            res.status(200).json({data:response});
        }
    }catch(error){
        console.log("Error in fetching Project from controller",error);
        res.status(500).json({data:"Error in fetching project from controller", error:error});
    }
}
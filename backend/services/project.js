import pool from '../db/index.js';


export const addProject = async(req,res)=>{

    const {user_id,client_id,title,description,status,start_date,due_date}=req.body
    const values = [user_id,client_id,title,description,status,start_date,due_date]

    try{
        const projects = await pool.query("INSERT INTO projects(user_id,client_id,title,description,status,start_date,due_date) VALUES ($1, $2, $3, $4, $5, $6,$7)",values);

        return{
            status:200,
            success:true,
            data:'Project Added'
        }

    }catch(error){
        console.log("Error in Adding Project from backend", error);
        return{
            status:500,
            success:false,
            data:error
        }
    }
}





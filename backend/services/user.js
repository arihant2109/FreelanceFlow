import pool from '../db/index.js';


export const addClient = async(req,res)=>{

    const {name,email,password_hash,role,profile_image}=req.body
    const values = [name,email,password_hash,role,profile_image]

    try{
        const users = await pool.query("INSERT INTO projects(name,email,password_hash,role,profile_image) VALUES ($1, $2, $3, $4, $5)",values);

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





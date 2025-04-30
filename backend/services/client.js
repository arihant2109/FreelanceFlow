import pool from '../db/index.js';


export const addClient = async(req,res)=>{

    const {id,user_id,name,email,company,phone}=req.body
    const values = [id,user_id,name,email,company,phone]

    try{
        const addClient = await pool.query("INSERT INTO clients(id,user_id,name,email,company,phone) VALUES ($1, $2, $3, $4, $5, $6)",values);

        return{
            status:200,
            success:true,
            data:'Client Added'
        }

    }catch(error){
        console.log("Error in Adding Client from backend", error);
        return{
            status:500,
            success:false,
            data:error
        }
    }
}




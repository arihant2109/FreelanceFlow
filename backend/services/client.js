import pool from '../db/index.js';


export const addClient = async(body)=>{

    console.log("client service",body);



    const {user_id,name,email,company,phone}=body
    const values = [user_id,name,email,company,phone]

    console.log(user_id);

    try{
        const clients = await pool.query("INSERT INTO clients(user_id,name,email,company,phone) VALUES ($1, $2, $3, $4, $5)",values);

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





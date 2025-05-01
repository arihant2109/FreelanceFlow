import pool from '../db/index.js';


export const addTasks = async(req,res)=>{

    const {project_id,title,description,status,due_date}=req.body
    const values = [project_id,title,description,status,due_date]

    try{
        const tasks = await pool.query("INSERT INTO projects(project_id,title,description,status,due_date) VALUES ($1, $2, $3, $4, $5)",values);

        return{
            status:200,
            success:true,
            data:'Task Added'
        }

    }catch(error){
        console.log("Error in Adding Task from backend", error);
        return{
            status:500,
            success:false,
            data:error
        }
    }
}


export const updateStatus= async(req,res)=>{
    const {status,due_date}=req.body;
    const values = [];
    let index=1;

    try{
        const query = 'UPDATE tasks SET';
        if(status){
            query +=`status = $${index}`;
            values.push(query);
            index++;
        }
        if(due_date){
            query +=`due_date = $${index}`;
            values.push(due_date);
            index++;    
        }

        return{
            status:200,
            success:true,
            data:'Task Added'
        }

    }catch(error){
        console.log("Error in Adding Task from backend", error);
        return{
            status:500,
            success:false,
            data:error
        }
    }
    
}




import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(req) {
    try {
     
        const client=await pool.query(
            "SELECT * from clients", 
            []
        );

        console.log("Client added successfully");
        return NextResponse.json({
            status: 200,
            success: true,
            message: client.rows,
        });

    } catch (error) {
        console.error("Error in Adding Client", error);
        return NextResponse.json({
            status: 500,
            success: false,
            message: 'Error in Adding Client',
            error: error.message,
        });
    }
}

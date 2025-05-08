'use client'
import { useState } from 'react';
import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
export default function PromptPage() {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResponse('');
        setError('');
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/prompt`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt })
            });
            if (!res.ok) throw new Error((await res.json()).error || 'Something went wrong.');
            const data = await res.json();
            setResponse(JSON.stringify(data, null, 2));
        } catch (err) {
            setError(err.message || 'An unexpected error occurred.');
        }
    };

    return (
        <><NavBar /><SideBar /><div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-2xl font-bold mb-4">Task Automation</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-6 rounded-2xl shadow-md">
                <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Enter your task prompt..."
                    className="w-full h-32 border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:border-blue-500" />
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Submit</button>
            </form>
            {response && <pre className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg w-full max-w-lg overflow-x-auto">{response}</pre>}
            {error && <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg w-full max-w-lg">{error}</div>}
        </div></>
    );
}

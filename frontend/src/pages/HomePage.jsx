import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import RateLimitedUI from "../components/RateLimitedUI";
import axios from "axios"

const HomePage = () => {
    const [isRateLimited, setIsRateLimited] = useState(true)
    const [notes, setNotes] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const res = await axios.post("http://localhost:3001/api/notes")
                console.log(res.data)
            } catch (error) {
                console.log("Error fetching notes")
            }
        }
    }, [])

    return (
    <div className="min-h-screen">
        <NavBar />

        {isRateLimited && <RateLimitedUI />}
        
        <div className="max-w-7xl mx-auto p-4 mt-6">
            {loading && <div className="text-center tect-primary py-10">Loading notes...</div>}

            {notes.length > 0 && !isRateLimited && (
                <div className="grid grid-cols1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {notes.map(note =>(
                        <div>
                           {note.title} | {note.content} 
                        </div>
                    ))}
                </div>
            )}
        </div>
    </div>
  );
};

export default HomePage
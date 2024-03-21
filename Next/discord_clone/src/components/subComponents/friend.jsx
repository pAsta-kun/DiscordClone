import axios from "axios"
import { useState, useEffect } from "react"

export default function Friend({friendId}) {

    const [username, setUsername] = useState('')
    const [status, setStatus] = useState('')

    useEffect(() => {
        const fetchUserInfo = async (userId) => {
            try {
                const response = await axios.get('http://localhost:3000/user', {
                    params: { userId: userId } 
                });
                console.log(response.data)
                setUsername(response.data.userName)
                setStatus(response.data.status)
            } catch (error) {
                console.error(error);
            }
        }
        fetchUserInfo(friendId);
    }, [friendId])
    return(
        <div className="m-1 bg-background w-full flex text-left p-2 rounded-md">
            <div className="h-10 w-10 rounded-full bg-accent flex justify-center items-center mr-3">
                {username.charAt(0).toUpperCase()}
            </div>
            <div className="flex flex-col">
                <div className="text-sm text-text">{username}</div>
                <div className="text-xs text-text">{status}</div>
            </div>
            
        </div>
    )
}
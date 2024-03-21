import React, { useEffect, useState } from 'react';
import Friend from './subComponents/friend';
import axios from 'axios';

export default function FriendsList({userId}) {

    const [friends, setFriends] = useState([])

    useEffect(() => {
        const fetchFriends = async (userId) => {
            try {
                const response = await axios.get('http://localhost:3000/friend', {
                    params: { userId: userId } 
                });
                setFriends(response.data)
                console.log(response.data)
            } catch (error) {
                console.error(error);
            }
        }
        fetchFriends(userId);
    }, []);
    
    return (
        <div className='bg-primary h-full w-60 flex flex-col items-center justify-top flex-1 p-2'>
            {friends ? ( // Check if friends exists before mapping
                friends.map((friend, index) => (
                    (friend.status === "Added" && <Friend friendId={friend.userId} key={index} />)
                ))
            ) : (
                <div>Loading friends...</div> // Or a loading indicator
            )}
        </div>
    );
}
'use client'
import FriendsList from "@/components/friendsList";
import { useState } from "react";

export default function Home() {
  const [userId, setUserId] = useState('65f927fbd78dfe96833d198b')
  return (
    <div className="flex min-h-screen min-w-screen flex-col">
      <FriendsList userId={userId}/>
    </div>
  );
}

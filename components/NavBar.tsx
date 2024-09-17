'use client'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { signOut } from "next-auth/react";
// import { redirect } from "next/dist/server/api-utils";
import { redirect, useRouter } from "next/navigation";
import { Session } from "inspector/promises";


export default function NavBar({session}: {session : Session}) {


  console.log("SESSION insdie navbar", session);
  

  const gotoProfile = ()=>{
    window.alert("Profile");
  }
  return (
    <nav className="w-full p-4  shadow-md fixed top-0 left-0 z-50 flex justify-between items-center bg-gradient-to-b from-white to-slate-500">
      {/* Company Name */}
      <Button onClick={()=>{
        // route.push('/')
        window.alert('ScoreBook')
        console.log("INSIDE BUTTON");
        
      }} className="text-2xl font-bold text-gray-800 cursor-pointer bg-transparent ">
        Score-Book
      </Button>

      {/* Right-side buttons */}
      {session?.user ? (
        <div className="space-x-4 flex items-center">
          <Button className="text-gray-800  cursor-pointer bg-transparent" onClick={()=>{redirect('/profile')}}>{session.user.name}</Button>
          <Button onClick={() => signOut()}>Sign Out</Button>
        </div>
      ) : (
        <div className="space-x-4">
          <Link href="/sign-in">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Link href="/sign-up">
            <Button>Sign Up</Button>
          </Link>
        </div>
      )}
    </nav>
  
  );
}

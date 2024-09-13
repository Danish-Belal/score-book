'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import AuthForm from '@/components/AuthForm';

export default function SignIn() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const router = useRouter();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const result = await signIn('credentials', {
  //     redirect: false,
  //     email,
  //     password,
  //   });
  //   if (result.ok) {
  //     router.push('/profile');
  //   } else {
  //     alert(result.error);
  //   }
  // };

  // return (
  //   <div className="flex items-center justify-center min-h-screen bg-gray-100">
  //     <Card className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
  //       <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign In</h1>
  //       <form onSubmit={handleSubmit} className="space-y-6">
  //         <input
  //           type="email"
  //           placeholder="Email"
  //           value={email}
  //           onChange={(e) => setEmail(e.target.value)}
  //           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
  //         />
  //         <input
  //           type="password"
  //           placeholder="Password"
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
  //         />
  //         <button
  //           type="submit"
  //           className="w-full p-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  //         >
  //           Sign In
  //         </button>
  //       </form>
  //       <div className="flex items-center justify-center space-x-4 mt-6">
  //         <hr className="w-1/3 border-gray-300" />
  //         <span className="text-gray-500">or</span>
  //         <hr className="w-1/3 border-gray-300" />
  //       </div>
  //       <div className="flex justify-between mt-6 space-x-4">
  //         <button
  //           onClick={() => signIn('google')}
  //           className="flex items-center justify-center w-full p-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 border border-gray-300"
  //         >
  //           <FcGoogle className="mr-2" size={24} /> Sign in with Google
  //         </button>
  //         <button
  //           onClick={() => signIn('github')}
  //           className="flex items-center justify-center w-full p-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 border border-gray-300"
  //         >
  //           <FaGithub className="mr-2" size={24} /> Sign in with GitHub
  //         </button>
  //       </div>
  //     </Card>
  //   </div>
  // );
  return <AuthForm type="sign-in" />;
}

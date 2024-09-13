'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Card } from '@/components/ui/card';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import AuthForm from '@/components/AuthForm';

export default function SignUp() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const router = useRouter();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const res = await fetch('/api/auth/signup', {
  //     method: 'POST',
  //     body: JSON.stringify({ email, password }),
  //     headers: { 'Content-Type': 'application/json' },
  //   });

  //   if (res.ok) {
  //     await signIn('credentials', { email, password });
  //     router.push('/profile');
  //   } else {
  //     alert('Sign-up failed');
  //   }
  // };

  // const particlesInit = useCallback(async (engine) => {
  //   await loadFull(engine);
  // }, []);

  // return (
  //   <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
  //     {/* Particle Background */}
  //     <Particles
  //       id="tsparticles"
  //       init={particlesInit}
  //       options={{
  //         background: { color: { value: "#f0f0f0" } },
  //         fpsLimit: 60,
  //         interactivity: {
  //           events: {
  //             onClick: { enable: true, mode: "push" },
  //             onHover: { enable: true, mode: "repulse" },
  //             resize: true,
  //           },
  //           modes: {
  //             push: { quantity: 4 },
  //             repulse: { distance: 100, duration: 0.4 },
  //           },
  //         },
  //         particles: {
  //           color: { value: "#000000" },
  //           links: { color: "#000000", distance: 150, enable: true, opacity: 0.5, width: 1 },
  //           collisions: { enable: true },
  //           move: { direction: "none", enable: true, outModes: "bounce", speed: 2 },
  //           number: { density: { enable: true, area: 800 }, value: 50 },
  //           opacity: { value: 0.5 },
  //           shape: { type: "circle" },
  //           size: { value: { min: 1, max: 5 } },
  //         },
  //       }}
  //     />

  //     {/* Signup Card */}
  //     <Card className="relative z-10 w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
  //       <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h1>
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
  //           Sign Up
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
  return <AuthForm type="sign-up" />;
}

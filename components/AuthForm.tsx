'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

type AuthFormProps = {
  type: 'sign-in' | 'sign-up';
};

export default function AuthForm({ type }: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const credentialsType = type === 'sign-in' ? 'credentials' : 'signup_credentials';
    
    
    const result = await signIn(credentialsType, {
      redirect: false,
      email,
      password,
    });
    console.log("RESULTTTTTTTT",result);
    if (result?.ok) {
      router.push('/profile');
    } else {
      alert(result?.error || 'Something went wrong');
    }
  };

  const toggleAuthType = () => {
    const nextRoute = type === 'sign-in' ? '/sign-up' : '/sign-in';
    router.push(nextRoute);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-slate-500 to-purple-500">
      <Card className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg z-10">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {type === 'sign-in' ? 'Sign In' : 'Sign Up'}
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="w-full p-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {type === 'sign-in' ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
        
        <div className="flex items-center justify-center space-x-4 mt-6">
          <hr className="w-1/3 border-gray-300" />
          <span className="text-gray-500">or</span>
          <hr className="w-1/3 border-gray-300" />
        </div>

        <div className="flex justify-between mt-6 space-x-4">
          <button
            onClick={() => signIn('google')}
            className="flex items-center justify-center w-full p-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 border border-gray-300"
          >
            <FcGoogle className="mr-2" size={24} /> Sign {type === 'sign-in' ? 'in' : 'up'} 
          </button>
          <button
            onClick={() => signIn('github')}
            className="flex items-center justify-center w-full p-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 border border-gray-300"
          >
            <FaGithub className="mr-2" size={24} /> Sign {type === 'sign-in' ? 'in' : 'up'}
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          {type === 'sign-in' ? (
            <span>
              Don&apos;t have an account?{' '}
              <span
                className="text-indigo-600 cursor-pointer hover:underline"
                onClick={toggleAuthType}
              >
                Sign up
              </span>
            </span>
          ) : (
            <span>
              Already have an account?{' '}
              <span
                className="text-indigo-600 cursor-pointer hover:underline"
                onClick={toggleAuthType}
              >
                Sign in
              </span>
            </span>
          )}
        </div>
      </Card>
    </div>
  );
}

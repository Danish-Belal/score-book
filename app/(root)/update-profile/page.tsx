
"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
// import { useSession } from 'next-auth/react';
import { updateScorerProfile, verifyUsernameOnPlateform } from '@/lib/actions/scorer.actions';
import { Card } from '@/components/ui/card';
import { FaCheckCircle } from 'react-icons/fa'; // Import tick icon for verified status
import { FcGoogle } from 'react-icons/fc'; 
import { FaGithub } from 'react-icons/fa';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export  default async function UpdateProfile({ email }: { email: string }){
  // const session = await getServerSession(authOptions);
  // console.log("SESSIONS", session); 
  console.log("EMAIL", session?.user?.email);
  
  console.log("EMAIL COMING FROM PROFILE", email);
  
  const router = useRouter();
  const [formData, setFormData] = useState({
    githubUsername: '',
    leetcodeUsername: '',
    linkedinUsername: '',
    codeforcesUsername: '',
  });

  const [verifiedStatus, setVerifiedStatus] = useState({
    github: false,
    leetcode: false,
    linkedin: false,
    codeforces: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("FORM DATA", formData);
      console.log("EMIALLLLLL", email);
  
      // Use the email from the session and pass formData to updateScorerProfile
      const update = await updateScorerProfile(email || '', formData);
      
      router.push('/profile');
    } catch (error) {
      console.error('Error updating profile', error);
    }
  };

  const verifyUsername = async (platform: string, username: string) => {
    console.log('Inside verifyUsername', platform, username);
    
    const isVerified = await verifyUsernameOnPlateform(username, platform);
    if(isVerified) {
      window.alert('User is verified')
    }else{
      window.alert('Úser is not verified')
    }
    setVerifiedStatus((prevState) => ({ ...prevState, [platform.toLowerCase()]: isVerified }));
  };

  const renderVerificationIcon = (platform: string) => {
    if (verifiedStatus[platform]) {
      return <FaCheckCircle className="text-green-500 ml-2" />;
    }
    return null;
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-slate-500 to-purple-500">
      <Card className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg z-10">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Update Your Profile
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* GitHub Username */}
          <div>
            <label htmlFor="githubUsername" className="block text-sm font-medium text-gray-700">
              GitHub Username
            </label>
            <div className="flex items-center">
              <input
                id="githubUsername"
                name="githubUsername"
                type="text"
                value={formData.githubUsername}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="button"
                onClick={() => verifyUsername('GitHub', formData.githubUsername)}
                className="ml-2 p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Verify
              </button>
              {renderVerificationIcon('github')}
            </div>
          </div>

          {/* LeetCode Username */}
          <div>
            <label htmlFor="leetcodeUsername" className="block text-sm font-medium text-gray-700">
              LeetCode Username
            </label>
            <div className="flex items-center">
              <input
                id="leetcodeUsername"
                name="leetcodeUsername"
                type="text"
                value={formData.leetcodeUsername}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="button"
                onClick={() => verifyUsername('LeetCode', formData.leetcodeUsername)}
                className="ml-2 p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Verify
              </button>
              {renderVerificationIcon('leetcode')}
            </div>
          </div>

          {/* LinkedIn Username */}
          <div>
            <label htmlFor="linkedinUsername" className="block text-sm font-medium text-gray-700">
              LinkedIn Username
            </label>
            <div className="flex items-center">
              <input
                id="linkedinUsername"
                name="linkedinUsername"
                type="text"
                value={formData.linkedinUsername}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="button"
                onClick={() => verifyUsername('LinkedIn', formData.linkedinUsername)}
                className="ml-2 p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Verify
              </button>
              {renderVerificationIcon('linkedin')}
            </div>
          </div>

          {/* Codeforces Username */}
          <div>
            <label htmlFor="codeforcesUsername" className="block text-sm font-medium text-gray-700">
              Codeforces Username
            </label>
            <div className="flex items-center">
              <input
                id="codeforcesUsername"
                name="codeforcesUsername"
                type="text"
                value={formData.codeforcesUsername}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="button"
                onClick={() => verifyUsername('Codeforces', formData.codeforcesUsername)}
                className="ml-2 p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Verify
              </button>
              {renderVerificationIcon('codeforces')}
            </div>
          </div>

          <button
            type="submit"
            className="w-full p-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Save Changes
          </button>
        </form>
      </Card>
    </div>
  );
}

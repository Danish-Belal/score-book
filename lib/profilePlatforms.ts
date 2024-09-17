// lib/profilePlatforms.ts

// Define the type for the scorer profile
interface ScorerProfile {
     githubUsername?: string;
     leetcodeUsername?: string;
     linkedinUsername?: string;
     codeforcesUsername?: string;
   }
   
   // Define the type for each platform object
   interface Platform {
     platform: string;
     username?: string;  // Optional because the profile may not have this info
     bgClass: string;
     url: string;
   }
   
   // Define the function with appropriate types
   export const profilePlatforms = (scorerProfile: ScorerProfile): Platform[] => [
    { 
      platform: 'GitHub', 
      username: scorerProfile?.githubUsername, 
      bgClass: 'bg-slate-800', 
      url: `https://github.com/${scorerProfile?.githubUsername}` 
    },
    { 
      platform: 'LeetCode', 
      username: scorerProfile?.leetcodeUsername, 
      bgClass: ' bg-yellow-900 ', 
      url: `https://leetcode.com/${scorerProfile?.leetcodeUsername}` 
    },
    { 
      platform: 'LinkedIn', 
      username: scorerProfile?.linkedinUsername, 
      bgClass: ' bg-cyan-700 ', 
      url: `https://www.linkedin.com/in/${scorerProfile?.linkedinUsername}` 
    },
    { 
      platform: 'Codeforces', 
      username: scorerProfile?.codeforcesUsername, 
      bgClass: ' bg-rose-700 ', 
      url: `https://codeforces.com/profile/${scorerProfile?.codeforcesUsername}` 
    },
  ];
   
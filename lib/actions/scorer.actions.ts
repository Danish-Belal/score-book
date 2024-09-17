"use server"
import prisma from '@/db/client'; 

export async function getScorerProfile(email: string) {
  return await prisma.scorer.findUnique({
    where: { user: { email } },
  });
}

export async function updateScorerProfile(email: string, profileData: {
  githubUsername?: string;
  leetcodeUsername?: string;
  linkedinUsername?: string;
  codeforcesUsername?: string;
}) {
  console.log('Inside Update ScoreProfile functiom');
  console.log('email', email);
  
  console.log("PRISMA", prisma);
  
  // Step 1: Get the User's ID using the email
  const user = await prisma.user.findUnique({
    where: { email: email },
    // select: { id: true } // Only select the ID
  });
  console.log("USER IN UPDATE SORE FUNCTION", user);
  

  if (!user) {
    throw new Error('User not found');
  }
  console.log("PRISMA", prisma);
  
  // Step 2: Upsert the Scorer profile based on userId
  return await prisma.scorer.upsert({
    where: { userId: user.id }, // Use the User ID as the unique identifier
    update: profileData,
    create: {
      userId: user.id, // Connect to the user with userId
      ...profileData
    }
  });
}


export async function verifyUsernameOnPlateform(username:string, platform:string){
   

  let response;

  switch (platform) {
    case 'GitHub':
      response = await fetch(`https://api.github.com/users/${username}`);
      console.log("Inside github verificatoin");
      
      console.log(response);
      
      if (response.ok) return true;
      break;

      case 'LeetCode':
        try {
          const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
          if (response.ok) {
              const data = await response.json();
              return true;
          } else {
              console.error('Failed to fetch LeetCode stats:', response.status);
              return false;
          }
      } catch (error) {
          console.error('Error fetching LeetCode stats:', error);
          return false;
      }
      break;

    case 'LinkedIn':
      const linkedInProfileUrl = username;  // Assuming userProfileUrl is provided by the user
    
      // Simple regex to validate LinkedIn profile URL format
      const linkedInRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/;
      
      if (linkedInRegex.test(linkedInProfileUrl)) {
          try {
              const response = await fetch(linkedInProfileUrl, { method: 'HEAD' }); 
              console.log("RESPONSE", response);
              
              if (response.ok) {
                  return true; // Profile exists
              } else {
                  console.error('LinkedIn profile does not exist or is inaccessible:', response.status);
                  return false;
              }
          } catch (error) {
              console.error('Error verifying LinkedIn profile:', error);
              return false;
          }
      } else {
          console.error('Invalid LinkedIn profile URL format');
          return false;
      }
      break;
    
    case 'Codeforces':
      response = await fetch(`https://codeforces.com/api/user.info?handles=${username}`);
      const data = await response.json();
      if (data.status === 'OK') return true;
      break;

    default:
      return false;
  }

  return false;
}

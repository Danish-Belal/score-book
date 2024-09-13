import  prisma  from "@/db/client";



export async function getUserByEmail(email: string) {
     return await prisma.user.findUnique({
       where: { email },
       include: { profile: true } // Include related Scorer profile if needed
     });
   }
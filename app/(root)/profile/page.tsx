import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getUserByEmail } from '@/lib/actions/user.actions';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import UpdateProfile from '../update-profile/page';
import { profilePlatforms } from '@/lib/profilePlatforms';
import Sidebar from '@/components/sidebar';
import NavBar from '@/components/NavBar';

export default async function Profile() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <p className="text-red-500">You must be signed in to view this page.</p>;
  }

  const username = session.user?.name ? session.user.name : session.user?.email;
  const user = await getUserByEmail(session.user?.email);
  const scorerProfile = user?.profile;

  let platforms = null;

  if (scorerProfile) {
    platforms = profilePlatforms(scorerProfile);
  }

  return (
    
    <div className="container mx-auto p-4  min-h-screen bg-gradient-to-b from-white to-slate-500 ">
      <NavBar session={session}/>
      <h1 className="text-4xl font-bold mb-6 text-center bg-red-500">
        Welcome, {username}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <Sidebar />

        {/* Middle to Right: Score Card and Social Platforms */}
        <div className="lg:col-span-4 grid grid-cols-1 gap-6 ">
          {/* Score Card */}
          <Card className="shadow-lg bg-gradient-to-b from-white to-slate-500  text-black mb-6 rounded-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-semibold">User Details</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl">
                <strong>Score:</strong> {scorerProfile?.score || 'N/A'}
              </p>
              <p className="text-xl">
                <strong>Rank:</strong> {scorerProfile?.rank || 'N/A'}
              </p>
              <p className="text-xl">
                <strong>Mobile No:</strong> {scorerProfile?.mobileNumber || 'N/A'}
              </p>
            </CardContent>
          </Card>

          {/* Social Platforms (shorter width, shadow effect) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {scorerProfile ? (
              platforms?.map((profile, index) => (
                profile.username && (
                  <Card
                    key={index}
                    className={`bg-gradient-to-b from-white to-slate-500 text-black shadow-xl hover:shadow-2xl transition-all duration-300 ${profile.bgClass}`}
                    style={{ transform: 'translateY(-10px)' }}  // Lift up effect
                  >
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold mb-2">
                        {profile.platform}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Username: <strong>{profile.username}</strong>
                      </p>
                    </CardContent>
                    <CardFooter>
                      <a 
                        href={profile.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button className="bg-white text-black hover:bg-gray-300 w-full text-sm">
                          Visit {profile.platform} Profile
                        </Button>
                      </a>
                    </CardFooter>
                  </Card>
                )
              ))
            ) : (
              <div className="text-center col-span-3">
                <p className="text-lg mb-4 text-white">No profile found. Please update your profile.</p>
                <UpdateProfile email={session.user.email} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

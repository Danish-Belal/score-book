import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="lg:col-span-1 bg-gradient-to-b from-white to-slate-500 text-black shadow-lg p-4 rounded h-full sticky top-0">
      <h2 className="text-2xl font-bold mb-4">Profile Highlights</h2>
      <ul className="space-y-4 text-xl">
        <li>
          <Link href="/profile/hired-by" className="hover:underline">
            Hired By
          </Link>
        </li>
        <li>
          <Link href="/profile/hackathons" className="hover:underline">
            Hackathons
          </Link>
        </li>
        <li>
          <Link href="/profile/best-performance" className="hover:underline">
            Best Performance
          </Link>
        </li>
        <li>
          <Link href="/profile/projects" className="hover:underline">
            Projects
          </Link>
        </li>
        {/* Add more sidebar items here */}
      </ul>
    </div>
  );
}

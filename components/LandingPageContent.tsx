import FlickeringGrid from "./magicui/flickering-grid"
import { Button } from "./ui/button";

export default function LandingPageContent() {
     return (
       <section className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-slate-500 py-20">

         <div className="text-center max-w-3xl px-4">
           <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
             Welcome to Score-Book
           </h1>
           <p className="text-lg text-gray-600 mb-8">
             Score-Book is the ultimate platform for companies and scorers to manage and track scores. 
             We provide seamless integration between companies and scorers, allowing for real-time updates and efficient score management.
           </p>
           <p className="text-lg text-gray-600 mb-8">
             With our system, companies can monitor their assigned scorers, while scorers can easily log and manage the scores they record.
           </p>
           <div className="flex justify-center space-x-4">
             <Button  >
               Get Started
             </Button>
             <Button >
               Learn More
             </Button>
           </div>
         </div>
         
       </section>
     );
   }
   
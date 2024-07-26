import Image from "next/image";
import { Button } from "@/components/ui/button"



import {
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  MonitorSmartphoneIcon,
  ServerCogIcon,
  ZapIcon,
} from "lucide-react"
import { describe } from "node:test";
import Link from "next/link";

const features = [
  {
    name: "Store your PDF Document",
    description: "Keep all your important PDF files securelystored and easily accessible anytime, anywhere",
    icon:GlobeIcon
  },

  {
    name:"Blazing Fast Responses",
    description:"Experience lightening-fast answers to your queries, ensuring you get the information you need instantly",
    icon:ZapIcon,
  },

  {
    name:"Chat Memorization",
    description: "our intelligent chatbot remembers previous interactions, providing a seamless and personalized experience",
    icon: BrainCogIcon,
  },

  {
    name:"Interactive PDF Viewe",
    description: "Engage with your PDF's like never before using our intuitive and interactive viewer",
    icon:EyeIcon,
  },

  {
    name:"Cloud Backup",
    description:"Rest assured knowing your documents are safely backed up on the cloud, protected from loss or damage",
    icon: ServerCogIcon,
  },

  {
    name:"Responsive Accross Devices",
    description: "Access and chat with your PDF's seamlessly on any device, whether it's your desktop, tablet or smartphone",
    icon:MonitorSmartphoneIcon,
  },
]

export default function Home() {
  return (
    <main className="flex-1 min-h-screen overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-indigo-500">
      <section className="bg-white py-24 sm:py-32 drop-shadow-xl rounded-md">
        <article className="flex flex-col justify-center items-center max-w-7xl mx-auto px-6 sm:px-8">
          <div className="mx-auto max-w-2xl sm:text-center  ">
            <h2 className="text-indigo-600 text-base font-semibold leading-7">Your Interactive Document Companion</h2>
            <p className="font-bold text-3xl sm:text-6xl mt-2 tracking-tight">Transform Your PDFs into Interactive Conversations </p>
            <p className="mt-10 leading-8 text-gray-600">
              Introducing <span className=" font-bold text-indigo-600">chat with PDF</span>
              <br />
              <br />
              Upload your documents, and our chatbot willanswer questions, summarise content and answer all your Qs, ideal for everyone
              <span className="text-indigo-600"> Chat with PDF</span> turns static documents into <span className="font-bold">dynamic conversations</span> enhancing productivity 10x fold effortlessly.
            </p>
          </div>
          <Button asChild className="text-center mt-10">
          <Link href='/dashboard'>Get Started</Link>
         </Button>
         <div className="screenshot relative overflow-hidden">
          <div className="screen max-w-7xl mx-auto px-6 sm:px-8 mt-12">
            <Image src='/images/chatpdf.jpeg'
             alt="screenshot" 
             width={2432}
             height={1442}
             className="shadow-2xl rounded-xl ring-1 ring-gray-900/10 mb-[-0%]"

            //  mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10
             />
             <div aria-hidden="true" className="relative">
              <div className="absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%]"></div>
             </div>
          </div>
         </div>
         <div className=" mx-auto max-w-7xl mt-16 px-6 py-6 lg:px-8 border border-gray-100 rounded-xl ring ring-gray-100/95">
          <dl className=" mx-auto max-w-2xl lg:max-w-none grid grid-cols-1 gap-x-6 gap-y-8 lg:gap-y-16 lg:mx-0 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature)=>(
              <div className="relative pl-9 text-base text-gray-600">
                <dt><feature.icon 
                className="absolute top-1 left-1 text-indigo-600"
                /></dt>
                <dd> 
                  <span className="font-bold">{feature.name}: </span>
                  {feature.description}
                  </dd>
              </div>
            ))}
          </dl>
         </div>
        </article>
      </section>
    </main>
  );
}

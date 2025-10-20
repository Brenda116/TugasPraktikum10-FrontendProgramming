"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type Params = {
  params: { name: string} | Promise<{ name: string }> };

const members: Record<
  string,
  {
    fullName: string;
    role: string;
    bio: string;
    image?: string;
    expertise?: string[];
    quote?: string;
    socials?: { linkedin?: string; github?: string; instagram?: string };
  }
> = {
  brenda: {
    fullName: "Brenda Anastasya",
    role: "CEO",
    bio: "As the CEO of Brend Tech, Brenda leads the company with a strong vision for innovation and sustainable growth. With years of experience in business development and leadership, she has successfully guided Brend Tech to become a forward-thinking technology company that focuses on creating impactful digital solutions for businesses worldwide. Brenda believes in empowering her team and fostering a culture of creativity, excellence, and integrity.",
    image: "/person2.jpeg",
    expertise: ["Leadership 💼", "Innovation 💡", "Strategy 📈"],
    quote: "“Empower people, and the company will thrive.”",
    socials: {
      linkedin: "🌐",
      instagram: "📸",
    },
  },
  ayam: {
    fullName: "Ayam Goreng",
    role: "CTO",
    bio: "Ayam oversees Brend Tech's technology direction and product architecture. With deep expertise in full-stack engineering, he ensures that every project is scalable, secure, and future-proof. Ayam is passionate about innovation, open-source collaboration, and mentoring young developers to push the boundaries of what's possible with technology.",
    image: "/person.png",
    expertise: ["Full Stack 💻", "Cloud ☁️", "DevOps ⚙️"],
    quote: "“Technology evolves, so should we.”",
  },
  sate: {
    fullName: "Sate Taichan",
    role: "Lead Designer",
    bio: "Sate brings art and functionality together through clean, user-centered design. With a background in both UI and UX, she transforms complex requirements into elegant and intuitive interfaces. Her design philosophy revolves around simplicity, emotional engagement, and accessibility for all users.",
    image: "/person.png",
    expertise: ["UI/UX 🎨", "Figma 🖌️", "Design Thinking 💭"],
    quote: "“Design is intelligence made visible.”",
  },
  "jus-mangga": {
    fullName: "Jus Mangga",
    role: "Marketing Specialist",
    bio: "Jus Mangga leads the marketing division with a creative and data-driven approach. She crafts compelling campaigns that connect technology with people, blending storytelling and analytics to build a strong brand identity for Brend Tech. Her passion lies in understanding audience behavior and turning insights into strategies that drive measurable growth.",
    image: "/person.png",
    expertise: ["Marketing 📣", "SEO 🔍", "Branding ✨"],
    quote: "“Data inspires creativity.”",
  },
  "tian-lala-jasmine": {
    fullName: "Tian Lala Jasmine",
    role: "Software Engineer",
    bio: "Tian is a skilled software engineer who specializes in building reliable and efficient systems. Her expertise spans backend infrastructure and modern web technologies. Tian's disciplined approach to problem-solving and commitment to code quality have been instrumental in driving the success of Brend Tech's core products.",
    image: "/person.png",
    expertise: ["Backend ⚙️", "API 🔗", "TypeScript 🧠"],
    quote: "“Clean code, clear mind.”",
  },
  "susu-mbok-darmi-plain": {
    fullName: "Susu Mbok Darmi Plain",
    role: "Finance Manager",
    bio: "Susu ensures Brend Tech's financial health through precision, transparency, and strategic foresight. She manages budgets, analyzes company performance, and provides key insights for long-term growth. Her leadership ensures that every financial decision supports innovation and sustainability.",
    image: "/person.png",
    expertise: ["Finance 💰", "Planning 📊", "Risk Analysis 🧮"],
    quote: "“Numbers tell stories too.”",
  },
  mochi: {
    fullName: "Mochi",
    role: "UX Researcher",
    bio: "Mochi bridges the gap between people and technology by understanding how users interact with digital products. Through in-depth research, interviews, and usability studies, she uncovers insights that shape product design and ensure every experience feels intuitive and delightful.",
    image: "/person.png",
    expertise: ["User Research 🔍", "Accessibility ♿", "Testing 🧪"],
    quote: "“Design begins with empathy.”",
  },
};

export default function TeamMemberPage({ params }: Params) {
  const resolvedParams =
    typeof (params as any).then === "function"
      ? React.use(params as Promise<{ name: string }>)
      : (params as { name: string });
  const key = resolvedParams.name.toLowerCase();
  const member = members[key];

  if (!member) {
    return <p className="text-center text-gray-600 mt-10">Member not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-6 text-center">
      <div className="bg-white/70 backdrop-blur-md rounded-2xl p-10 shadow-xl border border-gray-100 animate-fadeIn">
        <div className="flex flex-col items-center space-y-6">

          <div className="w-40 h-40 relative rounded-full overflow-hidden shadow-lg">
            <Image
              src={member.image || "/person.jpg"}
              alt={member.fullName}
              fill
              className="object-cover"
            />
          </div>

          <h1 className="text-3xl font-bold text-blue-800">{member.fullName}</h1>
          <h2 className="text-lg text-gray-600 font-medium">{member.role}</h2>

          <p className="text-gray-700 leading-relaxed text-justify max-w-2xl mt-4">
            {member.bio}
          </p>

          {member.expertise && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Expertise
              </h3>
              <ul className="flex flex-wrap justify-center gap-3">
                {member.expertise.map((skill) => (
                  <li
                    key={skill}
                    className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {member.quote && (
            <div className="mt-6 italic text-gray-600">{member.quote}</div>
          )}

            <div className="flex space-x-3 mt-4 text-2xl justify-center">
            <div className="relative group">
                <span className="cursor-pointer hover:scale-110 transition-transform">
                🌐
                </span>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Website
                </span>
            </div>

            <div className="relative group">
                <span className="cursor-pointer hover:scale-110 transition-transform">
                📸
                </span>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Instagram
                </span>
            </div>

            <div className="relative group">
                <span className="cursor-pointer hover:scale-110 transition-transform">
                💬
                </span>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                LinkedIn
                </span>
            </div>
            </div>

          <Link
            href="/team"
            className="inline-block mt-8 text-blue-700 hover:underline font-medium"
          >
            ← Back to Team
          </Link>
        </div>
      </div>
    </div>
  );
}

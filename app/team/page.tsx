import Link from "next/link";

const teamMembers = [
  { name: "brenda", fullName: "Brenda Anastasya", role: "CEO" },
  { name: "ayam", fullName: "Ayam Goreng", role: "CTO" },
  { name: "sate", fullName: "Sate Taichan", role: "Lead Designer" },
  { name: "jus-mangga", fullName: "Jus Mangga", role: "Marketing Specialist" },
  { name: "tian-lala-jasmine", fullName: "Tian Lala Jasmine", role: "Software Engineer" },
  { name: "susu-mbok-darmi-plain", fullName: "Susu Mbok Darmi Plain", role: "Finance Manager" },
  { name: "mochi", fullName: "Mochi", role: "UX Researcher" },
];

export default function Team() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-800 mb-6 animate-fadeIn">Our Team</h1>
      <ul className="space-y-4">
        {teamMembers.map((member) => (
          <li key={member.name} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition animate-fadeIn">
            <h2 className="text-xl font-semibold">{member.fullName}</h2>
            <p className="text-gray-600">{member.role}</p>
            <Link
              href={`/team/${member.name}`}
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              View Profile →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
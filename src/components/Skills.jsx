import React from "react";

const skills = [
  { name: "HTML5" }, { name: "CSS" }, { name: "JavaScript" },
  { name: "React.Js" }, { name: "Tailwind CSS" }, { name: "Bootstrap" },
  { name: "Git" }, { name: "Next.Js" }, { name: "Redux (basic)" },
  { name: "MongoDB" }, { name: "Node.Js" }, { name: " Express" },
  { name: "Mongoose" }
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center">Skills</h2>
        <p className="text-center text-gray-600 mt-2">Tools & technologies I use</p>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((s, i) => (
            <div key={i} className="p-4 bg-white rounded-2xl shadow hover:shadow-md text-center transition">
              <span className="font-medium">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

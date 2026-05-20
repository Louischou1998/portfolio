const skillGroups = [
  {
    category: "前端",
    color: "from-indigo-500 to-violet-500",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    skills: ["React", "TypeScript", "Next.js", "HTML / CSS", "JavaScript (ES6+)", "Tailwind CSS"],
  },
  {
    category: "後端",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
    skills: ["C# / ASP.NET Core", "RESTful API", ".NET Framework", "Entity Framework", "SQL Server"],
  },
  {
    category: "資料工程",
    color: "from-cyan-500 to-teal-500",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    skills: ["Python", "Pandas", "NumPy", "Power Automate", "Excel / CSV 處理", "資料清洗與轉換"],
  },
  {
    category: "領域知識",
    color: "from-slate-500 to-slate-600",
    bg: "bg-slate-50",
    border: "border-slate-100",
    skills: ["業務流程分析", "跨部門需求溝通", "GHG Protocol", "LCA 生命週期評估", "Microsoft Sustainability Manager", "Git"],
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-500 font-semibold text-sm uppercase tracking-widest mb-3">About Me</p>
          <h2 className="text-4xl font-bold text-slate-800 mb-6">關於我</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto mb-8" />
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-lg">
            我是一位全端工程師，核心強項在於快速理解業務情境——不只寫程式，更擅長釐清各部門的需求與流程，
            再以技術手段完整落地。曾橫跨 AI 城市服務、智慧製造 MES、ESG 跨部門碳管理等領域，
            能從業務問題出發，設計並交付前後端整合的穩定解決方案。
          </p>
        </div>

        {/* Skills Grid */}
        <div id="skills" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className={`rounded-2xl p-6 ${group.bg} border ${group.border} hover:shadow-md transition-shadow`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-1 h-6 rounded-full bg-gradient-to-b ${group.color}`} />
                <h3 className="font-bold text-slate-700 text-lg">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white rounded-full text-sm text-slate-600 border border-white shadow-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

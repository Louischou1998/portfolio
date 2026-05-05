const projects = [
  {
    id: 1,
    title: "ESG 碳足跡計算系統",
    subtitle: "Microsoft Sustainability Manager 平台",
    gradient: "from-emerald-400 to-teal-500",
    bgLight: "from-emerald-50 to-teal-50",
    border: "border-emerald-100",
    tag: "ESG / 資料工程",
    tagColor: "bg-emerald-100 text-emerald-700",
    description: [
      "於 Microsoft Sustainability Manager 平台設計自動化排程，整合工作流程引擎實現資料定期擷取與處理。",
      "銜接 Python 進行資料前處理，包含缺值處理、格式標準化、異常值過濾、DataFrame 操作與資料聚合。",
      "依據 GHG Protocol 與 LCA 邏輯設計碳排放計算模型，涵蓋原料製造、運輸、使用與廢棄四大生命週期階段。",
    ],
    phases: ["原料製造", "運輸", "組合使用", "廢棄處理"],
    tech: ["Python", "Pandas", "NumPy", "Power Automate", "REST API", "Microsoft Sustainability Manager", "Excel / CSV"],
  },
  {
    id: 2,
    title: "MES 製造執行系統",
    subtitle: "全端 SPA 開發",
    gradient: "from-indigo-400 to-violet-500",
    bgLight: "from-indigo-50 to-violet-50",
    border: "border-indigo-100",
    tag: "Full-Stack / 製造",
    tagColor: "bg-indigo-100 text-indigo-700",
    description: [
      "前端：使用 React 搭配 .NET 框架建構 SPA，規劃元件化架構，開發生產排程看板與製程監控儀表板。",
      "後端：以 C# ASP.NET Core 設計 RESTful API，實作工單管理、製程參數紀錄、異常事件處理等業務邏輯。",
      "完成 Entity Framework / SQL Server 資料存取層設計，確保前後端 API 資料流通順暢。",
    ],
    phases: ["前端 SPA", "RESTful API", "資料庫設計", "UX 優化"],
    tech: ["React", "TypeScript", ".NET", "C#", "ASP.NET Core", "Entity Framework", "SQL Server", "HTML / CSS / JS"],
  },
  {
    id: 3,
    title: "TARS AI 平台",
    subtitle: "智慧城市 AI 應用",
    gradient: "from-violet-400 to-purple-600",
    bgLight: "from-violet-50 to-purple-50",
    border: "border-violet-100",
    tag: "AI / 智慧城市",
    tagColor: "bg-violet-100 text-violet-700",
    description: [
      "中途接手既有 AI 平台，快速 Onboarding 並理解現有程式碼架構，在不影響線上功能的前提下進行修正。",
      "系統性 Bug 排查：分析前端畫面異常、API 回傳錯誤及資料顯示問題，定位根本原因並提交 Hotfix。",
      "協助提升平台整體穩定性與使用者體驗，應用場景涵蓋智慧城市多元 AI 服務。",
    ],
    phases: ["Root Cause Analysis", "Hotfix", "效能優化", "UX 改善"],
    tech: ["React", "TypeScript", "REST API", "Debugging", "Code Reading"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 gradient-bg">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-500 font-semibold text-sm uppercase tracking-widest mb-3">Projects</p>
          <h2 className="text-4xl font-bold text-slate-800 mb-6">專案經歷</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto" />
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`rounded-3xl bg-gradient-to-br ${project.bgLight} border ${project.border} overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="p-8 md:p-10">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${project.tagColor} mb-3`}>
                      {project.tag}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-800">{project.title}</h3>
                    <p className="text-slate-500 mt-1">{project.subtitle}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white font-bold text-lg shrink-0`}>
                    {project.id}
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-6">
                  {project.description.map((point, i) => (
                    <li key={i} className="flex gap-3 text-slate-600 leading-relaxed">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${project.gradient} shrink-0`} />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Phases */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.phases.map((phase) => (
                    <span
                      key={phase}
                      className="px-3 py-1 bg-white/80 rounded-full text-xs font-semibold text-slate-600 border border-white"
                    >
                      {phase}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.gradient} text-white`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    id: 1,
    title: "TARS AI 平台",
    subtitle: "智慧城市 AI 應用",
    gradient: "from-violet-400 to-purple-600",
    bgLight: "from-violet-50 to-purple-50",
    border: "border-violet-100",
    tag: "AI / 智慧城市",
    tagColor: "bg-violet-100 text-violet-700",
    description: [
      "中途接手既有 AI 平台，短時間內 Onboarding、閱讀陌生程式碼架構，在不影響線上服務的前提下快速進入狀況。",
      "系統性 Bug 排查：定位前端畫面異常、API 回傳錯誤及資料顯示問題的根本原因，提交 Hotfix 並驗收。",
      "透過快速理解既有系統設計決策，協助提升平台穩定性與使用者體驗，涵蓋智慧城市多元 AI 應用場景。",
    ],
    phases: ["快速 Onboarding", "Root Cause Analysis", "Hotfix", "UX 改善"],
    tech: ["React", "TypeScript", "REST API", "Debugging", "Code Reading"],
    link: null,
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
    tech: ["React", "TypeScript", ".NET", "C#", "ASP.NET Core", "Entity Framework", "SQL Server"],
    link: null,
  },
  {
    id: 3,
    title: "ESG 碳足跡計算系統",
    subtitle: "跨部門業務整合 × 資料工程",
    gradient: "from-emerald-400 to-teal-500",
    bgLight: "from-emerald-50 to-teal-50",
    border: "border-emerald-100",
    tag: "ESG / 跨域業務",
    tagColor: "bg-emerald-100 text-emerald-700",
    description: [
      "涉及採購、製造、物流、廢棄等多個業務單位的碳排數據收集，需深入理解各部門情境與資料邏輯，擔任業務端（永續部門）與系統端的溝通橋梁。",
      "以 GHG Protocol 國際標準為框架，協助業務人員釐清排放邊界與計算規則，再轉譯為可執行的系統設計與自動化流程。",
      "銜接 Python 進行跨來源資料前處理（缺值、格式標準化、異常過濾），並於 Microsoft Sustainability Manager 平台建立排程與工作流。",
    ],
    phases: ["跨部門業務溝通", "需求轉譯", "資料工程", "自動化流程"],
    tech: ["Python", "Pandas", "NumPy", "Power Automate", "REST API", "Microsoft Sustainability Manager", "GHG Protocol"],
    link: null,
  },
  {
    id: 4,
    title: "命運之眼 · 塔羅占卜",
    subtitle: "AI 占卜師 × 互動體驗網站",
    gradient: "from-fuchsia-500 to-purple-700",
    bgLight: "from-fuchsia-50 to-purple-50",
    border: "border-fuchsia-100",
    tag: "Side Project / AI",
    tagColor: "bg-fuchsia-100 text-fuchsia-700",
    description: [
      "從零設計並開發的 AI 塔羅占卜網站，內建 78 張完整牌組（大小阿爾克納），支援單張、三牌、凱爾特十字等多種牌陣。",
      "前端以純 Vanilla JS 手刻，含 Canvas 星空動畫、洗牌動畫與翻牌 3D 效果；後端以 Node.js/Express 串接 Claude AI，實作 SSE 串流回應。",
      "打造「命運之眼」AI 占卜師角色，能根據實際抽出的牌進行情境化深度解讀，並支援多輪自然語言對話。",
    ],
    phases: ["牌陣設計", "Canvas 動畫", "AI 串流對話", "角色扮演 Prompt"],
    tech: ["Vanilla JS", "Canvas API", "Node.js", "Express", "Claude AI", "SSE", "Railway"],
    link: "https://mystic-tarot-production-9098.up.railway.app/",
  },
  {
    id: 5,
    title: "塔羅阿 POS 系統",
    subtitle: "美髮沙龍全功能管理平台",
    gradient: "from-rose-400 to-pink-500",
    bgLight: "from-rose-50 to-pink-50",
    border: "border-rose-100",
    tag: "Side Project / SaaS",
    tagColor: "bg-rose-100 text-rose-700",
    description: [
      "為實際美髮店設計並開發的全功能 POS 系統，涵蓋預約行事曆、收銀結帳、庫存管理、員工薪資、每日結算、優惠券等完整業務流程。",
      "前端以 React + Ant Design 建構，實作角色權限控管（管理員 / 員工）與 WebSocket 即時同步；後端採 FastAPI + Supabase。",
      "提供公開線上預約入口（/portal），讓客戶自助預約；前後端分別部署於 Vercel 與 Railway。",
    ],
    phases: ["預約系統", "收銀結帳", "庫存管理", "薪資報表"],
    tech: ["React", "Vite", "Ant Design", "FastAPI", "Supabase", "WebSocket", "Vercel", "Railway"],
    link: "https://beauty-pos-peach.vercel.app/",
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

                {/* Tech Stack + Link */}
                <div className="flex flex-wrap items-center justify-between gap-4">
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
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r ${project.gradient} text-white text-sm font-semibold hover:shadow-lg hover:opacity-90 transition-all hover:-translate-y-0.5 shrink-0`}
                    >
                      開啟專案
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

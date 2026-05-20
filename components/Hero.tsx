export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200/40 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-200/40 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-indigo-100 shadow-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-slate-600 font-medium">Full-Stack Developer</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Hi, I&apos;m{" "}
          <span className="gradient-text">周鈺清</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-slate-500 mb-4 font-light">
          從業務情境出發，將複雜流程轉化為可靠的全端系統
        </p>
        <p className="text-base text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          擅長深入理解跨部門業務需求，橫跨 AI 智慧城市、智慧製造 MES、ESG 永續管理等領域，
          以 React・.NET・Python 完整交付從需求到上線的全端解決方案。
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-indigo-200 transition-all hover:-translate-y-0.5"
          >
            查看專案
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold hover:border-indigo-300 hover:shadow-md transition-all hover:-translate-y-0.5"
          >
            聯絡我
          </a>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400">
          <span className="text-xs">Scroll</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-slate-300 to-transparent rounded-full" />
        </div>
      </div>
    </section>
  );
}

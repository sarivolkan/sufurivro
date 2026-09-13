import {
  Search,
  Funnel,
  Database,
  Share2,
  Layers3,
  Clock3,
  BarChart3,
  Network,
  UserRound,
  Settings,
  Eye,
  Zap,
  Link2,
  Server,
} from "lucide-react";

const Check = ({ orange = false }: { orange?: boolean }) => (
  <span
    className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
      orange
        ? "bg-orange-100 text-orange-600"
        : "bg-blue-100 text-blue-700"
    }`}
  >
    ✓
  </span>
);

const MiniIcon = ({
  children,
  orange = false,
}: {
  children: React.ReactNode;
  orange?: boolean;
}) => (
  <div
    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${
      orange
        ? "bg-orange-100 text-orange-500"
        : "bg-blue-100 text-blue-600"
    }`}
  >
    {children}
  </div>
);

const KpiCard = ({
  label,
  value,
  trend,
  orange = false,
}: {
  label: string;
  value: string;
  trend: string;
  orange?: boolean;
}) => (
  <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
    <div className="text-xs text-slate-500">{label}</div>

    <div className="mt-1 text-2xl font-extrabold text-blue-950">
      {value}
    </div>

    <div
      className={`mt-1 text-xs font-bold ${
        orange ? "text-orange-500" : "text-emerald-600"
      }`}
    >
      {trend}
    </div>
  </div>
);

export default function Home() {
  const heroBars = [46, 72, 58, 90, 80, 110, 96, 132, 120, 150];

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="sticky top-0 z-50 border-b border-blue-50 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1450px] items-center justify-between px-6 py-4 lg:px-10">
      <a href="#" className="flex items-center">
  <img
    src="/logo/logo.png"
    alt="SUFURIVRO"
    className="h-[52px] w-auto object-contain"
  />
</a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
            <a href="#product" className="hover:text-blue-600">
              Product
            </a>
              <a
    href="/servicenow-power-bi"
    className="hover:text-blue-600"
  >
    ServiceNow Power BI
  </a>
            <a href="#integrations" className="hover:text-blue-600">
              Integrations
            </a>

            <a href="#reporting" className="hover:text-blue-600">
              Self-Service Reporting
            </a>

            <a href="#dashboards" className="hover:text-blue-600">
              Dashboards
            </a>

            <a href="#features" className="hover:text-blue-600">
              Features
            </a>

            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-orange-600"
          >
            Book a Demo →
          </a>
        </div>
      </header>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        id="product"
        className="sufurivro-gradient relative border-b border-blue-100"
      >
        <div className="soft-grid absolute inset-0 opacity-30" />

        <div className="absolute right-[-150px] top-[-120px] h-[500px] w-[500px] rounded-full bg-blue-300/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1650px] gap-10 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-10 lg:py-24">
          {/* HERO LEFT */}

          <div className="max-w-[700px]">
            <div className="text-[13px] font-extrabold uppercase tracking-[0.34em] text-blue-500">
              Connect · Unify · Report · Optimize
            </div>

          <h1 className="mt-6 font-black leading-[0.98] tracking-[-0.055em] text-[#132b73]">
  <span className="block whitespace-nowrap text-[52px] lg:text-[58px] xl:text-[52px]">
    Turn ITSM Data into
  </span>

  <span className="mt-2 block whitespace-nowrap text-[52px] text-[#2563ff] lg:text-[58px] xl:text-[52px]">
    Actionable Intelligence
  </span>
</h1>

            <p className="mt-7 max-w-[620px] text-[19px] leading-[1.55] text-[#4a5f8f]">
              SUFURIVRO connects your ITSM tools through secure APIs,
              centralizes the data in Microsoft Fabric, and delivers
              self-service reporting and ready-to-use dashboards in Power BI.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex h-[58px] min-w-[230px] items-center justify-center rounded-[14px] bg-gradient-to-r from-[#ff8a1f] to-[#ff6a00] px-8 text-[18px] font-bold text-white shadow-[0_10px_24px_rgba(255,122,26,0.28)] transition hover:-translate-y-0.5"
              >
                Request Demo
                <span className="ml-3 text-[22px]">→</span>
              </a>

              <a
                href="#integrations"
                className="inline-flex h-[58px] min-w-[210px] items-center justify-center rounded-[14px] border-2 border-[#8db7ff] bg-white px-8 text-[18px] font-bold text-[#2563ff] shadow-[0_8px_18px_rgba(37,99,255,0.06)] transition hover:-translate-y-0.5"
              >
                See Platform
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4 text-[15px] font-medium text-[#5c6f98]">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-orange-500">✓</span>
                <span>Complete ITSM integration</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-orange-500">✓</span>
                <span>Self-service reporting</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-orange-500">✓</span>
                <span>Power BI ready</span>
              </div>
            </div>
          </div>

          {/* HERO DASHBOARD */}

          <div className="brand-shadow overflow-hidden rounded-[28px] border border-blue-100 bg-white">
            <div className="grid min-h-[520px] grid-cols-[145px_1fr]">
              <aside className="bg-gradient-to-b from-[#0a2d69] to-[#071f4b] p-4 text-white">
                <div className="flex items-center gap-2 pb-6">
                  <div className="h-7 w-7 rounded-full bg-gradient-to-br from-blue-300 to-orange-400" />

                  <span className="text-sm font-black">SUFURIVRO</span>
                </div>

                <div className="space-y-1.5 text-xs">
                  {[
                    "Overview",
                    "Incidents",
                    "Problems",
                    "Changes",
                    "Requests",
                    "Reports",
                    "Settings",
                  ].map((label, index) => (
                    <div
                      key={label}
                      className={`rounded-lg px-3 py-2.5 ${
                        index === 0
                          ? "bg-blue-500 text-white"
                          : "text-blue-100/80"
                      }`}
                    >
                      {label}
                    </div>
                  ))}
                </div>
              </aside>

              <div className="bg-[#f8fbff] p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-lg font-extrabold text-blue-950">
                      ITSM Overview
                    </div>

                    <div className="text-xs text-slate-500">
                      Real-time insights across all your ITSM data
                    </div>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-[11px] text-slate-500">
                    Last 30 days
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 xl:grid-cols-4">
                  <KpiCard
                    label="Total Incidents"
                    value="1,284"
                    trend="↑ 12%"
                    orange
                  />

                  <KpiCard
                    label="SLA Compliance"
                    value="92.5%"
                    trend="↑ 2.3%"
                  />

                  <KpiCard
                    label="Avg. MTTR"
                    value="4.6h"
                    trend="↓ 18%"
                  />

                  <KpiCard
                    label="Customer Sat."
                    value="4.7/5"
                    trend="↑ 0.4"
                  />
                </div>

                <div className="mt-4 grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
                  <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-bold text-blue-950">
                        Incidents Trend
                      </div>

                      <div className="text-[10px] text-slate-400">
                        Last 6 months
                      </div>
                    </div>

                    <div className="mt-5 flex h-[210px] items-end gap-2">
                      {heroBars.map((height, index) => (
                        <div
                          key={index}
                          className={`flex-1 rounded-t-md ${
                            index === heroBars.length - 1
                              ? "bg-orange-400"
                              : "bg-gradient-to-t from-blue-600 to-blue-300"
                          }`}
                          style={{ height }}
                        />
                      ))}
                    </div>

                    <div className="mt-2 flex justify-between text-[10px] text-slate-400">
                      <span>Jan</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>Apr</span>
                      <span>May</span>
                      <span>Jun</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                    <div className="text-sm font-bold text-blue-950">
                      Incidents by Category
                    </div>

                    <div className="mt-8 flex items-center justify-center">
                      <div className="relative h-44 w-44 rounded-full bg-[conic-gradient(#155eef_0_48%,#4da3ff_48%_68%,#ff8a24_68%_78%,#93c5fd_78%_90%,#dbeafe_90%_100%)]">
                        <div className="absolute inset-[28px] flex items-center justify-center rounded-full bg-white">
                          <div className="text-center">
                            <div className="text-2xl font-black text-blue-950">
                              1,284
                            </div>

                            <div className="text-[11px] text-slate-400">
                              Total
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-2 text-[10px] text-slate-500">
                      <span>● Service Request</span>
                      <span className="text-blue-500">● Incident</span>
                      <span className="text-orange-500">● Problem</span>
                      <span>● Change</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTEGRATION
      ====================================================== */}

      <section id="integrations" className="py-24">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="text-center">
            <div className="text-xs font-black uppercase tracking-[0.26em] text-blue-600">
              Complete Integration. Real Insights.
            </div>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-blue-950 lg:text-5xl">
              End-to-end integration, from source to insight
            </h2>

            <p className="mx-auto mt-4 max-w-4xl text-lg leading-8 text-slate-500">
              SUFURIVRO fully integrates multiple ITSM platforms, ingests data
              automatically, models it in Microsoft Fabric, and exposes it for
              reporting.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-4">
            {/* ITSM SOURCES */}

            <div className="relative">
              <div className="h-full rounded-[28px] border border-blue-100 bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-base font-black text-white">
                    1
                  </div>

                  <MiniIcon>
                    <Server size={22} />
                  </MiniIcon>
                </div>

                <h3 className="text-[19px] font-black text-blue-950">
                  ITSM Sources
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Connect your existing tools
                </p>

                <div className="mt-6 space-y-3">
  {[
    {
      name: "ServiceNow",
      logo: "/logos/servicenow.png",
    },
    {
      name: "Jira Service Management",
      logo: "/logos/jira.svg",
    },
    {
      name: "Freshservice",
      logo: "/logos/freshservice.png",
    },
    {
      name: "BMC Helix",
      logo: "/logos/bmc.svg",
    },
  ].map((item) =>
    item.name === "ServiceNow" ? (
      <a
        key={item.name}
        href="/servicenow-power-bi"
        className="flex items-center gap-3 rounded-xl px-1 py-1.5 transition hover:bg-blue-50"
      >
        <div className="flex h-8 w-8 items-center justify-center">
          <img
            src={item.logo}
            alt={item.name}
            className="h-6 w-6 object-contain"
          />
        </div>

        <span className="text-[15px] font-medium text-slate-700 transition hover:text-blue-600">
          {item.name}
        </span>
      </a>
    ) : (
      <div
        key={item.name}
        className="flex items-center gap-3 rounded-xl px-1 py-1.5"
      >
        <div className="flex h-8 w-8 items-center justify-center">
          <img
            src={item.logo}
            alt={item.name}
            className="h-6 w-6 object-contain"
          />
        </div>

        <span className="text-[15px] text-slate-700">
          {item.name}
        </span>
      </div>
    )
  )}
</div>
              </div>

              <div className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 text-4xl text-blue-500 lg:block">
                →
              </div>
            </div>

            {/* API PIPELINE */}

            <div className="relative">
              <div className="h-full rounded-[28px] border border-blue-100 bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-base font-black text-white">
                    2
                  </div>

                  <MiniIcon>
                    <Database size={22} />
                  </MiniIcon>
                </div>

                <h3 className="text-[19px] font-black text-blue-950">
                  API & Data Pipeline
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Secure and automated ingestion
                </p>

                <div className="mt-6 space-y-4 text-[15px] text-slate-700">
                  {[
                    "Secure API-based integration",
                    "Incremental data loads",
                    "Data validation & enrichment",
                    "Unified data model",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Check />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 text-4xl text-blue-500 lg:block">
                →
              </div>
            </div>

            {/* MICROSOFT FABRIC */}

            <div className="relative">
              <div className="h-full rounded-[28px] border border-blue-100 bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-base font-black text-white">
                    3
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100">
                    <img
                      src="/logos/fabric.png"
                      alt="Microsoft Fabric"
                      className="h-7 w-7 object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-[19px] font-black text-blue-950">
                  Microsoft Fabric
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Centralized and scalable data
                </p>

                <div className="mt-6 space-y-4 text-[15px] text-slate-700">
                  {[
                    "Lakehouse and warehouse",
                    "Scalable and secure",
                    "Business-ready semantic model",
                    "Optimized for analytics",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Check />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 text-4xl text-blue-500 lg:block">
                →
              </div>
            </div>

            {/* POWER BI */}

            <div>
              <div className="h-full rounded-[28px] border border-blue-100 bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-base font-black text-white">
                    4
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-100">
                    <img
                      src="/logos/powerbi.svg"
                      alt="Power BI"
                      className="h-7 w-7 object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-[19px] font-black text-blue-950">
                  Power BI & Self-Service
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Turn data into actionable insights
                </p>

                <div className="mt-6 space-y-4 text-[15px] text-slate-700">
                  {[
                    "Ready-to-use dashboards",
                    "Ad-hoc analysis",
                    "Drill-down to details",
                    "Business user access",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Check />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SELF SERVICE REPORTING
      ====================================================== */}

      <section
        id="reporting"
        className="border-y border-blue-100 bg-[#f7fbff] py-24"
      >
        <div className="mx-auto grid max-w-[1450px] gap-12 px-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:px-10">
          <div>
            <div className="text-xs font-black uppercase tracking-[0.26em] text-blue-600">
              Empower Your Teams
            </div>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-blue-950 lg:text-5xl">
              Self-service reporting for every team
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Give IT managers, service owners, and analysts the freedom to
              create, explore, filter and share insights — without depending
              on manual report building every time.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: <Search size={23} />,
                  title: "Ad-hoc analysis",
                  text: "Explore your data from multiple angles in seconds.",
                },
                {
                  icon: <Funnel size={23} />,
                  title: "Drill-through and filtering",
                  text: "Filter, slice and dive into the details that matter.",
                },
                {
                  icon: <Database size={23} />,
                  title: "Reusable semantic model",
                  text: "Use one governed model for consistent reporting.",
                },
                {
                  icon: <Share2 size={23} />,
                  title: "Shareable Power BI reports",
                  text: "Create, share and collaborate with your team.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"
                >
                  <MiniIcon>{item.icon}</MiniIcon>

                  <h3 className="mt-4 text-base font-black text-blue-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SELF SERVICE UI */}

          <div className="brand-shadow rounded-[28px] border border-blue-100 bg-white p-5">
            <div className="grid gap-4 lg:grid-cols-[140px_1fr]">
              <aside className="rounded-2xl bg-slate-50 p-4">
                <div className="text-sm font-bold text-blue-950">Filters</div>

                {["Date", "ITSM Tool", "Service", "Priority", "Status"].map(
                  (filter, index) => (
                    <div key={filter} className="mt-4">
                      <div className="mb-1 text-[10px] font-semibold text-slate-500">
                        {filter}
                      </div>

                      <div className="rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-[10px] text-slate-500">
                        {index === 0 ? "Last 30 days" : "All"}
                      </div>
                    </div>
                  )
                )}

                <div className="mt-4 text-[10px] font-bold text-blue-600">
                  Clear all filters
                </div>
              </aside>

              <div>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-black text-blue-950">
                    Incident Analysis
                  </div>

                  <div className="flex gap-2">
                    <button className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-[11px] font-semibold text-slate-600">
                      Export
                    </button>

                    <button className="rounded-lg bg-blue-600 px-3 py-2 text-[11px] font-semibold text-white">
                      Share
                    </button>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 xl:grid-cols-4">
                  <KpiCard
                    label="Incidents"
                    value="1,284"
                    trend="↑ 12%"
                    orange
                  />

                  <KpiCard
                    label="SLA Compliance"
                    value="92.5%"
                    trend="↑ 2.3%"
                  />

                  <KpiCard
                    label="Avg. MTTR"
                    value="4.6h"
                    trend="↓ 18%"
                  />

                  <KpiCard
                    label="Open Incidents"
                    value="317"
                    trend="↑ 9%"
                  />
                </div>

                <div className="mt-4 grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
                  <div className="rounded-2xl border border-slate-100 p-4">
                    <div className="text-sm font-bold text-blue-950">
                      Incidents by Month
                    </div>

                    <div className="mt-5 flex h-44 items-end gap-2">
                      {[70, 110, 88, 135, 100, 160, 130, 175, 145].map(
                        (height, index) => (
                          <div
                            key={index}
                            className="flex-1 rounded-t bg-gradient-to-t from-blue-600 to-blue-300"
                            style={{ height }}
                          />
                        )
                      )}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-100 p-4">
                    <div className="text-sm font-bold text-blue-950">
                      Incidents by Priority
                    </div>

                    <div className="mt-6 flex justify-center">
                      <div className="relative h-44 w-44 rounded-full bg-[conic-gradient(#ff8a24_0_20%,#155eef_20%_52%,#4da3ff_52%_78%,#bfdbfe_78%_100%)]">
                        <div className="absolute inset-[29px] flex items-center justify-center rounded-full bg-white">
                          <div className="text-center">
                            <div className="text-xl font-black text-blue-950">
                              1,284
                            </div>

                            <div className="text-[10px] text-slate-400">
                              Total
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURES
      ====================================================== */}

      <section id="features" className="py-24">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="text-xs font-black uppercase tracking-[0.26em] text-blue-600">
            Built for ITSM Analytics
          </div>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-blue-950 lg:text-5xl">
            Everything you need for modern ITSM reporting
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
            {[
              {
                icon: <Layers3 size={22} />,
                title: "Unified Data Model",
                text: "Combine data from all your ITSM tools into one model.",
                orange: true,
              },
              {
                icon: <Clock3 size={22} />,
                title: "SLA & MTTR Tracking",
                text: "Monitor SLA, MTTR and response-time performance.",
              },
              {
                icon: <BarChart3 size={22} />,
                title: "Incident Trend Analysis",
                text: "Identify trends, bottlenecks and improvement opportunities.",
              },
              {
                icon: <Network size={22} />,
                title: "Full Integration Coverage",
                text: "Connect multiple ITSM platforms through secure APIs.",
              },
              {
                icon: <UserRound size={22} />,
                title: "Self-Service Reporting",
                text: "Let business users build and explore reports.",
              },
              {
                icon: <Settings size={22} />,
                title: "Custom KPI Reporting",
                text: "Build the KPIs that matter to your organization.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm"
              >
                <MiniIcon orange={item.orange}>{item.icon}</MiniIcon>

                <h3 className="mt-4 font-black text-blue-950">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          DASHBOARD SECTION
      ====================================================== */}

      <section
        id="dashboards"
        className="bg-gradient-to-br from-white via-blue-50/40 to-blue-100/50 py-24"
      >
        <div className="mx-auto grid max-w-[1450px] gap-12 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:px-10">
          <div>
            <div className="text-xs font-black uppercase tracking-[0.26em] text-blue-600">
              Turn Data Into Better Decisions
            </div>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-blue-950 lg:text-5xl">
              Powerful dashboards
              <span className="block text-blue-600">
                for better decisions
              </span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Get real-time operational visibility across your ITSM
              environment. Monitor SLA performance, analyze incident trends,
              identify backlog patterns and understand service performance —
              all in one place.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-block rounded-xl border border-orange-400 bg-white px-6 py-3 font-bold text-orange-500 hover:bg-orange-50"
            >
              See Dashboards →
            </a>
          </div>

          <div className="brand-shadow rounded-[28px] border border-blue-100 bg-white p-5">
            <div className="flex items-center justify-between">
              <div className="text-lg font-black text-blue-950">
                Service Operations Dashboard
              </div>

              <div className="rounded-lg border border-slate-200 px-3 py-2 text-[10px] text-slate-500">
                Last 30 days
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 xl:grid-cols-4">
              <KpiCard
                label="Total Requests"
                value="3,482"
                trend="↑ 6%"
              />

              <KpiCard
                label="SLA Compliance"
                value="93.1%"
                trend="↑ 2.1%"
              />

              <KpiCard
                label="Average MTTR"
                value="5.2h"
                trend="↓ 24%"
              />

              <KpiCard
                label="Open Backlog"
                value="317"
                trend="↑ 12%"
                orange
              />
            </div>

            <div className="mt-4 grid gap-4 xl:grid-cols-3">
              <div className="rounded-2xl border border-slate-100 p-4">
                <div className="text-sm font-bold text-blue-950">
                  Requests Over Time
                </div>

                <div className="mt-5 flex h-44 items-end gap-2">
                  {[90, 130, 110, 160, 120, 175, 140, 185].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t bg-gradient-to-t from-blue-600 to-blue-300"
                        style={{ height }}
                      />
                    )
                  )}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-100 p-4">
                <div className="text-sm font-bold text-blue-950">
                  Requests by Priority
                </div>

                <div className="mt-5 flex justify-center">
                  <div className="relative h-44 w-44 rounded-full bg-[conic-gradient(#155eef_0_44%,#4da3ff_44%_67%,#ff8a24_67%_80%,#dbeafe_80%_100%)]">
                    <div className="absolute inset-[29px] flex items-center justify-center rounded-full bg-white">
                      <div className="text-center">
                        <div className="text-xl font-black text-blue-950">
                          3,482
                        </div>

                        <div className="text-[10px] text-slate-400">
                          Total
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-100 p-4">
                <div className="text-sm font-bold text-blue-950">
                  SLA Compliance Trend
                </div>

                <div className="relative mt-5 h-44">
                  <div className="absolute inset-0 flex flex-col justify-between">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div
                        key={item}
                        className="border-t border-dashed border-slate-100"
                      />
                    ))}
                  </div>

                  <svg
                    className="absolute inset-0 h-full w-full"
                    viewBox="0 0 300 170"
                  >
                    <polyline
                      points="0,145 50,125 100,120 150,90 200,82 250,55 300,35"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <circle
                      cx="300"
                      cy="35"
                      r="6"
                      fill="#f97316"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ====================================================== */}

      <section className="py-20">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="text-xs font-black uppercase tracking-[0.26em] text-blue-600">
            Real Efficiency. Lasting Impact.
          </div>

          <h2 className="mt-3 text-4xl font-black text-blue-950">
            Why teams choose SUFURIVRO
          </h2>

          <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: <Database size={22} />,
                title: "One source of truth",
                text: "Unify data from all your ITSM tools for consistent and reliable insights.",
              },
              {
                icon: <Zap size={22} />,
                title: "Reduce manual reporting",
                text: "Automate data integration and eliminate manual reporting effort.",
                orange: true,
              },
              {
                icon: <Eye size={22} />,
                title: "Empower self-service analytics",
                text: "Give teams the freedom to explore data and make decisions.",
              },
              {
                icon: <Link2 size={22} />,
                title: "Connect all your ITSM data",
                text: "Complete end-to-end integration across your ITSM ecosystem.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <MiniIcon orange={item.orange}>
                  {item.icon}
                </MiniIcon>

                <div>
                  <div className="font-black text-blue-950">
                    {item.title}
                  </div>

                  <div className="mt-2 text-sm leading-6 text-slate-500">
                    {item.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section id="contact" className="px-6 pb-10 lg:px-10">
        <div className="relative mx-auto max-w-[1450px] overflow-hidden rounded-[28px] bg-gradient-to-r from-[#072a67] via-[#0e57c9] to-[#1877f2] px-8 py-12 text-white lg:px-14">
          <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-xs font-black uppercase tracking-[0.24em] text-blue-200">
                Let&apos;s build a smarter ITSM tomorrow
              </div>

              <h2 className="mt-4 text-4xl font-black">
                Ready to unify your ITSM reporting?
              </h2>

              <p className="mt-4 max-w-3xl text-blue-100">
                Connect your ITSM tools, enable self-service reporting, and
                give your teams a complete view of service performance.
              </p>
            </div>

            <div className="shrink-0">
              <button className="rounded-xl bg-orange-500 px-8 py-4 font-black text-white shadow-lg shadow-orange-900/20 transition hover:-translate-y-0.5 hover:bg-orange-600">
                Schedule a Demo →
              </button>

              <div className="mt-2 text-center text-[11px] text-blue-200">
                No obligation. Just a conversation.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="border-t border-blue-50 bg-white">
        <div className="mx-auto flex max-w-[1450px] flex-col gap-8 px-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="flex items-center">
  <img
    src="/logo/logo.png"
    alt="SUFURIVRO"
    className="h-[44px] w-auto object-contain"
  />
</div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
            <a href="#product">Product</a>
            <a href="#integrations">Integrations</a>
            <a href="#reporting">Reporting</a>
            <a href="#dashboards">Dashboards</a>
            <a href="#features">Features</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="text-xs text-slate-400">
            © 2026 SUFURIVRO by Datamart Information Technologies. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
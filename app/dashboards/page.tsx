import type { Metadata } from "next";
import type { ReactNode } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  Check,
  CircleGauge,
  Database,
  Filter,
  Layers3,
  Monitor,
  MousePointer2,
  PieChart,
  Presentation,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ITSM Dashboards",
  description:
    "Explore ready-to-use ITSM dashboards for incidents, SLA performance, service requests, operations and executive reporting with SUFURIVRO and Microsoft Power BI.",
  alternates: {
    canonical: "https://sufurivro.com/dashboards",
  },
  openGraph: {
    title: "ITSM Dashboards | SUFURIVRO",
    description:
      "Turn ITSM data into clear, actionable and executive-ready dashboards with SUFURIVRO.",
    url: "https://sufurivro.com/dashboards",
    siteName: "SUFURIVRO",
    type: "website",
  },
};

const SmallKpi = ({
  label,
  value,
  trend,
  tone = "blue",
}: {
  label: string;
  value: string;
  trend: string;
  tone?: "blue" | "green" | "purple" | "orange";
}) => {
  const tones = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-emerald-100 text-emerald-600",
    purple: "bg-violet-100 text-violet-600",
    orange: "bg-orange-100 text-orange-600",
  };

  return (
    <div className="rounded-xl border border-blue-100 bg-white p-3 shadow-[0_4px_14px_rgba(20,60,120,.04)]">
      <div className="flex items-center gap-2">
        <div
          className={`flex h-7 w-7 items-center justify-center rounded-lg ${tones[tone]}`}
        >
          <BarChart3 size={14} />
        </div>

        <div className="text-[8px] font-medium text-slate-500">{label}</div>
      </div>

      <div className="mt-2 text-[19px] font-black text-[#102965]">{value}</div>

      <div className="mt-1 text-[8px] font-bold text-emerald-600">{trend}</div>
    </div>
  );
};

const CheckItem = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center gap-2 text-[12px] font-medium text-[#486080]">
    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
      <Check size={13} strokeWidth={3} />
    </div>
    {children}
  </div>
);

const GalleryCard = ({
  title,
  description,
  icon,
  accent,
  children,
}: {
  title: string;
  description: string;
  icon: ReactNode;
  accent: string;
  children: ReactNode;
}) => (
  <div className="overflow-hidden rounded-[18px] border border-blue-100 bg-white shadow-[0_6px_20px_rgba(20,60,120,.035)]">
    <div className="h-[150px] bg-[#f8fbff] p-3">{children}</div>

    <div className="p-5">
      <div className="flex items-start gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${accent}`}
        >
          {icon}
        </div>

        <div>
          <h3 className="text-[15px] font-black text-[#102965]">{title}</h3>

          <p className="mt-1 text-[12px] leading-5 text-[#607690]">
            {description}
          </p>

          <a
            href="#stakeholders"
            className="mt-3 inline-flex items-center gap-2 text-[12px] font-bold text-blue-600"
          >
            Explore
            <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default function DashboardsPage() {
  const heroBars = [46, 75, 58, 92, 78, 108, 94, 135];
  const dailyBars = [55, 88, 72, 110, 94, 125, 82, 138];
  const businessBars = [96, 88, 81, 72, 65];

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* =====================================================
          SHARED HEADER
      ====================================================== */}

      <Header active="dashboards" />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-white via-[#f3f9ff] to-[#dceeff]">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37,99,235,.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37,99,235,.035) 1px, transparent 1px)
            `,
            backgroundSize: "34px 34px",
          }}
        />

        <div className="absolute -left-[160px] top-[90px] h-[400px] w-[400px] rounded-full bg-blue-200/25 blur-3xl" />

        <div className="absolute -right-[120px] top-[20px] h-[420px] w-[420px] rounded-full bg-blue-300/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1500px] gap-12 px-6 py-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:px-10 lg:py-16">
          {/* LEFT */}

          <div className="max-w-[610px]">
            <div className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-600">
              Turn Data Into a Brighter Tomorrow
            </div>

            <h1 className="mt-5 font-black leading-[0.98] tracking-[-0.055em] text-[#102965]">
              <span className="block text-[53px] lg:text-[30px]">
                Dashboards That Turn ITSM Data Into Clarity
              </span>

          <span className="mt-2 block whitespace-nowrap text-[34px] text-[#2563ff] lg:text-[29px]">
                Beautiful. Actionable. Executive-Ready.
              </span>
            </h1>

            <p className="mt-6 max-w-[600px] text-[16px] leading-[1.65] text-[#526a91]">
              SUFURIVRO delivers ready-to-use dashboards in Power BI for
              incidents, SLA, service requests, trends, operations, and
              executive reporting — so you can make faster, smarter decisions.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="#dashboard-gallery"
                className="inline-flex h-[54px] min-w-[205px] items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-7 text-[14px] font-bold text-white shadow-[0_12px_26px_rgba(249,115,22,.25)] transition hover:-translate-y-0.5"
              >
                See Dashboard Gallery
                <ArrowRight size={16} />
              </a>

            <a
  href="/book-a-demo"
  className="inline-flex min-w-[215px] items-center justify-center gap-3 rounded-xl bg-orange-500 px-8 py-4 text-[14px] font-bold text-white shadow-lg shadow-blue-950/20 transition hover:-translate-y-0.5 hover:bg-orange-600"
>
  Book a Demo
  <ArrowRight size={16} />
</a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-4">
              <CheckItem>Executive-ready dashboards</CheckItem>
              <CheckItem>Drill-down analytics</CheckItem>
              <CheckItem>Power BI built</CheckItem>
              <CheckItem>Fast time to value</CheckItem>
            </div>
          </div>

          {/* =====================================================
              HERO EXECUTIVE DASHBOARD
          ====================================================== */}

          <div className="relative">
            <div className="overflow-hidden rounded-[20px] border border-blue-100 bg-white shadow-[0_30px_70px_rgba(27,64,110,.18)]">
              <div className="grid min-h-[455px] grid-cols-[125px_1fr]">
                {/* SIDEBAR */}

                <aside className="bg-gradient-to-b from-[#092b62] to-[#071e47] p-3 text-white">
                  <div className="flex items-center gap-2 border-b border-blue-800 pb-4">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 font-black">
                      S
                    </div>

                    <span className="text-[10px] font-black">SUFURIVRO</span>
                  </div>

                  <div className="mt-4 space-y-1 text-[8px]">
                    {[
                      "Overview",
                      "Incidents",
                      "Service Requests",
                      "SLA",
                      "Changes",
                      "Problems",
                      "Assets",
                      "Reports",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className={`rounded-md px-2 py-2 ${
                          index === 0
                            ? "bg-blue-600 text-white"
                            : "text-blue-100/80"
                        }`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 border-t border-blue-800 pt-3">
                    <div className="text-[8px] font-black text-white">
                      Filters
                    </div>

                    {["Date Range", "Service", "Group", "Priority"].map(
                      (item) => (
                        <div key={item} className="mt-3">
                          <div className="mb-1 text-[6px] text-blue-200">
                            {item}
                          </div>

                          <div className="rounded-md border border-blue-700 bg-blue-950/50 px-2 py-1.5 text-[7px] text-blue-100">
                            All⌄
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </aside>

                {/* CONTENT */}

                <div className="bg-[#f8fbff] p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-[15px] font-black text-[#102965]">
                        ITSM Executive Overview
                      </div>

                      <div className="text-[8px] text-slate-400">
                        From insights to impact
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <div className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-[7px] text-slate-500">
                        Last 30 days⌄
                      </div>

                      <div className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-[7px] text-slate-500">
                        All Services⌄
                      </div>
                    </div>
                  </div>

                  {/* KPIS */}

                  <div className="mt-3 grid grid-cols-4 gap-2">
                    <SmallKpi
                      label="Total Incidents"
                      value="1,248"
                      trend="↑ 12%"
                      tone="blue"
                    />

                    <SmallKpi
                      label="Resolved"
                      value="1,102"
                      trend="↑ 8%"
                      tone="green"
                    />

                    <SmallKpi
                      label="SLA Compliance"
                      value="94.2%"
                      trend="↑ 2.1%"
                      tone="purple"
                    />

                    <SmallKpi
                      label="Avg. Resolution Time"
                      value="4.6 hrs"
                      trend="↓ 20%"
                      tone="orange"
                    />
                  </div>

                  {/* ROW 1 */}

                  <div className="mt-3 grid gap-3 lg:grid-cols-[1.45fr_.8fr]">
                    <div className="rounded-xl border border-blue-100 bg-white p-3">
                      <div className="text-[9px] font-black text-[#102965]">
                        Incident Volume Trend
                      </div>

                      <div className="relative mt-3 h-[120px]">
                        <div className="absolute inset-0 flex flex-col justify-between">
                          {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="border-t border-slate-100" />
                          ))}
                        </div>

                        <svg
                          viewBox="0 0 400 120"
                          className="absolute inset-0 h-full w-full"
                        >
                          <polyline
                            points="0,92 35,85 70,66 105,77 140,60 175,68 210,49 245,28 280,43 315,66 350,52 400,71"
                            fill="none"
                            stroke="#2563eb"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />

                          {[
                            [0, 92],
                            [70, 66],
                            [140, 60],
                            [210, 49],
                            [245, 28],
                            [315, 66],
                            [400, 71],
                          ].map(([x, y]) => (
                            <circle
                              key={`${x}-${y}`}
                              cx={x}
                              cy={y}
                              r="4"
                              fill="#2563eb"
                            />
                          ))}
                        </svg>

                        <div className="absolute left-[57%] top-[3px] rounded-md bg-[#102965] px-2 py-1 text-[6px] font-bold text-white">
                          Peak
                          <br />
                          186 incidents
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-blue-100 bg-white p-3">
                      <div className="text-[9px] font-black text-[#102965]">
                        Incidents by Priority
                      </div>

                      <div className="mt-4 flex items-center gap-5">
                        <div className="relative h-[105px] w-[105px] shrink-0 rounded-full bg-[conic-gradient(#e54b4b_0_12%,#ff7a22_12%_40%,#f9c74f_40%_82%,#2f80ed_82%_100%)]">
                          <div className="absolute inset-[22px] flex items-center justify-center rounded-full bg-white">
                            <div className="text-center">
                              <div className="text-[17px] font-black text-[#102965]">
                                1,248
                              </div>
                              <div className="text-[6px] text-slate-400">
                                Total
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="w-full space-y-2 text-[7px] text-slate-500">
                          {[
                            ["Critical", "12%"],
                            ["High", "28%"],
                            ["Medium", "42%"],
                            ["Low", "18%"],
                          ].map(([name, value]) => (
                            <div
                              key={name}
                              className="flex justify-between gap-3"
                            >
                              <span>{name}</span>
                              <span className="font-bold">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ROW 2 */}

                  <div className="mt-3 grid gap-3 lg:grid-cols-2">
                    <div className="rounded-xl border border-blue-100 bg-white p-3">
                      <div className="text-[9px] font-black text-[#102965]">
                        Top 5 Services by Incidents
                      </div>

                      <div className="mt-3 space-y-2">
                        {[
                          ["Email", 95, "320"],
                          ["Applications", 82, "278"],
                          ["Network", 60, "198"],
                          ["Hardware", 51, "168"],
                          ["Access Management", 43, "142"],
                        ].map(([name, width, value]) => (
                          <div key={name as string}>
                            <div className="flex items-center gap-3">
                              <span className="w-[75px] text-[6px] text-slate-500">
                                {name}
                              </span>

                              <div className="h-2 flex-1 rounded bg-blue-50">
                                <div
                                  className="h-2 rounded bg-gradient-to-r from-blue-500 to-blue-300"
                                  style={{ width: `${width}%` }}
                                />
                              </div>

                              <span className="w-6 text-right text-[6px] font-bold text-slate-500">
                                {value}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-xl border border-blue-100 bg-white p-3">
                      <div className="text-[9px] font-black text-[#102965]">
                        Resolution Time Trend
                      </div>

                      <div className="relative mt-3 h-[100px]">
                        <svg
                          viewBox="0 0 350 100"
                          className="absolute inset-0 h-full w-full"
                        >
                          <polyline
                            points="0,20 30,45 65,53 100,40 135,67 170,61 205,69 240,57 275,76 310,68 350,84"
                            fill="none"
                            stroke="#2563eb"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>

                        <div className="absolute right-[8px] top-[5px] rounded-md bg-[#102965] px-2 py-1 text-[7px] font-bold text-white">
                          4.6 hrs
                          <br />
                          <span className="text-emerald-300">↓20%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT HAND NOTE */}

            <div className="absolute -right-[142px] top-[65px] hidden xl:block">
              <div className="rotate-[-4deg] text-[15px] font-semibold italic leading-5 text-blue-600">
                Transform
                <br />
                ITSM data
                <br />
                into what
                <br />
                matters...
              </div>

              <div className="mt-9 space-y-5">
                {[
                  ["People", <UsersRound size={16} />],
                  ["Process", <CircleGauge size={16} />],
                  ["Performance", <BarChart3 size={16} />],
                  ["A Brighter Tomorrow", <Presentation size={16} />],
                ].map(([name, icon]) => (
                  <div
                    key={name as string}
                    className="flex max-w-[130px] items-center gap-3 text-[11px] font-semibold text-blue-600"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100">
                      {icon}
                    </div>

                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DASHBOARD COLLECTIONS
      ====================================================== */}

     <section id="dashboard-gallery" className="py-14">
  <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
    <div className="flex items-end justify-between">
      <div>
        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">
          Curated for Real Impact
        </div>

        <h2 className="mt-2 text-[31px] font-black text-[#102965]">
          Explore Dashboard Collections
        </h2>
      </div>

      <a
        href="#stakeholders"
        className="hidden items-center gap-2 text-[12px] font-bold text-blue-600 md:flex"
      >
        View All Dashboards
        <ArrowRight size={14} />
      </a>
    </div>

    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

      {/* =====================================================
          INCIDENT MANAGEMENT
      ====================================================== */}

      <div className="overflow-hidden rounded-[18px] border border-blue-100 bg-white shadow-[0_10px_30px_rgba(20,60,120,.06)]">
        <div className="h-[185px] bg-[#f7fbff] p-3">
          <div className="grid h-full grid-cols-[62px_1fr] overflow-hidden rounded-xl border border-blue-100 bg-white">
            <aside className="bg-gradient-to-b from-[#0a2e64] to-[#071f49] p-2">
              <div className="mb-3 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-[8px] font-black text-white">
                S
              </div>

              <div className="space-y-2">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className={`h-2 rounded ${
                      item === 1 ? "bg-blue-400" : "bg-blue-900"
                    }`}
                  />
                ))}
              </div>
            </aside>

            <div className="p-3">
              <div className="flex items-center justify-between">
                <div className="text-[7px] font-black text-[#102965]">
                  Incident Management
                </div>

                <div className="rounded border border-slate-200 px-2 py-1 text-[5px] text-slate-400">
                  Last 30 days
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2">
                {[
                  ["1,248", "Incidents"],
                  ["892", "Resolved"],
                  ["4.6h", "MTTR"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-md border border-blue-100 bg-[#fbfdff] p-2"
                  >
                    <div className="text-[9px] font-black text-[#102965]">
                      {value}
                    </div>
                    <div className="mt-1 text-[5px] text-slate-400">
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 grid grid-cols-[1.25fr_.75fr] gap-2">
                <div className="rounded-lg border border-blue-100 p-2">
                  <div className="text-[5px] font-bold text-[#102965]">
                    Incident Trend
                  </div>

                  <div className="mt-2 flex h-[67px] items-end gap-1">
                    {[24, 38, 31, 52, 44, 63, 56, 78].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-gradient-to-t from-blue-600 to-blue-300"
                        style={{ height: h }}
                      />
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-blue-100 p-2">
                  <div className="text-[5px] font-bold text-[#102965]">
                    Priority
                  </div>

                  <div className="mt-2 flex justify-center">
                    <div className="relative h-[58px] w-[58px] rounded-full bg-[conic-gradient(#ef4444_0_15%,#f97316_15%_40%,#facc15_40%_78%,#2563eb_78%_100%)]">
                      <div className="absolute inset-[13px] rounded-full bg-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <BarChart3 size={19} />
            </div>

            <div>
              <h3 className="text-[15px] font-black text-[#102965]">
                Incident Management Dashboard
              </h3>

              <p className="mt-1 text-[12px] leading-5 text-[#607690]">
                Get full visibility into incident volume, resolution time, and
                trends.
              </p>

              <a
                href="#stakeholders"
                className="mt-3 inline-flex items-center gap-2 text-[12px] font-bold text-blue-600"
              >
                Explore
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          SLA PERFORMANCE
      ====================================================== */}

      <div className="overflow-hidden rounded-[18px] border border-blue-100 bg-white shadow-[0_10px_30px_rgba(20,60,120,.06)]">
        <div className="h-[185px] bg-[#f7fbff] p-3">
          <div className="grid h-full grid-cols-[62px_1fr] overflow-hidden rounded-xl border border-blue-100 bg-white">
            <aside className="bg-gradient-to-b from-[#0a2e64] to-[#071f49] p-2">
              <div className="mb-3 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-[8px] font-black text-white">
                S
              </div>

              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div
                    key={item}
                    className={`h-2 rounded ${
                      item === 2 ? "bg-emerald-400" : "bg-blue-900"
                    }`}
                  />
                ))}
              </div>
            </aside>

            <div className="p-3">
              <div className="flex items-center justify-between">
                <div className="text-[7px] font-black text-[#102965]">
                  SLA Performance
                </div>

                <div className="rounded border border-slate-200 px-2 py-1 text-[5px] text-slate-400">
                  All services
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2">
                {[
                  ["94.2%", "Compliance"],
                  ["37", "Breaches"],
                  ["2.1%", "Improvement"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-md border border-emerald-100 bg-[#fbfffd] p-2"
                  >
                    <div className="text-[9px] font-black text-[#102965]">
                      {value}
                    </div>
                    <div className="mt-1 text-[5px] text-slate-400">
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 grid grid-cols-[.8fr_1.2fr] gap-2">
                <div className="rounded-lg border border-blue-100 p-2">
                  <div className="text-[5px] font-bold text-[#102965]">
                    SLA Compliance
                  </div>

                  <div className="mt-2 flex justify-center">
                    <div className="relative h-[64px] w-[64px] rounded-full bg-[conic-gradient(#10b981_0_94%,#d1fae5_94%_100%)]">
                      <div className="absolute inset-[14px] flex items-center justify-center rounded-full bg-white text-[9px] font-black text-[#102965]">
                        94.2%
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-blue-100 p-2">
                  <div className="text-[5px] font-bold text-[#102965]">
                    Compliance by Month
                  </div>

                  <div className="mt-2 flex h-[68px] items-end gap-1">
                    {[43, 55, 62, 58, 72, 79, 86].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-gradient-to-t from-blue-600 to-blue-300"
                        style={{ height: h }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
              <ShieldCheck size={19} />
            </div>

            <div>
              <h3 className="text-[15px] font-black text-[#102965]">
                SLA Performance Dashboard
              </h3>

              <p className="mt-1 text-[12px] leading-5 text-[#607690]">
                Track SLA compliance, breaches, and performance by service.
              </p>

              <a
                href="#stakeholders"
                className="mt-3 inline-flex items-center gap-2 text-[12px] font-bold text-blue-600"
              >
                Explore
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          SERVICE REQUEST
      ====================================================== */}

      <div className="overflow-hidden rounded-[18px] border border-blue-100 bg-white shadow-[0_10px_30px_rgba(20,60,120,.06)]">
        <div className="h-[185px] bg-[#f7fbff] p-3">
          <div className="grid h-full grid-cols-[62px_1fr] overflow-hidden rounded-xl border border-blue-100 bg-white">
            <aside className="bg-gradient-to-b from-[#0a2e64] to-[#071f49] p-2">
              <div className="mb-3 flex h-5 w-5 items-center justify-center rounded-full bg-violet-500 text-[8px] font-black text-white">
                S
              </div>

              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div
                    key={item}
                    className={`h-2 rounded ${
                      item === 3 ? "bg-violet-400" : "bg-blue-900"
                    }`}
                  />
                ))}
              </div>
            </aside>

            <div className="p-3">
              <div className="flex items-center justify-between">
                <div className="text-[7px] font-black text-[#102965]">
                  Service Request Analysis
                </div>

                <div className="rounded border border-slate-200 px-2 py-1 text-[5px] text-slate-400">
                  Last 30 days
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2">
                {[
                  ["2,917", "Requests"],
                  ["88%", "Fulfilled"],
                  ["3.1h", "Avg. Time"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-md border border-violet-100 bg-violet-50/30 p-2"
                  >
                    <div className="text-[9px] font-black text-[#102965]">
                      {value}
                    </div>
                    <div className="mt-1 text-[5px] text-slate-400">
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 rounded-lg border border-violet-100 p-2">
                <div className="text-[5px] font-bold text-[#102965]">
                  Request Volume
                </div>

                <div className="mt-2 flex h-[74px] items-end gap-1">
                  {[28, 44, 38, 57, 69, 61, 79, 92].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-violet-600 to-violet-300"
                      style={{ height: h }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
              <Layers3 size={19} />
            </div>

            <div>
              <h3 className="text-[15px] font-black text-[#102965]">
                Service Request Dashboard
              </h3>

              <p className="mt-1 text-[12px] leading-5 text-[#607690]">
                Monitor request volumes, fulfillment times, and service demand.
              </p>

              <a
                href="#stakeholders"
                className="mt-3 inline-flex items-center gap-2 text-[12px] font-bold text-blue-600"
              >
                Explore
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          EXECUTIVE OVERVIEW
      ====================================================== */}

      <div className="overflow-hidden rounded-[18px] border border-blue-100 bg-white shadow-[0_10px_30px_rgba(20,60,120,.06)]">
        <div className="h-[185px] bg-[#f7fbff] p-3">
          <div className="grid h-full grid-cols-[62px_1fr] overflow-hidden rounded-xl border border-blue-100 bg-white">
            <aside className="bg-gradient-to-b from-[#0a2e64] to-[#071f49] p-2">
              <div className="mb-3 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[8px] font-black text-white">
                S
              </div>

              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div
                    key={item}
                    className={`h-2 rounded ${
                      item === 1 ? "bg-orange-400" : "bg-blue-900"
                    }`}
                  />
                ))}
              </div>
            </aside>

            <div className="p-3">
              <div className="flex items-center justify-between">
                <div className="text-[7px] font-black text-[#102965]">
                  Executive Overview
                </div>

                <div className="rounded border border-slate-200 px-2 py-1 text-[5px] text-slate-400">
                  Enterprise
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2">
                {[
                  ["94.2%", "SLA"],
                  ["4.6h", "Resolution"],
                  ["92%", "Satisfaction"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-md border border-orange-100 bg-orange-50/30 p-2"
                  >
                    <div className="text-[9px] font-black text-[#102965]">
                      {value}
                    </div>
                    <div className="mt-1 text-[5px] text-slate-400">
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 grid grid-cols-[.7fr_.7fr_1fr] gap-2">
                <div className="rounded-lg border border-blue-100 p-2">
                  <div className="flex h-full items-center justify-center">
                    <div className="relative h-[58px] w-[58px] rounded-full bg-[conic-gradient(#2563eb_0_76%,#f97316_76%_100%)]">
                      <div className="absolute inset-[13px] rounded-full bg-white" />
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-blue-100 p-2">
                  <div className="flex h-full items-center justify-center">
                    <div className="relative h-[58px] w-[58px] rounded-full bg-[conic-gradient(#10b981_0_84%,#d1fae5_84%_100%)]">
                      <div className="absolute inset-[13px] rounded-full bg-white" />
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-blue-100 p-2">
                  <div className="space-y-2">
                    {[
                      ["Finance", 92],
                      ["Operations", 78],
                      ["HR", 69],
                      ["Sales", 58],
                    ].map(([name, width]) => (
                      <div key={name as string}>
                        <div className="mb-1 text-[5px] text-slate-400">
                          {name}
                        </div>

                        <div className="h-1.5 rounded bg-blue-50">
                          <div
                            className="h-1.5 rounded bg-blue-500"
                            style={{ width: `${width}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
              <BriefcaseBusiness size={19} />
            </div>

            <div>
              <h3 className="text-[15px] font-black text-[#102965]">
                Executive Overview Dashboard
              </h3>

              <p className="mt-1 text-[12px] leading-5 text-[#607690]">
                A high-level view of ITSM performance for leadership.
              </p>

              <a
                href="#stakeholders"
                className="mt-3 inline-flex items-center gap-2 text-[12px] font-bold text-blue-600"
              >
                Explore
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* =====================================================
          STAKEHOLDER DASHBOARDS
      ====================================================== */}

      <section
        id="stakeholders"
        className="border-y border-blue-100 bg-[#fbfdff] py-14"
      >
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">
              Different Perspectives. A Clearer Picture.
            </div>

            <h2 className="mt-2 text-[31px] font-black text-[#102965]">
              Built for Every Stakeholder
            </h2>
          </div>

          <div className="mt-8 grid gap-5 xl:grid-cols-3">
            {/* SERVICE DESK */}

            <div className="rounded-[18px] border border-blue-100 bg-white p-3 shadow-sm">
              <div className="flex items-start gap-3 px-2 pb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <Monitor size={20} />
                </div>

                <div>
                  <h3 className="text-[16px] font-black text-[#102965]">
                    Service Desk Managers
                  </h3>

                  <p className="text-[10px] text-[#607690]">
                    Day-to-day operational insights to keep your services
                    running smoothly.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-blue-100 bg-[#fbfdff] p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-black text-[#102965]">
                      Service Desk Operations
                    </div>

                    <div className="text-[7px] text-slate-400">
                      Resolve faster. Keep users productive.
                    </div>
                  </div>

                  <div className="rounded-md border border-slate-200 bg-white px-2 py-1 text-[6px] text-slate-500">
                    Last 30 days⌄
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-4 gap-2">
                  <SmallKpi
                    label="Total Incidents"
                    value="1,248"
                    trend="↑12%"
                  />
                  <SmallKpi
                    label="Resolved"
                    value="892"
                    trend="↑6%"
                    tone="green"
                  />
                  <SmallKpi
                    label="Avg. Resolution"
                    value="4.6 hrs"
                    trend="↓28%"
                    tone="blue"
                  />
                  <SmallKpi
                    label="SLA Compliance"
                    value="94.2%"
                    trend="↑2.1%"
                    tone="green"
                  />
                </div>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-[7px] font-black text-[#102965]">
                      Incidents by Category
                    </div>

                    <div className="mt-3 space-y-2">
                      {[
                        ["Access", 90],
                        ["Software", 82],
                        ["Hardware", 65],
                        ["Network", 52],
                        ["Other", 40],
                      ].map(([name, width]) => (
                        <div key={name as string}>
                          <div className="flex items-center gap-2">
                            <span className="w-10 text-[5px] text-slate-500">
                              {name}
                            </span>

                            <div className="h-1.5 flex-1 rounded bg-blue-50">
                              <div
                                className="h-1.5 rounded bg-blue-500"
                                style={{ width: `${width}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-[7px] font-black text-[#102965]">
                      Daily Incident Trend
                    </div>

                    <div className="mt-3 flex h-[90px] items-end gap-2">
                      {dailyBars.map((height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t bg-gradient-to-t from-blue-600 to-blue-300"
                          style={{ height }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* IT LEADERS */}

            <div className="rounded-[18px] border border-blue-100 bg-white p-3 shadow-sm">
              <div className="flex items-start gap-3 px-2 pb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <UsersRound size={20} />
                </div>

                <div>
                  <h3 className="text-[16px] font-black text-[#102965]">
                    IT Leaders
                  </h3>

                  <p className="text-[10px] text-[#607690]">
                    Strategic insights to optimize performance and drive value.
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-[#0b2b58] to-[#061c3d] p-3 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-black">
                      ITSM Performance & Value
                    </div>

                    <div className="text-[7px] text-blue-200">
                      People. Process. Performance. A Brighter Tomorrow.
                    </div>
                  </div>

                  <div className="rounded-md bg-blue-950 px-2 py-1 text-[6px] text-blue-200">
                    Last 90 days⌄
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-4 gap-2">
                  {[
                    ["94.2%", "SLA Compliance"],
                    ["4.6 hrs", "Avg. Resolution Time"],
                    ["12%", "Incidents Reduced"],
                    ["$320K", "Annual Cost Savings"],
                  ].map(([value, label]) => (
                    <div
                      key={label}
                      className="rounded-lg border border-blue-800 bg-blue-950/55 p-3"
                    >
                      <div className="text-[14px] font-black">{value}</div>
                      <div className="mt-1 text-[6px] text-blue-200">
                        {label}
                      </div>
                      <div className="mt-1 text-[6px] font-bold text-emerald-400">
                        ↑ positive
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-3 grid grid-cols-[1.2fr_.8fr] gap-3">
                  <div>
                    <div className="text-[7px] font-black">
                      Service Performance by Business Unit
                    </div>

                    <div className="mt-3 space-y-2">
                      {["Finance", "HR", "IT", "Operations", "Sales"].map(
                        (name, index) => (
                          <div
                            key={name}
                            className="flex items-center gap-2"
                          >
                            <span className="w-10 text-[5px] text-blue-200">
                              {name}
                            </span>

                            <div className="h-2 flex-1 rounded bg-blue-950">
                              <div
                                className="h-2 rounded bg-cyan-400"
                                style={{
                                  width: `${businessBars[index]}%`,
                                }}
                              />
                            </div>

                            <span className="text-[5px] text-blue-200">
                              {businessBars[index]}%
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="text-[7px] font-black">
                      Incidents by Impact
                    </div>

                    <div className="mt-3 flex justify-center">
                      <div className="relative h-[100px] w-[100px] rounded-full bg-[conic-gradient(#06b6d4_0_18%,#fbbf24_18%_60%,#f97316_60%_88%,#ef4444_88%_100%)]">
                        <div className="absolute inset-[23px] flex items-center justify-center rounded-full bg-[#0b2b58]">
                          <div className="text-center">
                            <div className="text-[14px] font-black">1,248</div>
                            <div className="text-[5px] text-blue-200">Total</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BUSINESS */}

            <div className="rounded-[18px] border border-blue-100 bg-white p-3 shadow-sm">
              <div className="flex items-start gap-3 px-2 pb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <BriefcaseBusiness size={20} />
                </div>

                <div>
                  <h3 className="text-[16px] font-black text-[#102965]">
                    Business Stakeholders
                  </h3>

                  <p className="text-[10px] text-[#607690]">
                    Clear, visual insights that show the business impact of IT.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-blue-100 bg-[#fbfdff] p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-black text-[#102965]">
                      Business Impact Overview
                    </div>

                    <div className="text-[7px] text-slate-400">
                      ITSM enabling a more productive business.
                    </div>
                  </div>

                  <div className="rounded-md border border-slate-200 bg-white px-2 py-1 text-[6px] text-slate-500">
                    Last 30 days⌄
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-4 gap-2">
                  {[
                    ["99.8%", "Service Availability"],
                    ["4.6 hrs", "User Wait Time"],
                    ["92%", "User Satisfaction"],
                    ["$320K", "Business Value"],
                  ].map(([value, label]) => (
                    <div
                      key={label}
                      className="rounded-lg border border-blue-100 bg-white p-3"
                    >
                      <div className="text-[13px] font-black text-[#102965]">
                        {value}
                      </div>
                      <div className="mt-1 text-[6px] text-slate-500">
                        {label}
                      </div>
                      <div className="mt-1 text-[6px] font-bold text-emerald-600">
                        ↑ positive
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-[7px] font-black text-[#102965]">
                      IT Service Demand vs. Business Growth
                    </div>

                    <div className="relative mt-4 h-[90px]">
                      <svg
                        viewBox="0 0 300 100"
                        className="absolute inset-0 h-full w-full"
                      >
                        <polyline
                          points="0,80 50,68 100,62 150,49 200,55 250,34 300,25"
                          fill="none"
                          stroke="#2563eb"
                          strokeWidth="3"
                        />

                        <polyline
                          points="0,90 50,79 100,74 150,63 200,60 250,47 300,39"
                          fill="none"
                          stroke="#60a5fa"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <div className="text-[7px] font-black text-[#102965]">
                      Top Business Services
                    </div>

                    <div className="mt-3 space-y-2">
                      {[
                        ["Email & Collaboration", 96],
                        ["Core Applications", 82],
                        ["Network & Connectivity", 76],
                        ["Employee Services", 68],
                        ["Security Services", 54],
                      ].map(([name, width]) => (
                        <div key={name as string}>
                          <div className="flex items-center gap-2">
                            <span className="w-[80px] text-[5px] text-slate-500">
                              {name}
                            </span>

                            <div className="h-1.5 flex-1 rounded bg-blue-50">
                              <div
                                className="h-1.5 rounded bg-blue-500"
                                style={{ width: `${width}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY DASHBOARDS STAND OUT
      ====================================================== */}

      <section className="py-9">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="grid gap-8 xl:grid-cols-[.9fr_2.1fr] xl:items-center">
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.28em] text-blue-500">
                Powered for Greater Insights
              </div>

              <h2 className="mt-2 text-[27px] font-black text-[#102965]">
                Why SUFURIVRO Dashboards Stand Out
              </h2>
            </div>

            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  icon: <MousePointer2 size={22} />,
                  title: "Interactive drill-down",
                  text: "Go from high-level KPIs to granular details in seconds.",
                },
                {
                  icon: <Filter size={22} />,
                  title: "Cross-filtering",
                  text: "Explore relationships across services, time, and teams.",
                },
                {
                  icon: <Database size={22} />,
                  title: "Reusable semantic model",
                  text: "Built on a robust Power BI foundation for consistency and scale.",
                },
                {
                  icon: <Presentation size={22} />,
                  title: "Presentation-ready visuals",
                  text: "Beautiful, executive-ready dashboards you can share with confidence.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-3 rounded-xl border border-blue-100 bg-white p-4 shadow-sm"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    {item.icon}
                  </div>

                  <div>
                    <div className="text-[11px] font-black text-[#102965]">
                      {item.title}
                    </div>

                    <div className="mt-1 text-[9px] leading-4 text-[#607690]">
                      {item.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BIG CTA
      ====================================================== */}

      <section className="px-6 pb-9 lg:px-10">
        <div className="relative mx-auto min-h-[165px] max-w-[1450px] overflow-hidden rounded-[18px] bg-gradient-to-r from-[#06317b] via-[#0b64d5] to-[#67b5ff] px-10 py-8 text-white">
          {/* Decorative mountain silhouette */}

          <div className="absolute bottom-0 right-0 opacity-35">
            <svg
              width="530"
              height="165"
              viewBox="0 0 530 165"
              fill="none"
            >
              <path
                d="M70 165L210 45L265 100L330 18L430 120L475 80L530 165H70Z"
                fill="white"
                fillOpacity=".65"
              />
              <path
                d="M190 165L330 18L385 95L430 68L530 165H190Z"
                fill="#dbeafe"
                fillOpacity=".7"
              />
            </svg>
          </div>

          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-100">
                Turn Insights Into Impact
              </div>

              <h2 className="mt-3 text-[30px] font-black">
                Ready to showcase your ITSM performance?
              </h2>

              <p className="mt-2 max-w-[700px] text-[12px] text-blue-100">
                Join forward-thinking organizations that use SUFURIVRO to turn
                ITSM data into smarter decisions.
              </p>
            </div>

            <div className="relative text-center">
         <a
  href="/book-a-demo"
  className="inline-flex min-w-[215px] items-center justify-center gap-3 rounded-xl bg-orange-500 px-8 py-4 text-[14px] font-bold text-white shadow-lg shadow-blue-950/20 transition hover:-translate-y-0.5 hover:bg-orange-600"
>
  Book a Demo
  <ArrowRight size={16} />
</a>

              <div className="mt-2 text-[9px] text-blue-100">
                A clearer tomorrow starts today.
              </div>
            </div>
          </div>

          <div className="absolute bottom-5 right-9 hidden rotate-[-4deg] text-right text-[13px] font-medium italic text-blue-950/80 xl:block">
            Higher insights.
            <br />
            A brighter tomorrow...
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer active="dashboards" />
    </main>
  );
}
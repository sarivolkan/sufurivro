import type { Metadata } from "next";
import type { ReactNode } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  ArrowRight,
  BarChart3,
  Check,
  Clock3,
  Database,
  Gauge,
  LockKeyhole,
  PieChart,
  Search,
  ShieldCheck,
  UserRound,
  UsersRound,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Self-Service Reporting for ITSM",
  description:
    "Empower IT and business teams with self-service ITSM reporting in Microsoft Power BI. Explore governed data, create reports and analyze service performance with SUFURIVRO.",
  alternates: {
    canonical: "https://sufurivro.com/self-service-reporting",
  },
  openGraph: {
    title: "Self-Service Reporting for ITSM | SUFURIVRO",
    description:
      "Give IT and business users the power to explore, analyze and create trusted reports with Microsoft Power BI.",
    url: "https://sufurivro.com/self-service-reporting",
    siteName: "SUFURIVRO",
    type: "website",
  },
};

const CircleIcon = ({
  children,
  orange = false,
}: {
  children: ReactNode;
  orange?: boolean;
}) => (
  <div
    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
      orange
        ? "bg-orange-100 text-orange-600"
        : "bg-blue-100 text-blue-600"
    }`}
  >
    {children}
  </div>
);

const KpiCard = ({
  label,
  value,
  change,
}: {
  label: string;
  value: string;
  change: string;
}) => (
  <div className="rounded-xl border border-blue-100 bg-white p-3 shadow-[0_3px_12px_rgba(15,50,100,.04)]">
    <div className="text-[9px] font-medium text-slate-500">
      {label}
    </div>

    <div className="mt-1 text-[18px] font-black text-[#102965]">
      {value}
    </div>

    <div className="mt-1 text-[9px] font-bold text-emerald-600">
      {change}
    </div>
  </div>
);

const BenefitCard = ({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) => (
  <div className="min-h-[190px] rounded-[17px] border border-blue-100 bg-white p-6 shadow-[0_6px_20px_rgba(20,60,120,.035)]">
    <CircleIcon>{icon}</CircleIcon>

    <h3 className="mt-5 text-[17px] font-black text-[#102965]">
      {title}
    </h3>

    <p className="mt-2 text-[14px] leading-6 text-[#536b91]">
      {text}
    </p>
  </div>
);

export default function SelfServiceReportingPage() {
  const chartBars = [34, 45, 53, 67, 88, 73, 99, 108, 124, 112, 139, 172];

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* =====================================================
          SHARED HEADER
      ====================================================== */}

      <Header active="reporting" />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-white via-[#f2f8ff] to-[#dceeff]">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37,99,235,.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37,99,235,.035) 1px, transparent 1px)
            `,
            backgroundSize: "36px 36px",
          }}
        />

        <div className="absolute -left-[160px] top-[200px] h-[380px] w-[380px] rounded-full bg-blue-200/25 blur-2xl" />

        <div className="absolute -right-[130px] -top-[100px] h-[480px] w-[480px] rounded-full bg-blue-300/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1450px] gap-14 px-6 py-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-10 lg:py-16">
          {/* HERO LEFT */}

          <div className="max-w-[610px]">
            <div className="text-[12px] font-black uppercase tracking-[0.29em] text-blue-600">
              Empower Your Teams With Data
            </div>

            <h1 className="mt-5 font-black leading-[0.98] tracking-[-0.055em] text-[#102965]">
              <span className="block text-[55px] lg:text-[43px]">
                Self-Service Reporting
              </span>

               <span className="mt-2 block whitespace-nowrap text-[37px] text-[#2563ff] lg:text-[43px]">
                for ITSM and Beyond
              </span>
            </h1>

            <p className="mt-6 max-w-[590px] text-[17px] leading-[1.6] text-[#526a91]">
              Give IT and business users the power to explore, analyze and
              create their own reports with Microsoft Power BI. No SQL skills
              required. Just insights, faster.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="inline-flex h-[54px] min-w-[180px] items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-7 text-[15px] font-bold text-white shadow-[0_12px_26px_rgba(249,115,22,.25)] transition hover:-translate-y-0.5"
              >
                Book a Demo
                <ArrowRight size={17} />
              </a>

              <a
                href="#benefits"
                className="inline-flex h-[54px] min-w-[175px] items-center justify-center rounded-xl border border-blue-400 bg-white px-7 text-[15px] font-bold text-blue-700 transition hover:-translate-y-0.5"
              >
                Explore Features
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-[12px] font-medium text-[#415b80]">
              <div className="flex items-center gap-2">
                <CircleIcon>
                  <Zap size={19} />
                </CircleIcon>

                <span className="max-w-[120px]">
                  No technical skills required
                </span>
              </div>

              <div className="flex items-center gap-2">
                <CircleIcon>
                  <BarChart3 size={19} />
                </CircleIcon>

                <span className="max-w-[120px]">
                  Ready-to-use data models
                </span>
              </div>

              <div className="flex items-center gap-2">
                <CircleIcon>
                  <UsersRound size={19} />
                </CircleIcon>

                <span className="max-w-[120px]">
                  Governed and secure access
                </span>
              </div>
            </div>
          </div>

          {/* =====================================================
              LAPTOP / DASHBOARD
          ====================================================== */}

          <div className="relative">
            <div className="mx-auto max-w-[760px]">
              {/* LAPTOP SCREEN */}

              <div className="rounded-[20px] bg-[#20242c] p-[10px] shadow-[0_30px_70px_rgba(27,64,110,.22)]">
                <div className="overflow-hidden rounded-[12px] bg-[#f8fbff]">
                  {/* APP TOP BAR */}

                  <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
                    <div className="flex items-center gap-2">
                      <img
                        src="/logo/logo.png"
                        alt="SUFURIVRO"
                        className="h-[24px] w-auto object-contain"
                      />
                    </div>

                    <div className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-[8px] text-slate-500">
                      Last 12 months⌄
                    </div>
                  </div>

                  <div className="grid min-h-[420px] grid-cols-[115px_1fr]">
                    {/* SIDEBAR */}

                    <aside className="border-r border-slate-200 bg-[#f4f8fd] px-2 py-4">
                      <div className="space-y-1 text-[8px] text-[#60718e]">
                        {[
                          "Home",
                          "Incident Analysis",
                          "Service Requests",
                          "SLA Performance",
                          "User Satisfaction",
                          "Trends & Forecast",
                          "Custom Reports",
                        ].map((item, index) => (
                          <div
                            key={item}
                            className={`rounded-md px-2 py-2 ${
                              index === 1
                                ? "bg-blue-100 font-bold text-blue-700"
                                : ""
                            }`}
                          >
                            {item}
                          </div>
                        ))}
                      </div>

                      <div className="mt-[135px] space-y-2 text-[8px] text-slate-500">
                        <div>Help</div>
                        <div>Settings</div>
                      </div>
                    </aside>

                    {/* DASHBOARD BODY */}

                    <div className="p-4">
                      <div className="text-[13px] font-black text-[#102965]">
                        Incident Analysis
                      </div>

                      <div className="mt-3 grid grid-cols-4 gap-2">
                        <KpiCard
                          label="Total Incidents"
                          value="1,248"
                          change="↓ 10%"
                        />

                        <KpiCard
                          label="Resolved"
                          value="1,102"
                          change="↑ 12%"
                        />

                        <KpiCard
                          label="Avg. Resolution Time"
                          value="6.2 h"
                          change="↓ 40%"
                        />

                        <KpiCard
                          label="SLA Compliance"
                          value="92.4%"
                          change="↑ 6%"
                        />
                      </div>

                      <div className="mt-3 grid gap-3 lg:grid-cols-[1.35fr_.8fr]">
                        {/* BAR CHART */}

                        <div className="rounded-xl border border-blue-100 bg-white p-3">
                          <div className="text-[10px] font-black text-[#102965]">
                            Incidents Over Time
                          </div>

                          <div className="relative mt-3 h-[125px]">
                            <div className="absolute inset-0 flex flex-col justify-between">
                              {[1, 2, 3, 4].map((item) => (
                                <div
                                  key={item}
                                  className="border-t border-slate-100"
                                />
                              ))}
                            </div>

                            <div className="absolute inset-0 flex items-end gap-[5px] px-2 pb-4">
                              {chartBars.map((height, index) => (
                                <div
                                  key={index}
                                  className="flex h-full flex-1 items-end"
                                >
                                  <div
                                    className="w-full rounded-t bg-gradient-to-t from-blue-600 to-blue-300"
                                    style={{ height }}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex justify-between text-[6px] text-slate-400">
                            {[
                              "Jan",
                              "Feb",
                              "Mar",
                              "Apr",
                              "May",
                              "Jun",
                              "Jul",
                              "Aug",
                              "Sep",
                              "Oct",
                              "Nov",
                              "Dec",
                            ].map((month) => (
                              <span key={month}>{month}</span>
                            ))}
                          </div>
                        </div>

                        {/* PIE */}

                        <div className="rounded-xl border border-blue-100 bg-white p-3">
                          <div className="text-[10px] font-black text-[#102965]">
                            Incidents by Category
                          </div>

                          <div className="mt-4 flex items-center gap-4">
                            <div className="relative h-[90px] w-[90px] shrink-0 rounded-full bg-[conic-gradient(#123ba3_0_28%,#2563eb_28%_52%,#4a95ff_52%_70%,#93c5fd_70%_86%,#dbeafe_86%_100%)]">
                              <div className="absolute inset-[20px] rounded-full bg-white" />
                            </div>

                            <div className="w-full space-y-2 text-[7px] text-slate-500">
                              {[
                                ["Software", "28%"],
                                ["Hardware", "24%"],
                                ["Access", "18%"],
                                ["Network", "16%"],
                                ["Other", "14%"],
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

                      <div className="mt-3 grid gap-3 lg:grid-cols-[1.25fr_1fr]">
                        {/* TABLE */}

                        <div className="rounded-xl border border-blue-100 bg-white p-3">
                          <div className="text-[10px] font-black text-[#102965]">
                            Top Assigned Groups
                          </div>

                          <div className="mt-3">
                            <div className="grid grid-cols-3 border-b border-slate-100 pb-2 text-[6px] font-bold text-slate-400">
                              <span>Group</span>
                              <span>Incidents</span>
                              <span>Avg. Resolution Time</span>
                            </div>

                            {[
                              ["Service Desk", "420", "4.8 h"],
                              ["Infrastructure", "310", "6.1 h"],
                              ["Applications", "205", "7.3 h"],
                              ["Security", "142", "5.4 h"],
                              ["Network", "111", "6.1 h"],
                            ].map((row) => (
                              <div
                                key={row[0]}
                                className="grid grid-cols-3 border-b border-slate-50 py-1.5 text-[6px] text-slate-500"
                              >
                                <span>{row[0]}</span>
                                <span>{row[1]}</span>
                                <span>{row[2]}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* SLA LINE */}

                        <div className="rounded-xl border border-blue-100 bg-white p-3">
                          <div className="text-[10px] font-black text-[#102965]">
                            SLA Compliance Trend
                          </div>

                          <div className="relative mt-4 h-[90px]">
                            <div className="absolute inset-0 flex flex-col justify-between">
                              {[1, 2, 3, 4].map((item) => (
                                <div
                                  key={item}
                                  className="border-t border-slate-100"
                                />
                              ))}
                            </div>

                            <svg
                              viewBox="0 0 300 100"
                              className="absolute inset-0 h-full w-full"
                            >
                              <polyline
                                points="0,75 30,65 55,72 85,55 115,61 145,47 175,52 210,34 240,40 270,22 300,13"
                                fill="none"
                                stroke="#2563eb"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* LAPTOP BOTTOM */}

              <div className="mx-auto h-[14px] w-[108%] -translate-x-[4%] rounded-b-[60%] bg-gradient-to-b from-[#7c8189] to-[#c5c8cc] shadow-[0_10px_15px_rgba(0,0,0,.12)]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          KEY BENEFITS
      ====================================================== */}

      <section id="benefits" className="py-16">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="text-center">
            <div className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-500">
              Key Benefits
            </div>

            <h2 className="mt-3 text-[34px] font-black tracking-[-0.035em] text-[#102965]">
              Make Data Accessible to Everyone
            </h2>

            <p className="mt-2 text-[15px] text-[#607690]">
              Turn complex ITSM data into clear insights with self-service
              reporting.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <BenefitCard
              icon={<UsersRound size={24} />}
              title="Empower Your Users"
              text="Let IT and business users create their own reports and explore data without relying on IT."
            />

            <BenefitCard
              icon={<Clock3 size={24} />}
              title="Save Time"
              text="Reduce report requests and speed up decision making across your organization."
            />

            <BenefitCard
              icon={<BarChart3 size={24} />}
              title="Stay Consistent"
              text="Use governed data models to ensure trusted and consistent reporting."
            />

            <BenefitCard
              icon={<Gauge size={24} />}
              title="Focus on What Matters"
              text="Spend less time on data preparation and more time on actionable insights."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          POPULAR USE CASES
      ====================================================== */}

      <section className="pb-16">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="text-center">
            <div className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-500">
              Popular Use Cases
            </div>

            <h2 className="mt-2 text-[30px] font-black text-[#102965]">
              Flexible Reporting for Real Business Needs
            </h2>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: <BarChart3 size={23} />,
                title: "Operational Reporting",
                text: "Track incidents, requests, changes and service performance.",
              },
              {
                icon: <UserRound size={23} />,
                title: "Management Reporting",
                text: "Create executive reports for IT and business stakeholders.",
              },
              {
                icon: <PieChart size={23} />,
                title: "Ad-Hoc Analysis",
                text: "Explore trends, identify root causes and answer new questions.",
              },
              {
                icon: <UsersRound size={23} />,
                title: "Department Reports",
                text: "Allow different teams to build their own views and dashboards.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4"
              >
                <CircleIcon>{item.icon}</CircleIcon>

                <div>
                  <h3 className="text-[15px] font-black text-[#102965]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[12px] leading-5 text-[#607690]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}

      <section className="pb-14">
        <div className="mx-auto grid max-w-[1450px] gap-14 px-6 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:px-10">
          {/* LEFT DASHBOARD STACK */}

          <div className="relative min-h-[400px]">
            <div className="absolute left-3 top-0 h-[320px] w-[80%] rounded-2xl border border-blue-100 bg-[#f9fbff] opacity-55 shadow-sm" />

            <div className="absolute left-8 top-6 h-[320px] w-[82%] rounded-2xl border border-blue-100 bg-white opacity-70 shadow-md" />

            <div className="relative left-12 top-12 w-[84%] rounded-[16px] border border-blue-100 bg-white p-4 shadow-[0_24px_60px_rgba(32,74,130,.14)]">
              <div className="flex items-center justify-between">
                <img
                  src="/logo/logo.png"
                  alt="SUFURIVRO"
                  className="h-[24px] w-auto"
                />

                <span className="text-[9px] text-slate-400">
                  Service Performance
                </span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <KpiCard
                  label="SLA Compliance"
                  value="92.4%"
                  change="↑ 6%"
                />

                <KpiCard
                  label="Resolution"
                  value="6.2 h"
                  change="↓ 40%"
                />

                <KpiCard
                  label="Resolved"
                  value="1,248"
                  change="↑ 12%"
                />
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div className="rounded-xl border border-blue-100 p-3">
                  <div className="text-[9px] font-black text-[#102965]">
                    SLA Compliance
                  </div>

                  <div className="relative mt-3 h-[110px]">
                    <svg
                      viewBox="0 0 300 110"
                      className="absolute inset-0 h-full w-full"
                    >
                      <polyline
                        points="0,85 40,70 70,75 110,58 140,62 175,46 215,50 250,30 300,22"
                        fill="none"
                        stroke="#2563eb"
                        strokeWidth="4"
                      />
                    </svg>
                  </div>
                </div>

                <div className="rounded-xl border border-blue-100 p-3">
                  <div className="text-[9px] font-black text-[#102965]">
                    Incidents by Priority
                  </div>

                  <div className="mt-4 space-y-3">
                    {[
                      ["Critical", "20%"],
                      ["High", "36%"],
                      ["Medium", "58%"],
                      ["Low", "72%"],
                    ].map(([name, width]) => (
                      <div key={name}>
                        <div className="mb-1 flex justify-between text-[7px] text-slate-500">
                          <span>{name}</span>
                          <span>{width}</span>
                        </div>

                        <div className="h-2 rounded-full bg-blue-50">
                          <div
                            className="h-2 rounded-full bg-blue-500"
                            style={{ width }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-blue-100 p-3">
                <div className="text-[9px] font-black text-[#102965]">
                  Recent Incidents
                </div>

                <div className="mt-3 grid grid-cols-4 border-b border-slate-100 pb-2 text-[7px] font-bold text-slate-400">
                  <span>Number</span>
                  <span>Short Description</span>
                  <span>Priority</span>
                  <span>State</span>
                </div>

                {[
                  ["INC001294", "VPN connection issue", "High", "In Progress"],
                  ["INC001286", "Email not working", "Medium", "Resolved"],
                  ["INC001274", "Access request", "Low", "Resolved"],
                ].map((row) => (
                  <div
                    key={row[0]}
                    className="grid grid-cols-4 border-b border-slate-50 py-2 text-[7px] text-slate-500"
                  >
                    <span>{row[0]}</span>
                    <span>{row[1]}</span>
                    <span>{row[2]}</span>
                    <span>{row[3]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT STEPS */}

          <div>
            <div className="text-[11px] font-black uppercase tracking-[0.28em] text-blue-500">
              How It Works
            </div>

            <h2 className="mt-3 max-w-[530px] text-[36px] font-black leading-[1.08] tracking-[-0.035em] text-[#102965]">
              From Data to Insights
              <span className="block">in Just a Few Steps</span>
            </h2>

            <div className="mt-8 space-y-6">
              {[
                {
                  number: "1",
                  title: "Connect",
                  text: "Integrate your ITSM data (e.g. ServiceNow) with Microsoft Fabric.",
                },
                {
                  number: "2",
                  title: "Model",
                  text: "Use ready-to-use semantic models and governed data.",
                },
                {
                  number: "3",
                  title: "Explore",
                  text: "Let your users create their own reports and dashboards in Power BI.",
                },
                {
                  number: "4",
                  title: "Share",
                  text: "Publish and share insights securely across your organization.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="flex items-start gap-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white">
                    {item.number}
                  </div>

                  <div>
                    <div className="text-[15px] font-black text-[#102965]">
                      {item.title}
                    </div>

                    <p className="mt-1 text-[13px] leading-5 text-[#607690]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIAL / METRICS
      ====================================================== */}

      <section className="px-6 pb-6 lg:px-10">
        <div className="mx-auto grid max-w-[1450px] gap-6 rounded-[20px] border border-blue-100 bg-gradient-to-r from-[#eef7ff] to-[#f8fbff] px-8 py-7 lg:grid-cols-[1.7fr_1fr] lg:items-center">
          <div className="flex gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-3xl font-black text-blue-600">
              “
            </div>

            <div>
              <p className="max-w-[700px] text-[15px] font-medium leading-6 text-[#16346d]">
                “Our IT and business teams can now create their own reports in
                minutes. It&apos;s a game changer for how we use our ITSM data.”
              </p>

              <div className="mt-3 text-[11px] text-[#607690]">
                IT Operations Manager
                <span className="mx-3">|</span>
                Manufacturing Company
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 divide-x divide-blue-200">
            <div className="text-center">
              <div className="text-[27px] font-black text-[#102965]">
                60%
              </div>
              <div className="mt-1 text-[10px] text-[#526a91]">
                faster reporting
              </div>
            </div>

            <div className="text-center">
              <div className="text-[27px] font-black text-[#102965]">
                80%
              </div>
              <div className="mt-1 text-[10px] text-[#526a91]">
                fewer ad-hoc requests
              </div>
            </div>

            <div className="text-center">
              <div className="text-[24px] font-black text-[#102965]">
                Higher
              </div>
              <div className="mt-1 text-[10px] text-[#526a91]">
                user satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="px-6 pb-10 lg:px-10">
        <div className="relative mx-auto max-w-[1450px] overflow-hidden rounded-[18px] bg-gradient-to-r from-[#072a67] via-[#0e4cb0] to-[#102f75] px-10 py-9 text-white">
          <div className="absolute -right-10 -top-20 h-[280px] w-[280px] rounded-full bg-blue-400/20" />

          <div className="absolute right-[100px] top-[20px] h-[160px] w-[160px] rounded-full bg-white/5" />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.28em] text-sky-300">
                Ready to Empower Your Teams?
              </div>

              <h2 className="mt-3 text-[31px] font-black">
                Start Your Self-Service Reporting Journey Today
              </h2>

              <p className="mt-2 text-[14px] text-blue-100">
                See how SUFURIVRO can help you deliver trusted, self-service
                analytics with Microsoft Power BI.
              </p>
            </div>

            <a
              href="/#contact"
              className="relative inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-orange-500 px-8 py-4 text-[14px] font-bold text-white shadow-lg shadow-blue-950/20 transition hover:-translate-y-0.5 hover:bg-orange-600"
            >
              Book a Demo
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          SHARED FOOTER
      ====================================================== */}

      <Footer active="reporting" />
    </main>
  );
}
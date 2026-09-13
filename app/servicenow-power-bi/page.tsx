import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  BarChart3,
  Check,
  Clock3,
  Database,
    Menu,
  PieChart,
  ShieldCheck,
  TrendingUp,
  UserRound,
  UsersRound,
  } from "lucide-react";

export const metadata: Metadata = {
  title: "ServiceNow Power BI Analytics",
  description:
    "Connect ServiceNow with Microsoft Fabric and Power BI. Automate ITSM reporting, monitor SLA and MTTR, analyze incidents, and enable self-service analytics with SUFURIVRO.",
  alternates: {
    canonical: "https://sufurivro.com/servicenow-power-bi",
  },
  openGraph: {
    title: "ServiceNow Power BI Analytics | SUFURIVRO",
    description:
      "Turn ServiceNow data into actionable intelligence with Microsoft Fabric and Power BI.",
    url: "https://sufurivro.com/servicenow-power-bi",
    siteName: "SUFURIVRO",
    type: "website",
  },
};

const MetricCard = ({
  label,
  value,
  change,
}: {
  label: string;
  value: string;
  change: string;
}) => (
  <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
    <div className="text-[11px] font-medium text-slate-500">{label}</div>
    <div className="mt-1 text-[24px] font-black leading-none text-[#08265d]">
      {value}
    </div>
    <div className="mt-2 text-[10px] font-bold text-emerald-600">{change}</div>
  </div>
);

function BrandLogo({ footer = false }: { footer?: boolean }) {
  return (
    <a href="/" className="flex items-center">
      <img
        src="/logo/logo.png"
        alt="SUFURIVRO"
        className={footer ? "h-[52px] w-auto" : "h-[68px] w-auto"}
      />
    </a>
  );
}

export default function ServiceNowPowerBIPage() {
  return (
    <main className="overflow-hidden bg-white text-[#08265d]">
      {/* ======================================================
          HEADER
      ====================================================== */}

   <Header active="servicenow" />

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#082b52]">
        {/* background */}

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 77% 42%, rgba(62,121,173,.48), transparent 30%), radial-gradient(circle at 91% 15%, rgba(255,255,255,.14), transparent 18%), linear-gradient(90deg,#062b52 0%,#072b4e 37%,#173e5a 72%,#244b61 100%)",
          }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,28,57,.12),rgba(3,25,48,.06),rgba(3,22,42,.15))]" />

        <div className="relative mx-auto grid min-h-[490px] max-w-[1180px] grid-cols-1 items-center gap-10 px-6 py-14 lg:grid-cols-[0.76fr_1.24fr]">
          {/* HERO COPY */}

          <div className="relative z-10 max-w-[430px]">
            <div className="text-[12px] font-bold uppercase tracking-[0.21em] text-[#75bbff]">
              ServiceNow Power BI
            </div>

            <h1 className="mt-5 text-[44px] font-black leading-[1.06] tracking-[-0.045em] text-white">
              Turn ServiceNow Data
              <span className="block">
                into{" "}
                <span className="text-[#ff7417]">
                  Actionable
                </span>
              </span>
              <span className="block text-[#ff7417]">Intelligence</span>
            </h1>

            <p className="mt-6 text-[16px] leading-7 text-blue-50/90">
              SUFURIVRO connects ServiceNow with Microsoft Fabric and Power BI,
              giving you real-time ITSM analytics, SLA insights and self-service
              reporting — without the complexity.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="#how-it-works"
                className="inline-flex h-[48px] items-center gap-3 rounded-[7px] bg-[#ff6b0b] px-7 text-[14px] font-bold text-white shadow-lg shadow-orange-950/20 transition hover:-translate-y-0.5"
              >
                See It in Action
                <ArrowRight size={16} />
              </a>

              <a
                href="#contact"
                className="inline-flex h-[48px] items-center justify-center rounded-[7px] border border-white/80 px-7 text-[14px] font-bold text-white transition hover:bg-white/10"
              >
                Contact Us
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-[11px] text-blue-100">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-blue-300">
                  <Check size={11} />
                </span>
                Fast deployment
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-blue-300">
                  <Check size={11} />
                </span>
                Secure & scalable
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-blue-300">
                  <Check size={11} />
                </span>
                Built for IT teams
              </div>
            </div>
          </div>

          {/* ==================================================
              HERO DASHBOARD
          ================================================== */}

          <div className="relative lg:-mr-6">
            <div className="overflow-hidden rounded-[18px] border border-white/20 bg-[#051c38] p-[10px] shadow-[0_30px_70px_rgba(0,0,0,.38)]">
              <div className="grid min-h-[410px] grid-cols-[108px_1fr] overflow-hidden rounded-[10px] bg-white">
                {/* Sidebar */}

                <aside className="bg-gradient-to-b from-[#06336f] to-[#031b39] px-3 py-4 text-white">
                  <div className="mb-6 flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-400 via-blue-600 to-orange-400" />
                    <span className="text-[10px] font-black">SUFURIVRO</span>
                  </div>

                  <div className="space-y-[7px]">
                    {[
                      "Overview",
                      "Incidents",
                      "SLA",
                      "Performance",
                      "Services",
                      "Users",
                      "Reports",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className={`rounded-md px-2.5 py-2 text-[9px] ${
                          index === 0
                            ? "bg-[#2177e6] font-bold"
                            : "text-blue-100"
                        }`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="absolute bottom-7 left-[28px] hidden lg:block">
                    <div className="text-[7px] text-blue-200">Powered by</div>
                    <div className="mt-1 flex items-center gap-1">
                      <div className="h-4 w-4 rounded bg-emerald-400" />
                      <span className="text-[8px] font-bold">
                        Microsoft Fabric
                      </span>
                    </div>
                  </div>
                </aside>

                {/* Dashboard */}

                <div className="bg-[#f8fbff] p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-[15px] font-black text-[#08265d]">
                        IT Service Management Overview
                      </div>

                      <div className="mt-0.5 text-[9px] text-slate-500">
                        From Data to Better IT Services
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <div className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-[8px] text-slate-500">
                        Last 90 days
                      </div>

                      <div className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-[8px] text-slate-500">
                        All
                      </div>
                    </div>
                  </div>

                  {/* KPI */}

                  <div className="mt-3 grid grid-cols-4 gap-2">
                    <MetricCard
                      label="Total Incidents"
                      value="2,346"
                      change="↓ -12%"
                    />

                    <MetricCard
                      label="Resolved"
                      value="2,156"
                      change="↓ -18%"
                    />

                    <MetricCard
                      label="SLA Compliance"
                      value="92.4%"
                      change="↑ +5.2%"
                    />

                    <MetricCard
                      label="Average MTTR"
                      value="4.6h"
                      change="↓ -28%"
                    />
                  </div>

                  {/* DASHBOARD ROW 1 */}

                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <div className="rounded-xl border border-slate-200 bg-white p-3">
                      <div className="text-[10px] font-black">
                        Incidents by Category
                      </div>

                      <div className="mt-2 flex items-center justify-center gap-4">
                        <div className="relative h-[96px] w-[96px] rounded-full bg-[conic-gradient(#2563eb_0_25%,#7c3aed_25%_40%,#ec4899_40%_55%,#fb923c_55%_72%,#38bdf8_72%_100%)]">
                          <div className="absolute inset-[19px] flex items-center justify-center rounded-full bg-white">
                            <div className="text-center">
                              <div className="text-[15px] font-black">2,346</div>
                              <div className="text-[7px] text-slate-400">
                                Incidents
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-1 text-[7px] text-slate-500">
                          <div>● Access &nbsp;&nbsp; 28%</div>
                          <div>● Hardware &nbsp;22%</div>
                          <div>● Software &nbsp;20%</div>
                          <div>● Network &nbsp;&nbsp;15%</div>
                          <div>● Other &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15%</div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-3">
                      <div className="flex justify-between">
                        <div className="text-[10px] font-black">
                          Incident Trend
                        </div>

                        <div className="flex gap-3 text-[6px]">
                          <span className="text-blue-500">● Opened</span>
                          <span className="text-orange-500">● Resolved</span>
                        </div>
                      </div>

                      <svg
                        viewBox="0 0 260 110"
                        className="mt-2 h-[100px] w-full"
                      >
                        {[20, 45, 70, 95].map((y) => (
                          <line
                            key={y}
                            x1="15"
                            x2="250"
                            y1={y}
                            y2={y}
                            stroke="#e8eef6"
                            strokeWidth="1"
                          />
                        ))}

                        <polyline
                          points="20,75 60,55 100,64 140,45 180,51 220,32 245,48"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="2"
                        />

                        <polyline
                          points="20,91 60,73 100,71 140,60 180,62 220,48 245,67"
                          fill="none"
                          stroke="#f97316"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* DASHBOARD ROW 2 */}

                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <div className="rounded-xl border border-slate-200 bg-white p-3">
                      <div className="text-[10px] font-black">
                        SLA Compliance
                      </div>

                      <div className="mt-3 flex h-[74px] items-end justify-around gap-3">
                        {[64, 67, 66, 65].map((height, index) => (
                          <div key={index} className="text-center">
                            <div
                              className="w-[22px] rounded-t-sm bg-gradient-to-t from-[#115cae] to-[#408ddd]"
                              style={{ height }}
                            />
                            <div className="mt-1 text-[7px] text-slate-400">
                              {["Jun", "Jul", "Aug", "Sep"][index]}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-3">
                      <div className="text-[10px] font-black">
                        Top 5 Services by Incidents
                      </div>

                      <div className="mt-3 space-y-[5px]">
                        {[
                          ["Email", "420", 92],
                          ["VPN", "312", 74],
                          ["ERP", "266", 65],
                          ["Active Directory", "243", 56],
                          ["Office 365", "201", 46],
                        ].map(([name, value, width]) => (
                          <div
                            key={name}
                            className="grid grid-cols-[68px_1fr_25px] items-center gap-2"
                          >
                            <div className="text-[7px]">{name}</div>

                            <div className="h-[7px] rounded-full bg-slate-100">
                              <div
                                className="h-full rounded-full bg-[#367fe8]"
                                style={{ width: `${width}%` }}
                              />
                            </div>

                            <div className="text-[7px]">{value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 right-1 rotate-[-7deg] text-right font-serif text-[13px] italic text-white">
              Your ITSM data
              <br />
              Your story
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          BRAND STRIP
      ====================================================== */}

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex min-h-[72px] max-w-[1180px] flex-col items-center justify-between gap-6 px-6 py-5 md:flex-row">
          <div className="flex flex-wrap items-center gap-8">
            <img
              src="/logos/servicenow.png"
              alt="ServiceNow"
              className="h-[26px] w-auto max-w-[145px] object-contain"
            />

            <div className="hidden h-8 w-px bg-slate-200 md:block" />

            <div className="flex items-center gap-3">
              <img
                src="/logos/fabric.png"
                alt="Microsoft Fabric"
                className="h-[32px] w-[32px] object-contain"
              />
              <span className="text-[17px] font-semibold text-slate-800">
                Microsoft Fabric
              </span>
            </div>

            <div className="hidden h-8 w-px bg-slate-200 md:block" />

            <div className="flex items-center gap-3">
              <img
                src="/logos/powerbi.svg"
                alt="Power BI"
                className="h-[32px] w-[32px] object-contain"
              />
              <span className="text-[17px] font-semibold text-slate-800">
                Power BI
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-[13px] font-semibold text-[#36547b]">
            <span>Connect</span>
            <span>→</span>
            <span>Transform</span>
            <span>→</span>
            <span>Visualize</span>
            <span>→</span>
            <span>Empower</span>
          </div>
        </div>
      </section>

      {/* ======================================================
          HOW IT WORKS
      ====================================================== */}

      <section id="how-it-works" className="py-14">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div>
            <div className="text-[11px] font-black uppercase tracking-[0.15em] text-[#096ee8]">
              How It Works
            </div>

            <h2 className="mt-4 text-[32px] font-black leading-[1.1] tracking-[-0.035em] text-[#08265d]">
              From ServiceNow
              <br />
              to Business Impact
            </h2>

            <p className="mt-4 max-w-[390px] text-[14px] leading-[1.55] text-[#4f6685]">
              SUFURIVRO integrates with ServiceNow, centralizes your data in
              Microsoft Fabric, and delivers interactive Power BI dashboards
              for IT and business stakeholders.
            </p>

            <a
              href="#benefits"
              className="mt-4 inline-flex items-center gap-2 text-[13px] font-bold text-blue-600"
            >
              Learn more about our solution
              <ArrowRight size={15} />
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {[
              {
                logo: "/logos/servicenow.svg",
                title: (
                  <>
                    Extract
                    <br />
                    your ITSM data
                  </>
                ),
                text: "Secure and automated connectivity",
              },
              {
                logo: "/logos/fabric.svg",
                title: (
                  <>
                    Centralize
                    <br />
                    and model
                  </>
                ),
                text: "Scalable data platform for ITSM",
              },
              {
                logo: "/logos/powerbi.svg",
                title: (
                  <>
                    Visualize
                    <br />
                    and analyze
                  </>
                ),
                text: "Ready-to-use dashboards and insights",
              },
              {
                icon: <UsersRound size={29} />,
                title: (
                  <>
                    Better decisions
                    <br />
                    Higher service quality
                    <br />
                    Happier users
                  </>
                ),
                text: "",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="flex min-h-[175px] flex-col rounded-[8px] border border-slate-200 bg-white p-4 shadow-[0_3px_15px_rgba(8,38,93,.04)]">
                  <div className="flex h-[38px] items-center text-blue-600">
                    {item.logo ? (
                      <img
                        src={item.logo}
                        alt=""
                        className="max-h-[27px] max-w-[115px] object-contain object-left"
                      />
                    ) : (
                      item.icon
                    )}
                  </div>

                  <div className="mt-5 text-[13px] font-black leading-[1.25] text-[#08265d]">
                    {item.title}
                  </div>

                  {item.text && (
                    <p className="mt-3 text-[10px] leading-[1.5] text-[#68809d]">
                      {item.text}
                    </p>
                  )}
                </div>

                {index < 3 && (
                  <div className="absolute -right-[17px] top-1/2 z-10 hidden -translate-y-1/2 text-[24px] text-blue-500 md:block">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          BENEFITS
      ====================================================== */}

      <section id="benefits" className="bg-[#f5f9fd] py-10">
        <div className="mx-auto grid max-w-[1180px] gap-8 px-6 lg:grid-cols-[1.05fr_3fr] lg:items-center">
          <div>
            <div className="text-[11px] font-black uppercase tracking-[0.15em] text-[#096ee8]">
              Key Benefits
            </div>

            <h2 className="mt-3 text-[28px] font-black leading-[1.13] tracking-[-0.035em] text-[#08265d]">
              More than Reporting.
              <br />
              Real Value for ITSM.
            </h2>
          </div>

          <div className="grid md:grid-cols-4">
            {[
              {
                icon: <Clock3 size={30} />,
                title: "Save Time",
                text: "Automate reporting and eliminate manual work",
                cls: "text-orange-500",
              },
              {
                icon: <BarChart3 size={30} />,
                title: "Improve Service Quality",
                text: "Track SLA, MTTR and trends in real time",
                cls: "text-blue-600",
              },
              {
                icon: <UserRound size={30} />,
                title: "Empower Teams",
                text: "Self-service analytics for IT and business users",
                cls: "text-emerald-600",
              },
              {
                icon: <PieChart size={30} />,
                title: "Drive Continuous Improvement",
                text: "Turn data into insights and action",
                cls: "text-violet-600",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`px-6 ${
                  index !== 0 ? "border-l border-slate-200" : ""
                }`}
              >
                <div className={item.cls}>{item.icon}</div>

                <div className="mt-3 text-[14px] font-black leading-[1.1] text-[#08265d]">
                  {item.title}
                </div>

                <p className="mt-2 text-[11px] leading-[1.45] text-[#5c728f]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          STATS
      ====================================================== */}

      <section className="py-9">
        <div className="mx-auto grid max-w-[1180px] gap-8 px-6 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div>
            <div className="text-[11px] font-black uppercase tracking-[0.15em] text-[#096ee8]">
              Trusted by IT Teams
            </div>

            <h2 className="mt-2 text-[24px] font-black text-[#08265d]">
              Built for Modern IT Organizations
            </h2>

            <p className="mt-2 max-w-[520px] text-[13px] leading-5 text-[#526a88]">
              Whether you&apos;re a growing IT team or a global enterprise,
              SUFURIVRO helps you get more value from your ServiceNow
              investment.
            </p>
          </div>

          <div className="grid grid-cols-3 divide-x divide-slate-200">
            <div className="text-center">
              <div className="text-[32px] font-black text-[#0b4da3]">30%</div>
              <div className="text-[12px] text-[#526a88]">
                Faster reporting
              </div>
            </div>

            <div className="text-center">
              <div className="text-[32px] font-black text-[#0b4da3]">50%</div>
              <div className="text-[12px] text-[#526a88]">
                Less manual work
              </div>
            </div>

            <div className="text-center">
              <div className="text-[32px] font-black text-[#0b4da3]">92%</div>
              <div className="text-[12px] text-[#526a88]">
                SLA visibility
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          CTA
      ====================================================== */}

      <section
        id="contact"
        className="relative overflow-hidden bg-gradient-to-r from-[#062951] via-[#083765] to-[#062c55]"
      >
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_15%_100%,#29588b_0,transparent_35%),radial-gradient(circle_at_70%_100%,#153f69_0,transparent_35%)]" />

        <div className="relative mx-auto flex max-w-[1180px] flex-col justify-between gap-6 px-6 py-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-[25px] font-black text-white">
              Ready to Unlock Your ITSM Data?
            </h2>

            <p className="mt-1 text-[12px] text-blue-100">
              See how SUFURIVRO can help you turn ServiceNow data into
              actionable intelligence.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="mailto:info@datamart.com.tr"
              className="rounded-[7px] bg-[#ff6b0b] px-8 py-3 text-[13px] font-bold text-white"
            >
              Get a Demo
            </a>

            <a
              href="mailto:info@datamart.com.tr"
              className="rounded-[7px] border border-white px-8 py-3 text-[13px] font-bold text-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================
          FOOTER
      ====================================================== */}

    <Footer active="servicenow" />
    </main>
  );
}
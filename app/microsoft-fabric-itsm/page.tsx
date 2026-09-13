import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  BarChart3,
  Check,
  Coins,
  Database,
  Gauge,
  Layers3,
  LineChart,
  LockKeyhole,
  Network,
  ShieldCheck,
  Sparkles,
  UserRound,
  UsersRound,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Microsoft Fabric for ITSM",
  description:
    "Unify, transform and analyze ITSM data with Microsoft Fabric and SUFURIVRO. Connect ServiceNow, Jira Service Management, Freshservice and BMC Helix to a scalable analytics platform.",
  alternates: {
    canonical: "https://sufurivro.com/microsoft-fabric-itsm",
  },
  openGraph: {
    title: "Microsoft Fabric for ITSM | SUFURIVRO",
    description:
      "Modernize ITSM analytics with Microsoft Fabric, governed semantic models and Power BI.",
    url: "https://sufurivro.com/microsoft-fabric-itsm",
    siteName: "SUFURIVRO",
    type: "website",
  },
};

const Benefit = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => (
  <div className="flex gap-4">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
      {icon}
    </div>

    <div>
      <div className="text-[15px] font-black text-[#102965]">{title}</div>
      <p className="mt-1 text-[13px] leading-5 text-[#617590]">{text}</p>
    </div>
  </div>
);

const UseCase = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => (
  <div className="rounded-[18px] border border-blue-100 bg-white p-7 shadow-[0_7px_20px_rgba(20,70,130,.05)]">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
      {icon}
    </div>

    <h3 className="mt-5 text-[18px] font-black text-[#102965]">{title}</h3>

    <p className="mt-2 text-[14px] leading-6 text-[#526a91]">{text}</p>
  </div>
);

export default function MicrosoftFabricITSMPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* =====================================================
          HEADER
      ====================================================== */}
<Header active="fabric" />
     
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-white via-[#f5faff] to-[#dceeff]">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(rgba(30,90,180,.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(30,90,180,.03) 1px, transparent 1px)
            `,
            backgroundSize: "34px 34px",
          }}
        />

        <div className="absolute -right-[140px] -top-[170px] h-[620px] w-[620px] rounded-full bg-blue-300/25 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1450px] gap-12 px-6 py-16 lg:grid-cols-[0.84fr_1.16fr] lg:items-center lg:px-10 lg:py-20">
          {/* LEFT */}

          <div className="max-w-[620px]">
            <div className="text-[12px] font-black uppercase tracking-[0.3em] text-blue-600">
              Unify. Transform. Analyze.
            </div>

            <h1 className="mt-5 font-black leading-[0.99] tracking-[-0.055em] text-[#102965]">
              <span className="block whitespace-nowrap text-[54px] lg:text-[62px]">
                Microsoft Fabric
              </span>

              <span className="mt-1 block whitespace-nowrap text-[51px] text-[#2563ff] lg:text-[58px]">
                for ITSM Data
              </span>
            </h1>

            <p className="mt-6 max-w-[610px] text-[18px] leading-[1.58] text-[#536b92]">
              Bring your ITSM data to Microsoft Fabric and unlock the full
              power of a unified data platform. Integrate, transform and analyze
              your service data at scale with modern, secure and future-ready
              analytics.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="inline-flex h-[54px] min-w-[180px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-7 text-[15px] font-bold text-white shadow-[0_12px_26px_rgba(249,115,22,.24)]"
              >
                Book a Demo
                <ArrowRight size={17} />
              </a>

              <a
                href="#architecture"
                className="inline-flex h-[54px] min-w-[190px] items-center justify-center rounded-xl border border-blue-200 bg-white px-7 text-[15px] font-bold text-blue-700 shadow-[0_7px_18px_rgba(20,70,140,.06)]"
              >
                See Architecture
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-[13px] font-medium text-[#3d5c84]">
              <div className="flex items-center gap-2">
                <Database size={22} className="text-blue-600" />
                Centralized Data
              </div>

              <div className="flex items-center gap-2">
                <BarChart3 size={22} className="text-blue-600" />
                Scalable Analytics
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck size={22} className="text-blue-600" />
                Enterprise Security
              </div>
            </div>
          </div>

          {/* HERO ARCHITECTURE CARD */}

          <div className="rounded-[24px] border border-blue-100 bg-white/90 p-5 shadow-[0_28px_70px_rgba(36,85,145,.14)] backdrop-blur">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="/logos/fabric.png"
                  alt="Microsoft Fabric"
                  className="h-[48px] w-[48px] object-contain"
                />

                <div className="text-[27px] font-black text-[#102965]">
                  Microsoft Fabric
                </div>
              </div>

              <div className="text-right text-[13px] font-bold leading-5 text-[#27496f]">
                One platform.
                <br />
                Endless possibilities.
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-[0.8fr_1.05fr_0.9fr]">
              {/* SOURCES */}

              <div className="rounded-2xl bg-[#f7faff] p-4">
                <div className="text-[12px] font-black text-[#102965]">
                  ITSM Sources
                </div>

                <div className="mt-4 space-y-3">
                  {[
                    {
                      src: "/logos/servicenow.png",
                      name: "ServiceNow",
                    },
                    {
                      src: "/logos/jira.svg",
                      name: "Jira Service Management",
                    },
                    {
                      src: "/logos/freshservice.png",
                      name: "Freshservice",
                    },
                    {
                      src: "/logos/bmc.svg",
                      name: "BMC Helix",
                    },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-3 rounded-lg bg-white px-3 py-3 shadow-sm"
                    >
                      <img
                        src={item.src}
                        alt={item.name}
                        className="h-7 w-7 object-contain"
                      />

                      <span className="text-[11px] font-semibold text-[#38557c]">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FABRIC CORE */}

              <div className="relative rounded-2xl border border-emerald-100 bg-gradient-to-b from-[#f1fffc] to-[#effcff] p-4">
                <div className="flex justify-center">
                  <img
                    src="/logos/fabric.png"
                    alt="Fabric"
                    className="h-[52px] w-[52px] object-contain"
                  />
                </div>

                <div className="mt-4 space-y-2">
                  {[
                    ["Ingest", "bg-blue-100 text-blue-700"],
                    ["Transform", "bg-sky-100 text-sky-700"],
                    ["Model", "bg-cyan-100 text-cyan-700"],
                    ["Analyze", "bg-emerald-100 text-emerald-700"],
                    ["Share", "bg-amber-100 text-amber-700"],
                  ].map(([label, cls]) => (
                    <div
                      key={label}
                      className={`rounded-lg px-4 py-2 text-center text-[12px] font-bold ${cls}`}
                    >
                      {label}
                    </div>
                  ))}
                </div>
              </div>

              {/* BUSINESS VALUE */}

              <div className="rounded-2xl bg-[#f7faff] p-4">
                <div className="text-[12px] font-black text-[#102965]">
                  Business Value
                </div>

                <div className="mt-4 space-y-4">
                  {[
                    {
                      icon: <Gauge size={20} />,
                      text: "360° Service Insights",
                    },
                    {
                      icon: <LineChart size={20} />,
                      text: "Faster Decision Making",
                    },
                    {
                      icon: <Coins size={20} />,
                      text: "Cost Optimization",
                    },
                    {
                      icon: <UserRound size={20} />,
                      text: "Better User Experience",
                    },
                  ].map((item) => (
                    <div
                      key={item.text}
                      className="flex items-center gap-3 text-[11px] font-medium text-[#38557c]"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        {item.icon}
                      </div>
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          USE CASES
      ====================================================== */}

      <section className="py-20">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="text-center">
            <div className="text-[11px] font-black uppercase tracking-[0.28em] text-blue-600">
              Real-World Impact
            </div>

            <h2 className="mt-3 text-[36px] font-black tracking-[-0.035em] text-[#102965]">
              Key Use Cases
            </h2>

            <p className="mt-2 text-[16px] text-[#667c99]">
              Turn your ITSM data into enterprise insights with Microsoft Fabric.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <UseCase
              icon={<BarChart3 size={25} />}
              title="Enterprise ITSM Analytics"
              text="Combine data from multiple ITSM tools and other sources for a single source of truth."
            />

            <UseCase
              icon={<UsersRound size={25} />}
              title="Cross-Department Insights"
              text="Analyze service data together with HR, Finance or Operations data in Fabric."
            />

            <UseCase
              icon={<Sparkles size={25} />}
              title="Advanced Analytics"
              text="Use Data Science and AI to predict trends, detect anomalies and improve service delivery."
            />

            <UseCase
              icon={<BarChart3 size={25} />}
              title="Self-Service BI"
              text="Empower business users with trusted, governed data and ready-to-use Power BI reports."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          ARCHITECTURE
      ====================================================== */}

      <section
        id="architecture"
        className="border-y border-blue-100 bg-[#f8fbff] py-16"
      >
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="text-center">
            <h2 className="text-[32px] font-black text-[#102965]">
              Modern Data Architecture for ITSM
            </h2>

            <p className="mt-2 text-[14px] text-[#667c99]">
              A scalable and secure architecture built on Microsoft Fabric.
            </p>
          </div>

          <div className="mt-10 grid gap-4 xl:grid-cols-[1.05fr_repeat(5,1fr)]">
            {/* DATA SOURCES */}

            <div className="rounded-[18px] border border-blue-100 bg-white p-5">
              <div className="text-[13px] font-black text-[#102965]">
                Data Sources
              </div>

              <div className="mt-4 space-y-3">
                {[
                  ["ServiceNow", "/logos/servicenow.png"],
                  ["Jira Service Management", "/logos/jira.svg"],
                  ["Freshservice", "/logos/freshservice.png"],
                  ["BMC Helix", "/logos/bmc.svg"],
                ].map(([name, logo]) => (
                  <div
                    key={name}
                    className="flex items-center gap-3 rounded-lg bg-[#f7faff] px-3 py-2"
                  >
                    <img
                      src={logo}
                      alt={name}
                      className="h-6 w-6 object-contain"
                    />

                    <span className="text-[10px] text-[#496482]">{name}</span>
                  </div>
                ))}

                <div className="flex items-center gap-3 rounded-lg bg-[#f7faff] px-3 py-2">
                  <Network size={20} className="text-blue-600" />
                  <span className="text-[10px] text-[#496482]">
                    Other Systems
                  </span>
                </div>
              </div>
            </div>

            {/* INGEST */}

            <div className="rounded-[18px] border border-blue-100 bg-white p-5 text-center">
              <div className="text-[12px] font-black text-[#102965]">
                Ingest
              </div>

              <div className="mt-4 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
                  <img
                    src="/logos/data-factory.png"
                    alt="Data Factory"
                    className="h-9 w-9 object-contain"
                    onError={undefined}
                  />
                </div>
              </div>

              <div className="mt-4 text-[14px] font-black text-[#102965]">
                Data Factory
              </div>

              <p className="mt-3 text-[11px] leading-5 text-[#667c99]">
                Connect and ingest data from multiple sources.
              </p>
            </div>

            {/* TRANSFORM */}

            <div className="rounded-[18px] border border-blue-100 bg-white p-5 text-center">
              <div className="text-[12px] font-black text-[#102965]">
                Transform
              </div>

              <div className="mt-4 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                  <img
                    src="/logos/data-engineering.png"
                    alt="Data Engineering"
                    className="h-9 w-9 object-contain"
                  />
                </div>
              </div>

              <div className="mt-4 text-[14px] font-black text-[#102965]">
                Data Engineering
              </div>

              <p className="mt-3 text-[11px] leading-5 text-[#667c99]">
                Clean, transform and prepare your data.
              </p>
            </div>

            {/* STORE */}

            <div className="rounded-[18px] border border-blue-100 bg-white p-5 text-center">
              <div className="text-[12px] font-black text-[#102965]">
                Store
              </div>

              <div className="mt-4 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-100">
                  <img
                    src="/logos/onelake.png"
                    alt="OneLake"
                    className="h-9 w-9 object-contain"
                  />
                </div>
              </div>

              <div className="mt-4 text-[14px] font-black text-[#102965]">
                OneLake
              </div>

              <p className="mt-3 text-[11px] leading-5 text-[#667c99]">
                A single, unified data lake for all your ITSM data.
              </p>
            </div>

            {/* MODEL */}

            <div className="rounded-[18px] border border-blue-100 bg-white p-5 text-center">
              <div className="text-[12px] font-black text-[#102965]">
                Model
              </div>

              <div className="mt-4 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                  <Layers3 size={32} />
                </div>
              </div>

              <div className="mt-4 text-[14px] font-black text-[#102965]">
                Semantic Model
              </div>

              <p className="mt-3 text-[11px] leading-5 text-[#667c99]">
                Build governed and reusable semantic models.
              </p>
            </div>

            {/* VISUALIZE */}

            <div className="rounded-[18px] border border-blue-100 bg-white p-5 text-center">
              <div className="text-[12px] font-black text-[#102965]">
                Visualize
              </div>

              <div className="mt-4 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-100">
                  <img
                    src="/logos/powerbi.svg"
                    alt="Power BI"
                    className="h-9 w-9 object-contain"
                  />
                </div>
              </div>

              <div className="mt-4 text-[14px] font-black text-[#102965]">
                Power BI
              </div>

              <p className="mt-3 text-[11px] leading-5 text-[#667c99]">
                Create interactive dashboards and share insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY SUFURIVRO
      ====================================================== */}

      <section className="py-16">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="text-center">
            <h2 className="text-[31px] font-black text-[#102965]">
              Why Choose SUFURIVRO for Microsoft Fabric + ITSM?
            </h2>

            <p className="mt-2 text-[14px] text-[#667c99]">
              Deep domain expertise, modern technology and measurable results.
            </p>
          </div>

          <div className="mt-9 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            <Benefit
              icon={<Zap size={24} />}
              title="Proven Expertise"
              text="ITSM and Microsoft expertise in one partner."
            />

            <Benefit
              icon={<Gauge size={24} />}
              title="Faster Time to Value"
              text="Pre-built accelerators and best practices."
            />

            <Benefit
              icon={<LockKeyhole size={24} />}
              title="Secure and Governed"
              text="Built on Microsoft's enterprise-grade platform."
            />

            <Benefit
              icon={<UsersRound size={24} />}
              title="End-to-End Support"
              text="From data integration to dashboards and beyond."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          ITSM TOOLS STRIP
      ====================================================== */}

      <section className="px-6 pb-8 lg:px-10">
        <div className="mx-auto max-w-[1450px] rounded-[20px] border border-blue-100 bg-gradient-to-r from-[#f2f9ff] via-white to-[#f2f9ff] px-8 py-7">
          <div className="text-center text-[22px] font-black text-[#102965]">
            Works with Leading ITSM Tools
          </div>

          <div className="mt-6 grid items-center gap-8 md:grid-cols-4">
            <a
              href="/servicenow-power-bi"
              className="flex justify-center md:border-r md:border-slate-200"
            >
              <img
                src="/logos/servicenow.png"
                alt="ServiceNow"
                className="max-h-[42px] max-w-[180px] object-contain"
              />
            </a>

            <div className="flex items-center justify-center gap-3 md:border-r md:border-slate-200">
              <img
                src="/logos/jira.svg"
                alt="Jira Service Management"
                className="h-8 w-8 object-contain"
              />
              <span className="text-[20px] font-medium text-[#31547d]">
                Jira Service Management
              </span>
            </div>

            <div className="flex items-center justify-center gap-3 md:border-r md:border-slate-200">
              <img
                src="/logos/freshservice.png"
                alt="Freshservice"
                className="h-8 w-8 object-contain"
              />
              <span className="text-[21px] font-medium text-[#31547d]">
                Freshservice
              </span>
            </div>

            <div className="flex items-center justify-center gap-3">
              <img
                src="/logos/bmc.svg"
                alt="BMC Helix"
                className="h-9 w-9 object-contain"
              />
              <span className="text-[22px] font-black text-slate-700">
                bmc helix
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="px-6 pb-10 lg:px-10">
        <div className="relative mx-auto flex max-w-[1450px] flex-col justify-between gap-7 overflow-hidden rounded-[22px] border border-blue-100 bg-gradient-to-r from-[#eef7ff] via-[#f8fbff] to-[#e5f1ff] px-10 py-8 md:flex-row md:items-center">
          <div className="absolute bottom-0 left-10 flex items-end gap-4 opacity-30">
            {[45, 70, 105, 130, 65].map((h, i) => (
              <div
                key={i}
                className="w-8 rounded-t-lg bg-blue-300"
                style={{ height: h }}
              />
            ))}
          </div>

          <div className="relative md:ml-[315px]">
            <div className="text-[10px] font-black uppercase tracking-[0.28em] text-blue-600">
              Ready to Modernize Your ITSM Data?
            </div>

            <h2 className="mt-2 text-[27px] font-black text-[#102965]">
              Let&apos;s Build Your Microsoft Fabric Journey
            </h2>

            <p className="mt-1 text-[13px] text-[#607690]">
              See how SUFURIVRO can help you unlock more value from your ITSM
              data.
            </p>
          </div>

          <a
            href="/#contact"
            className="relative rounded-xl bg-orange-500 px-8 py-4 text-[15px] font-bold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-orange-600"
          >
            Book a Demo →
          </a>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer active="fabric" />
    </main>
  );
}
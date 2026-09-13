type HeaderProps = {
  active?:
    | "product"
    | "servicenow"
    | "itsm"
    | "fabric"
    | "integrations"
    | "reporting"
    | "dashboards"
    | "features"
    | "contact";
};

export default function Header({ active }: HeaderProps) {
  const normal =
    "whitespace-nowrap transition hover:text-blue-600";

  const selected =
    "whitespace-nowrap border-b-2 border-blue-600 pb-2 font-semibold text-blue-700";

  return (
    <header className="sticky top-0 z-50 border-b border-blue-50 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-3 lg:px-8">
        {/* LOGO */}

        <a href="/" className="flex shrink-0 items-center">
          <img
            src="/logo/logo.png"
            alt="SUFURIVRO"
            className="h-[52px] w-auto object-contain"
          />
        </a>

        {/* NAVIGATION */}

        <nav className="hidden items-center gap-5 whitespace-nowrap text-[13px] font-medium text-slate-600 lg:flex">
          <a
            href="/#product"
            className={active === "product" ? selected : normal}
          >
            Product
          </a>

          <a
            href="/servicenow-power-bi"
            className={active === "servicenow" ? selected : normal}
          >
            ServiceNow Power BI
          </a>

          <a
            href="/itsm-analytics"
            className={active === "itsm" ? selected : normal}
          >
            ITSM Analytics
          </a>

          <a
            href="/microsoft-fabric-itsm"
            className={active === "fabric" ? selected : normal}
          >
            Fabric + ITSM
          </a>

<a
  href="/integrations"
  className={active === "integrations" ? selected : normal}
>
  Integrations
</a>

        <a
  href="/self-service-reporting"
  className={active === "reporting" ? selected : normal}
>
  Self-Service Reporting
</a>

<a
  href="/dashboards"
  className={active === "dashboards" ? selected : normal}
>
  Dashboards
</a>

        
  <a
  href="/contact"
  className={active === "contact" ? selected : normal}
>
  Contact
</a>
        </nav>

        {/* CTA */}

        <a
          href="/#contact"
          className="shrink-0 whitespace-nowrap rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-orange-600"
        >
          Book a Demo →
        </a>
      </div>
    </header>
  );
}
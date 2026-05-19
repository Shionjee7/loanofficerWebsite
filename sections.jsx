// Page sections for the loan-officer site.

const { useState: useStateS, useEffect: useEffectS, useMemo: useMemoS, useRef: useRefS } = React;

/* ============================================================
   NAV
============================================================ */
function Nav() {
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "color-mix(in oklab, var(--canvas), white 60%)",
      backdropFilter: "saturate(140%) blur(8px)",
      WebkitBackdropFilter: "saturate(140%) blur(8px)",
      borderBottom: "1px solid var(--hairline)",
    }}>
      <div className="container" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 68,
      }}>
        <Wordmark />
        <div className="nav-links" style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {["Loans", "Process", "Calculator", "About"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{
              fontSize: 14, color: "var(--ink)", opacity: 0.78,
            }}>{l}</a>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <a href="tel:+18326292892" className="nav-phone-text" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontSize: 14, color: "var(--ink)", fontFamily: "var(--mono)",
          }}>
            <Icon.phone /> (832) 629-2892
          </a>
          <a href="https://1922182.my1003app.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: 13, padding: "10px 14px" }}>Apply now <Icon.arrow /></a>
        </div>
      </div>
    </nav>
  );
}

/* ============================================================
   HERO
============================================================ */
function Hero() {
  return (
    <header id="top" style={{ paddingTop: 56, paddingBottom: 96, position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        background:
          "radial-gradient(900px 420px at 18% -10%, color-mix(in oklab, var(--primary), white 80%), transparent 70%)",
        opacity: 0.6, pointerEvents: "none",
      }}/>
      <div className="container" style={{
        position: "relative",
        display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "center",
      }} className="hero-grid">
        <div className="fade-up">
          <div className="eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
            <span style={{
              width: 6, height: 6, borderRadius: "50%", background: "var(--good)",
              display: "inline-block",
            }}/>
            NMLS #2715865 · Mortgage Loan Officer
          </div>

          <h1 className="h-display" style={{
            fontSize: "clamp(48px, 5.6vw, 76px)",
            margin: "20px 0 22px",
          }}>
            Hi, I'm Shion.<br/>
            <span style={{ fontStyle: "italic", color: "var(--primary)" }}>Let's talk about a mortgage.</span>
          </h1>

          <p style={{
            fontSize: 19, lineHeight: 1.5, color: "var(--muted)",
            maxWidth: 520, marginBottom: 36, textWrap: "pretty",
          }}>
            I'm a mortgage loan officer who works mostly with first-time buyers.
            Call, text, or email and we'll figure out what fits — no pressure,
            no pre-canned pitch.
          </p>

          <div style={{
            display: "flex", gap: 14, paddingTop: 28, flexWrap: "wrap",
            borderTop: "1px solid var(--hairline)",
          }}>
            <a href="tel:+18326292892" className="btn btn-primary">
              <Icon.phone size={14} /> (832) 629-2892
            </a>
            <a href="sms:+18326292892" className="btn btn-ghost">Text me</a>
            <a href="mailto:shion@ravihomeloans.com" className="btn btn-ghost">
              <Icon.mail size={14} /> Email
            </a>
          </div>
        </div>

        {/* Right: clean "start here" card — no rate or payment promises */}
        <aside className="card" style={{
          padding: 36,
          boxShadow: "0 1px 0 var(--hairline), 0 30px 60px -30px rgba(11,23,38,0.18)",
        }}>
          <div className="eyebrow">Start here</div>
          <h2 style={{
            fontFamily: "var(--serif)", fontSize: 32, fontWeight: 500,
            letterSpacing: "-0.02em", lineHeight: 1.15,
            margin: "12px 0 12px",
          }}>
            The first conversation is just figuring out what fits.
          </h2>
          <p style={{
            fontSize: 15.5, lineHeight: 1.55, color: "var(--muted)",
            margin: "0 0 24px", textWrap: "pretty",
          }}>
            Whether you're curious or ready to write an offer this week —
            start the application or pick up the phone.
          </p>

          <a
            href="https://1922182.my1003app.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{
              width: "100%", justifyContent: "center",
              padding: "16px 22px", fontSize: 15.5,
              boxShadow: "0 14px 28px -14px color-mix(in oklab, var(--primary), black 20%)",
            }}
          >
            Start a secure application <Icon.arrow size={16} />
          </a>

          <div style={{
            marginTop: 14, paddingTop: 18, borderTop: "1px solid var(--hairline)",
            display: "flex", justifyContent: "space-between", alignItems: "center",
            fontSize: 13.5, color: "var(--muted)",
          }}>
            <span>Rather talk first?</span>
            <a href="tel:+18326292892" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              color: "var(--ink)", fontFamily: "var(--mono)",
            }}>
              <Icon.phone /> (832) 629-2892
            </a>
          </div>

          <p style={{
            marginTop: 16, fontSize: 11, lineHeight: 1.5,
            color: "var(--muted)", textAlign: "center", margin: "16px 0 0",
          }}>
            Not a commitment to lend. All loans subject to credit approval and underwriting.
          </p>
        </aside>
      </div>
    </header>
  );
}

/* ============================================================
   TRUST BAR (logos / partners marquee)
============================================================ */
function TrustBar() {
  const items = ["Fannie Mae approved", "Freddie Mac seller", "FHA Direct Endorsed", "VA Automatic", "USDA RD", "Equal Housing Lender"];
  return (
    <section style={{
      borderTop: "1px solid var(--hairline)",
      borderBottom: "1px solid var(--hairline)",
      background: "color-mix(in oklab, var(--canvas), white 30%)",
      overflow: "hidden",
    }}>
      <div className="container" style={{
        display: "flex", gap: 56, padding: "20px 32px",
        alignItems: "center", justifyContent: "space-between",
        fontFamily: "var(--mono)", fontSize: 11.5, letterSpacing: "0.12em",
        textTransform: "uppercase", color: "var(--muted)",
      }}>
        {items.map((x) => (
          <div key={x} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 5, height: 5, background: "var(--accent)", borderRadius: 1 }} />
            {x}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   LOAN PRODUCTS
============================================================ */
function Products() {
  const items = [
    { key: "ftb",  Icon: Icon.key,    title: "First-time homebuyer", desc: "Walking new buyers through every step — from the first conversation to closing day.", chip: "My favorite work" },
    { key: "conv", Icon: Icon.house,  title: "Conventional",         desc: "Standard 30- and 15-year fixed loans for buyers with established credit.", chip: "Fixed-rate options" },
    { key: "fha",  Icon: Icon.shield, title: "FHA",                  desc: "Government-backed loans with flexible credit and down-payment minimums.", chip: "FHA-insured" },
    { key: "va",   Icon: Icon.flag,   title: "VA",                   desc: "Purchase and streamline refinance loans for veterans and active duty.", chip: "For veterans" },
    { key: "refi", Icon: Icon.refi,   title: "Refinance",            desc: "Rate-and-term and cash-out refinance options — we'll model them side-by-side first.", chip: "Rate & term · Cash-out" },
    { key: "heloc",Icon: Icon.wallet, title: "HELOC / Home equity",  desc: "Tap home equity for renovations, debt consolidation, or other needs.", chip: "Home equity" },
    { key: "inv",  Icon: Icon.growth, title: "Investment property",  desc: "Conventional and DSCR financing for 1–4 unit rentals and short-term rentals.", chip: "For investors" },
  ];
  return (
    <section id="loans" style={{ padding: "120px 0 96px" }}>
      <div className="container">
        <div style={{
          display: "grid", gridTemplateColumns: "1fr auto", alignItems: "end", gap: 24,
          marginBottom: 48,
        }} className="products-header">
          <SectionHead
            eyebrow="What I can help with"
            title="Different loans for different people. Here's what I do."
            sub="First-time buyers are my favorite work, but I write all the major loan types. Tell me your situation and I'll point you to the program that fits — with the math in writing."
          />
          <a href="#apply" className="btn btn-ghost">Talk to me <Icon.arrow /></a>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0,
          border: "1px solid var(--hairline)", borderRadius: "var(--r-lg)",
          background: "var(--paper)", overflow: "hidden",
        }} className="products-grid">
          {items.map((it, i) => {
            const col = i % 3, row = Math.floor(i / 3);
            const borderRight = col < 2 ? "1px solid var(--hairline)" : "none";
            const borderBottom = row < Math.floor((items.length-1)/3) ? "1px solid var(--hairline)" : "none";
            return (
              <article key={it.key} style={{
                padding: 28, borderRight, borderBottom,
                display: "flex", flexDirection: "column", gap: 12, minHeight: 220,
                transition: "background .15s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "var(--field)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                <div style={{ color: "var(--primary)" }}><it.Icon /></div>
                <h3 style={{
                  fontFamily: "var(--serif)", fontSize: 24, lineHeight: 1.15,
                  fontWeight: 500, letterSpacing: "-0.01em", margin: 0,
                }}>{it.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: 14.5, lineHeight: 1.5, margin: 0, flex: 1, textWrap: "pretty" }}>{it.desc}</p>
                <div style={{
                  marginTop: 6, display: "inline-flex", alignSelf: "flex-start",
                  fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase",
                  color: "var(--ink)", background: "var(--field)",
                  padding: "5px 10px", borderRadius: 999,
                }}>{it.chip}</div>
              </article>
            );
          })}
          {/* fill empty cell */}
          {items.length % 3 !== 0 && Array.from({ length: 3 - (items.length % 3) }).map((_, i) => (
            <div key={"empty"+i} style={{
              padding: 28,
              borderRight: i < (3 - (items.length % 3)) - 1 ? "1px solid var(--hairline)" : "none",
              background:
                "repeating-linear-gradient(135deg, transparent 0 14px, color-mix(in oklab, var(--hairline), white 30%) 14px 15px)",
            }} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ABOUT
============================================================ */
function About() {
  return (
    <section id="about" style={{
      padding: "96px 0",
      background: "var(--primary)",
      color: "color-mix(in oklab, var(--canvas), white 70%)",
      position: "relative",
    }}>
      <div className="container" style={{
        display: "grid", gridTemplateColumns: "0.75fr 1.25fr", gap: 80, alignItems: "center",
      }} className="about-grid">
        {/* Portrait card */}
        <div className="about-portrait" style={{ position: "relative", maxWidth: 340, width: "100%" }}>
          <div style={{
            borderRadius: "var(--r-lg)",
            overflow: "hidden",
            boxShadow: "0 50px 80px -40px rgba(0,0,0,0.5)",
            aspectRatio: "4/5",
            background: "#2a2118",
          }}>
            <img
              src="shion-portrait.webp"
              alt="Shion Michael, mortgage loan officer in Richmond, Virginia"
              style={{
                width: "100%", height: "100%",
                objectFit: "cover", objectPosition: "50% 18%",
                display: "block",
              }}
            />
          </div>
          {/* signature card */}
          <div style={{
            position: "absolute", right: -24, bottom: -24,
            background: "var(--canvas)", color: "var(--ink)",
            padding: "16px 20px", borderRadius: 10,
            boxShadow: "0 20px 40px -20px rgba(0,0,0,0.4)",
            display: "flex", gap: 14, alignItems: "center",
          }}>
            <div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 500 }}>Shion Michael</div>
              <div style={{ fontSize: 12, color: "var(--muted)" }}>Mortgage Loan Officer · NMLS #2715865</div>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div>
          <div className="eyebrow" style={{ color: "var(--accent)" }}>About</div>
          <h2 className="h-section" style={{
            color: "color-mix(in oklab, white, var(--canvas) 20%)",
            fontSize: 52, marginTop: 14,
          }}>
            Mortgage lending,<br/>
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>without the runaround.</em>
          </h2>
          <p style={{ marginTop: 24, fontSize: 17, lineHeight: 1.6, opacity: 0.85, maxWidth: 560, textWrap: "pretty" }}>
            I'm a mortgage loan officer at Ravi Home Loans. I specialize in
            first-time buyers — walking you through the parts of the loan
            process that nobody bothers to explain, in plain English, on your
            schedule.
          </p>

          <ul className="about-bullets" style={{ listStyle: "none", padding: 0, margin: "32px 0 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 28px" }}>
            {[
              "First-time buyer focused",
              "Plain-English explanations",
              "You'll work directly with me",
              "Bilingual: English & Español",
            ].map((x) => (
              <li key={x} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 14.5 }}>
                <span style={{ color: "var(--accent)" }}><Icon.check /></span>{x}
              </li>
            ))}
          </ul>

          <div style={{ display: "flex", gap: 12, marginTop: 36 }}>
            <a href="#apply" className="btn btn-accent">Start an application <Icon.arrow size={16} /></a>
            <a href="#calculator" className="btn btn-ghost" style={{
              color: "var(--canvas)", borderColor: "rgba(255,255,255,0.25)", background: "transparent",
            }}>Run a calculator</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PROCESS
============================================================ */
function Process() {
  const steps = [
    { n: "01", t: "Conversation", d: "A call to talk through your goals, timeline, and questions. No pressure.", days: "Step 1" },
    { n: "02", t: "Pre-approval", d: "You complete a secure application. I review your file and we go from there.", days: "Step 2" },
    { n: "03", t: "Find the home",  d: "I'm available to talk through the financing on offers before you sign.", days: "Step 3" },
    { n: "04", t: "Underwriting", d: "Your file is submitted, conditions are worked through, and we move toward closing.", days: "Step 4" },
    { n: "05", t: "Close",        d: "You sign with a notary and — the part everyone waits for — get the keys.", days: "Step 5" },
  ];
  return (
    <section id="process" style={{ padding: "120px 0" }}>
      <div className="container">
          <SectionHead
            eyebrow="How I work"
            title="Five steps. One checklist. No surprises."
            sub="The mortgage process isn't actually mysterious — it just usually isn't explained. Here's the whole thing on one page."
          />

        <div className="process-grid" style={{
          marginTop: 56,
          display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 0,
          position: "relative",
        }}>
          {/* connecting line */}
          <div aria-hidden="true" className="process-line" style={{
            position: "absolute", left: "8%", right: "8%", top: 24, height: 1,
            background: "var(--hairline)",
          }}/>
          {steps.map((s, i) => (
            <div key={s.n} style={{ padding: "0 14px", position: "relative" }}>
              <div style={{
                width: 48, height: 48, borderRadius: "50%",
                background: "var(--canvas)",
                border: "1px solid var(--hairline)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--mono)", fontSize: 13, color: "var(--primary)",
                position: "relative", zIndex: 1, marginBottom: 18,
              }}>{s.n}</div>
              <div className="eyebrow" style={{ color: "var(--accent)", marginBottom: 6 }}>{s.days}</div>
              <h3 style={{
                fontFamily: "var(--serif)", fontSize: 22, margin: "0 0 8px",
                fontWeight: 500, letterSpacing: "-0.01em",
              }}>{s.t}</h3>
              <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.5, margin: 0, textWrap: "pretty" }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SERVICE AREA — Richmond & Virginia (also great for local SEO)
============================================================ */
function ServiceArea() {
  const richmondMetro = [
    "Richmond", "Henrico", "Chesterfield", "Glen Allen",
    "Midlothian", "Mechanicsville", "Short Pump", "Bon Air",
    "Tuckahoe", "Innsbrook", "Hanover", "Powhatan",
  ];
  const restOfVA = [
    "Charlottesville", "Williamsburg", "Fredericksburg", "Petersburg",
    "Hampton Roads", "Newport News", "Norfolk", "Virginia Beach",
    "Roanoke", "Lynchburg", "Harrisonburg", "Northern Virginia",
  ];
  return (
    <section id="areas" style={{
      padding: "112px 0",
      background: "var(--paper)",
      borderTop: "1px solid var(--hairline)",
      borderBottom: "1px solid var(--hairline)",
    }}>
      <div className="container" style={{
        display: "grid", gridTemplateColumns: "0.9fr 1.4fr", gap: 64, alignItems: "start",
      }}>
        <div>
          <SectionHead
            eyebrow="Where I lend"
            title="Richmond, the metro, and the rest of Virginia."
            sub="I write loans throughout Virginia, with most of my clients in the Richmond area. If your home (or future home) is in the Commonwealth, we can do this."
          />

          <div style={{
            marginTop: 28,
            padding: 20,
            border: "1px solid var(--hairline)",
            borderRadius: 10,
            background: "var(--field)",
            display: "flex", gap: 16, alignItems: "flex-start",
          }}>
            <span style={{ color: "var(--primary)", marginTop: 2 }}><Icon.house /></span>
            <div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 18, fontWeight: 500, marginBottom: 4 }}>
                Licensed in Virginia
              </div>
              <div style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.5 }}>
                NMLS #2715865 · Virginia Bureau of Financial Institutions
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          <AreaColumn title="Richmond metro" items={richmondMetro} primary />
          <AreaColumn title="Across Virginia" items={restOfVA} />
        </div>
      </div>
    </section>
  );
}

function AreaColumn({ title, items, primary }) {
  return (
    <div>
      <div className="eyebrow" style={{
        color: primary ? "var(--primary)" : "var(--muted)",
        marginBottom: 16,
      }}>{title}</div>
      <ul style={{
        listStyle: "none", padding: 0, margin: 0,
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 16px",
      }}>
        {items.map((c) => (
          <li key={c} style={{
            display: "flex", alignItems: "center", gap: 10,
            fontSize: 14.5, color: "var(--ink)",
          }}>
            <span style={{
              width: 5, height: 5, borderRadius: 1,
              background: primary ? "var(--accent)" : "var(--hairline)",
            }}/>
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ============================================================
   RATES (today's rates table — illustrative)
============================================================ */
function Rates() {
  const rows = [
    { name: "30-year fixed",     rate: 6.625, apr: 6.742, change: -0.05 },
    { name: "20-year fixed",     rate: 6.375, apr: 6.498, change: -0.05 },
    { name: "15-year fixed",     rate: 5.875, apr: 6.012, change: -0.03 },
    { name: "FHA 30-year fixed", rate: 6.250, apr: 7.105, change: -0.02 },
    { name: "VA 30-year fixed",  rate: 6.125, apr: 6.380, change: -0.04 },
    { name: "7/6 ARM",           rate: 6.000, apr: 6.951, change:  0.01 },
  ];
  const stamp = "Tue, May 18 · 10:42 AM CT";
  return (
    <section id="rates" style={{
      padding: "112px 0",
      background: "var(--paper)",
      borderTop: "1px solid var(--hairline)",
      borderBottom: "1px solid var(--hairline)",
    }}>
      <div className="container" style={{
        display: "grid", gridTemplateColumns: "0.9fr 1.4fr", gap: 64, alignItems: "start",
      }}>
        <div>
          <SectionHead
            eyebrow="Today's rates"
            title="Real rates. Updated this morning."
            sub="Sample scenarios for a $400,000 loan, 740+ FICO, 20% down, owner-occupied. Your rate depends on your file — quote yours above."
          />
          <div style={{
            marginTop: 28, padding: 16,
            background: "var(--field)", borderRadius: 10,
            fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink)",
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <span>Updated <strong>{stamp}</strong></span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--good)" }}/>
              Live
            </span>
          </div>
        </div>

        <div className="card" style={{ overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "var(--field)" }}>
                {["Program", "Rate", "APR", "Δ today"].map((h, i) => (
                  <th key={h} style={{
                    textAlign: i === 0 ? "left" : "right",
                    padding: "14px 20px",
                    fontFamily: "var(--mono)", fontSize: 11,
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    color: "var(--muted)", fontWeight: 500,
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.name} style={{
                  borderTop: "1px solid var(--hairline)",
                }}>
                  <td style={{ padding: "18px 20px", fontSize: 15 }}>{r.name}</td>
                  <td style={{ padding: "18px 20px", textAlign: "right", fontFamily: "var(--serif)", fontSize: 22, fontWeight: 500 }}>
                    {r.rate.toFixed(3)}<span style={{ fontSize: 14, color: "var(--muted)" }}>%</span>
                  </td>
                  <td style={{ padding: "18px 20px", textAlign: "right", fontFamily: "var(--mono)", fontSize: 13, color: "var(--muted)" }}>
                    {r.apr.toFixed(3)}%
                  </td>
                  <td style={{
                    padding: "18px 20px", textAlign: "right", fontFamily: "var(--mono)", fontSize: 13,
                    color: r.change < 0 ? "var(--good)" : "#A23B2A",
                  }}>
                    {r.change > 0 ? "+" : ""}{r.change.toFixed(2)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   MORTGAGE CALCULATOR
============================================================ */
function Calculator() {
  const [price, setPrice] = useStateS(450000);
  const [downPct, setDownPct] = useStateS(10);
  const [rate, setRate] = useStateS(6.625);
  const [term, setTerm] = useStateS(30);
  const [taxRate, setTaxRate] = useStateS(1.8);    // % per year of price
  const [insurance, setInsurance] = useStateS(140); // $/month

  const calc = useMemoS(() => {
    const down = price * (downPct / 100);
    const loan = Math.max(price - down, 0);
    const r = rate / 100 / 12;
    const n = term * 12;
    const pi = r === 0 ? loan / n : (loan * r) / (1 - Math.pow(1 + r, -n));
    const tax = (price * (taxRate / 100)) / 12;
    const pmi = downPct < 20 ? loan * 0.0055 / 12 : 0; // ~0.55%/yr
    const total = pi + tax + insurance + pmi;
    return { loan, down, pi, tax, pmi, total };
  }, [price, downPct, rate, term, taxRate, insurance]);

  const breakdown = [
    { label: "Principal & interest", value: calc.pi, color: "var(--primary)" },
    { label: "Property tax",          value: calc.tax, color: "var(--accent)" },
    { label: "Homeowners insurance",  value: insurance, color: "color-mix(in oklab, var(--primary), white 45%)" },
    { label: "PMI",                   value: calc.pmi, color: "color-mix(in oklab, var(--accent), black 25%)" },
  ];
  const totalForRing = breakdown.reduce((s, b) => s + b.value, 0) || 1;

  return (
    <section id="calculator" style={{ padding: "120px 0" }}>
      <div className="container">
        <SectionHead
          eyebrow="Estimator"
          title="Get a rough sense of what a monthly payment could look like."
          sub="Drag the sliders to model different scenarios. This is for illustration only — your actual quote will look different."
        />

        <div className="card calc-grid" style={{
          marginTop: 56, padding: 40,
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56,
        }}>
          {/* Inputs */}
          <div>
            <CalcRow label="Home price" value={fmt.money(price)}>
              <input type="range" min="100000" max="2000000" step="5000"
                value={price} onChange={(e) => setPrice(+e.target.value)} className="range" />
              <ScaleRow ticks={["$100k","$500k","$1M","$2M"]} />
            </CalcRow>
            <CalcRow label="Down payment" value={`${downPct}% · ${fmt.money(calc.down)}`}>
              <input type="range" min="0" max="50" step="0.5"
                value={downPct} onChange={(e) => setDownPct(+e.target.value)} className="range" />
              <ScaleRow ticks={["0%","20%","50%"]} />
            </CalcRow>
            <CalcRow label="Interest rate" value={`${rate.toFixed(3)}%`}>
              <input type="range" min="3" max="10" step="0.125"
                value={rate} onChange={(e) => setRate(+e.target.value)} className="range" />
              <ScaleRow ticks={["3%","6%","10%"]} />
            </CalcRow>
            <CalcRow label="Loan term" value={`${term} years`}>
              <div style={{ display: "flex", gap: 8 }}>
                {[15, 20, 30].map((t) => (
                  <button key={t} onClick={() => setTerm(t)} style={{
                    flex: 1, padding: "10px 0", borderRadius: 8,
                    border: `1px solid ${term===t ? "var(--primary)" : "var(--hairline)"}`,
                    background: term===t ? "var(--primary)" : "transparent",
                    color: term===t ? "#fff" : "var(--ink)",
                    fontSize: 14, fontWeight: 500,
                  }}>{t} yr</button>
                ))}
              </div>
            </CalcRow>

            <details style={{ marginTop: 12 }}>
              <summary style={{ cursor: "pointer", fontSize: 13, color: "var(--muted)", padding: "8px 0" }}>
                Advanced — taxes & insurance
              </summary>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 12 }}>
                <div>
                  <label className="label">Property tax (% / yr)</label>
                  <input className="field" type="number" value={taxRate} step="0.1" onChange={(e) => setTaxRate(+e.target.value)} />
                </div>
                <div>
                  <label className="label">Insurance ($/mo)</label>
                  <input className="field" type="number" value={insurance} step="10" onChange={(e) => setInsurance(+e.target.value)} />
                </div>
              </div>
            </details>
          </div>

          {/* Output */}
          <div style={{
            background: "var(--field)", borderRadius: "var(--r-lg)",
            padding: 32, display: "flex", flexDirection: "column", gap: 20,
          }}>
            <div>
              <div className="eyebrow">Estimated monthly</div>
              <div style={{
                fontFamily: "var(--serif)", fontSize: 64, fontWeight: 500,
                letterSpacing: "-0.02em", marginTop: 4, lineHeight: 1,
                color: "var(--ink)",
              }}>{fmt.money(calc.total)}</div>
              <div style={{ marginTop: 8, color: "var(--muted)", fontSize: 13.5 }}>
                Loan amount {fmt.money(calc.loan)} · {term}-yr fixed @ {rate.toFixed(3)}%
              </div>
            </div>

            <DonutRing breakdown={breakdown} total={totalForRing} />

            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
              {breakdown.map((b) => (
                <li key={b.label} style={{
                  display: "grid", gridTemplateColumns: "12px 1fr auto",
                  gap: 12, alignItems: "center",
                  fontSize: 14,
                }}>
                  <span style={{ width: 10, height: 10, borderRadius: 2, background: b.color }}/>
                  <span style={{ color: "var(--ink)" }}>{b.label}</span>
                  <span style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--muted)" }}>
                    {fmt.money2(b.value)}
                  </span>
                </li>
              ))}
            </ul>

            <a href="#apply" className="btn btn-primary" style={{ alignSelf: "flex-start", marginTop: 4 }}>
              Start an application <Icon.arrow size={16} />
            </a>
          </div>
        </div>

        <p style={{ marginTop: 18, fontSize: 12, color: "var(--muted)", textAlign: "center", lineHeight: 1.55, maxWidth: 720, marginInline: "auto" }}>
          For illustration only. Estimates assume a fixed-rate loan and do not
          reflect APR, closing costs, HOA dues, or your actual loan terms.
          This calculator is not a loan estimate or commitment to lend.
        </p>
      </div>

      <style>{`
        .range {
          -webkit-appearance: none; appearance: none;
          width: 100%; height: 4px; background: var(--hairline);
          border-radius: 999px; outline: none; margin: 8px 0;
        }
        .range::-webkit-slider-thumb {
          -webkit-appearance: none; appearance: none;
          width: 20px; height: 20px; border-radius: 50%;
          background: var(--paper); border: 1.5px solid var(--primary);
          box-shadow: 0 1px 4px rgba(11,23,38,0.25);
          cursor: grab;
        }
        .range::-moz-range-thumb {
          width: 20px; height: 20px; border-radius: 50%;
          background: var(--paper); border: 1.5px solid var(--primary);
          cursor: grab;
        }
      `}</style>
    </section>
  );
}
function CalcRow({ label, value, children }) {
  return (
    <div style={{ marginBottom: 22 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
        <span className="label" style={{ marginBottom: 0 }}>{label}</span>
        <span style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink)" }}>{value}</span>
      </div>
      {children}
    </div>
  );
}
function ScaleRow({ ticks }) {
  return (
    <div style={{
      display: "flex", justifyContent: "space-between",
      fontFamily: "var(--mono)", fontSize: 10.5, color: "var(--muted)",
      marginTop: 4,
    }}>{ticks.map((t) => <span key={t}>{t}</span>)}</div>
  );
}
function DonutRing({ breakdown, total }) {
  const size = 168, stroke = 22, r = (size - stroke) / 2;
  const C = 2 * Math.PI * r;
  let acc = 0;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="color-mix(in oklab, var(--hairline), white 30%)" strokeWidth={stroke}/>
        {breakdown.map((b, i) => {
          const frac = b.value / total;
          const len = frac * C;
          const dasharray = `${len} ${C - len}`;
          const dashoffset = -acc * C;
          acc += frac;
          return (
            <circle key={i} cx={size/2} cy={size/2} r={r} fill="none"
              stroke={b.color} strokeWidth={stroke}
              strokeDasharray={dasharray} strokeDashoffset={dashoffset}
              transform={`rotate(-90 ${size/2} ${size/2})`}
              style={{ transition: "stroke-dasharray .3s, stroke-dashoffset .3s" }}/>
          );
        })}
      </svg>
      <div>
        <div className="eyebrow">Total monthly</div>
        <div style={{ fontFamily: "var(--serif)", fontSize: 28, fontWeight: 500, marginTop: 2 }}>{fmt.money(total)}</div>
      </div>
    </div>
  );
}

/* ============================================================
   APPLY — single CTA into the real application (Arive 1003)
============================================================ */
const APPLY_URL = "https://1922182.my1003app.com";
function applyHref() {
  return `${APPLY_URL}?time=${Date.now()}`;
}

function Apply() {
  return (
    <section id="apply" style={{
      padding: "120px 0",
      background: "color-mix(in oklab, var(--canvas), white 30%)",
    }}>
      <div className="container apply-grid" style={{
        display: "grid", gridTemplateColumns: "0.95fr 1.05fr", gap: 64, alignItems: "center",
      }}>
        <div>
          <SectionHead
            eyebrow="Apply now"
            title="Ready when you are."
            sub="Start the application whenever you're ready. I'll review your file and follow up to talk through next steps."
          />
          <ul style={{ listStyle: "none", padding: 0, margin: "32px 0 0", display: "grid", gap: 14 }}>
            {[
              "You'll work directly with me",
              "A secure online application",
              "No obligation to move forward",
              "Questions answered along the way",
            ].map((x) => (
              <li key={x} style={{ display: "flex", gap: 12, alignItems: "center", color: "var(--ink)" }}>
                <span style={{
                  width: 22, height: 22, borderRadius: "50%",
                  background: "var(--primary)", color: "#fff",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                }}><Icon.check size={12} /></span>
                <span style={{ fontSize: 14.5 }}>{x}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card" style={{
          padding: 44,
          textAlign: "center",
          background: "var(--paper)",
          boxShadow: "0 1px 0 var(--hairline), 0 40px 80px -40px rgba(11,23,38,0.18)",
        }}>
          <div className="eyebrow" style={{ color: "var(--accent)" }}>Secure application</div>
          <h3 style={{
            fontFamily: "var(--serif)",
            fontSize: 40, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.1,
            margin: "14px 0 14px",
          }}>
            Start your pre-approval
          </h3>
          <p style={{ color: "var(--muted)", fontSize: 15.5, lineHeight: 1.5, maxWidth: 380, margin: "0 auto 28px", textWrap: "pretty" }}>
            Opens in a new window. Your information goes straight to me — nobody else touches it.
          </p>

          <a
            href={applyHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{
              fontSize: 16, padding: "18px 28px", width: "100%", justifyContent: "center",
              boxShadow: "0 14px 28px -14px color-mix(in oklab, var(--primary), black 20%)",
            }}
          >
            Apply now <Icon.arrow size={16} />
          </a>

          <div style={{
            marginTop: 22, paddingTop: 22, borderTop: "1px solid var(--hairline)",
            display: "flex", justifyContent: "space-between", alignItems: "center",
            fontSize: 13, color: "var(--muted)",
          }}>
            <span>Prefer to talk first?</span>
            <a href="tel:+18326292892" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              color: "var(--ink)", fontFamily: "var(--mono)",
            }}>
              <Icon.phone /> (832) 629-2892
            </a>
          </div>

          <div style={{
            marginTop: 18, fontFamily: "var(--mono)", fontSize: 10.5, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "var(--muted)",
            display: "inline-flex", alignItems: "center", gap: 8,
          }}>
            <Icon.shield size={12} /> Powered by Arive · 1003 secure application
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER — personal, not corporate
============================================================ */
function Footer() {
  return (
    <footer style={{
      background: "var(--ink)", color: "color-mix(in oklab, white, var(--ink) 30%)",
      paddingTop: 80, paddingBottom: 32,
    }}>
      <div className="container">
        <div className="footer-grid" style={{
          display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", gap: 56, alignItems: "start",
        }}>
          {/* Big sign-off */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Logo size={30} color="var(--accent)" />
              <div>
                <div style={{ fontFamily: "var(--serif)", fontSize: 22, color: "var(--canvas)", lineHeight: 1 }}>
                  Shion Michael
                </div>
                <div style={{
                  fontFamily: "var(--mono)", fontSize: 10.5, letterSpacing: "0.14em",
                  textTransform: "uppercase", color: "var(--accent)", marginTop: 6,
                }}>Mortgage Loan Officer</div>
              </div>
            </div>
            <p style={{
              marginTop: 22, fontSize: 15, lineHeight: 1.6,
              color: "color-mix(in oklab, white, var(--ink) 50%)", maxWidth: 360, textWrap: "pretty",
            }}>
              Mortgages, written like a person wrote them. I'd love to help you
              with your next one — talk soon.
            </p>
          </div>

          {/* Reach me */}
          <div>
            <div className="eyebrow" style={{ color: "var(--accent)", marginBottom: 16 }}>Reach me</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 14, fontSize: 15 }}>
              <li>
                <a href="tel:+18326292892" style={{ display: "inline-flex", gap: 10, alignItems: "center" }}>
                  <Icon.phone /> (832) 629-2892
                </a>
              </li>
              <li>
                <a href="sms:+18326292892" style={{ display: "inline-flex", gap: 10, alignItems: "center", opacity: 0.85 }}>
                  Text the same number
                </a>
              </li>
              <li>
                <a href="mailto:shion@ravihomeloans.com" style={{ display: "inline-flex", gap: 10, alignItems: "center" }}>
                  <Icon.mail /> shion@ravihomeloans.com
                </a>
              </li>
              <li>
                <a href="https://ravihomeloans.com" style={{ display: "inline-flex", gap: 10, alignItems: "center", opacity: 0.85 }}>
                  ravihomeloans.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <div className="eyebrow" style={{ color: "var(--accent)", marginBottom: 16 }}>On this page</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12, fontSize: 15 }}>
              {[
                ["Loans I write", "#loans"],
                ["How I work", "#process"],
                ["Calculator", "#calculator"],
                ["Apply for pre-approval", "#apply"],
              ].map(([t, h]) => (
                <li key={h}><a href={h} style={{ opacity: 0.85 }}>{t}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="hairline" style={{
          margin: "56px 0 24px",
          background: "rgba(255,255,255,0.1)",
        }}/>

        <div className="footer-bottom" style={{
          display: "flex", gap: 24, justifyContent: "space-between",
          fontFamily: "var(--mono)", fontSize: 11, color: "rgba(255,255,255,0.5)",
          flexWrap: "wrap",
        }}>
          <span>© {new Date().getFullYear()} Shion Michael · NMLS #2715865 · Equal Housing Lender</span>
          <span>Affiliated with Ravi Home Loans</span>
        </div>
        <p style={{
          marginTop: 16, fontSize: 11, lineHeight: 1.55,
          color: "rgba(255,255,255,0.35)", maxWidth: 920,
        }}>
          Rates and scenarios shown on this site are for illustration only and
          do not constitute an offer of credit. All loans are subject to
          underwriting approval, including verification of credit, income,
          assets, and property. Equal Housing Lender. NMLS Consumer Access:
          <a href="https://www.nmlsconsumeraccess.org" style={{ color: "rgba(255,255,255,0.65)", textDecoration: "underline", marginLeft: 6 }}>
            nmlsconsumeraccess.org
          </a>.
        </p>
      </div>
    </footer>
  );
}

Object.assign(window, {
  Nav, Hero, TrustBar, Products, About, Process, ServiceArea, Rates, Calculator, Apply, Footer,
});

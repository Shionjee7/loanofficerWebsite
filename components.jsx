// Shared building blocks for the loan-officer site.
// All exports are attached to window at the bottom so other babel files can see them.

const { useState, useEffect, useRef, useMemo } = React;

/* ---------- Brand mark: little house glyph (matches business card) ---------- */
function Logo({ size = 28, color }) {
  const c = color || "var(--accent)";
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      {/* roof + walls */}
      <path d="M5 15 L16 6 L27 15"
            fill="none" stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 14 V25 H25 V14"
            fill="none" stroke={c} strokeWidth="1.7" strokeLinejoin="round" />
      {/* doorway */}
      <path d="M14 25 V19 H18 V25"
            fill="none" stroke={c} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

/* ---------- Wordmark — Shion's personal mark with affiliation underline ---------- */
function Wordmark() {
  return (
    <a href="#top" style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
      <Logo size={26} />
      <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.05 }}>
        <span style={{
          fontFamily: "var(--serif)",
          fontSize: 20,
          fontWeight: 500,
          letterSpacing: "-0.01em",
          color: "var(--ink)",
        }}>Shion Michael</span>
        <span style={{
          fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.14em",
          textTransform: "uppercase", color: "var(--muted)", marginTop: 3,
        }}>Mortgage Loan Officer</span>
      </span>
    </a>
  );
}

/* ---------- Section heading block ---------- */
function SectionHead({ eyebrow, title, sub, align = "left", maxW = 720 }) {
  return (
    <div style={{ textAlign: align, maxWidth: maxW, margin: align === "center" ? "0 auto" : 0 }}>
      {eyebrow && <div className="eyebrow" style={{ marginBottom: 14 }}>{eyebrow}</div>}
      <h2 className="h-section">{title}</h2>
      {sub && (
        <p style={{
          marginTop: 18,
          fontSize: 17,
          lineHeight: 1.55,
          color: "var(--muted)",
          maxWidth: 620,
          textWrap: "pretty",
        }}>{sub}</p>
      )}
    </div>
  );
}

/* ---------- Stat ---------- */
function Stat({ value, label, suffix }) {
  return (
    <div>
      <div style={{
        fontFamily: "var(--serif)",
        fontSize: 44,
        lineHeight: 1,
        letterSpacing: "-0.02em",
        fontWeight: 500,
        color: "var(--ink)",
        display: "flex",
        alignItems: "baseline",
        gap: 2,
      }}>
        {value}
        {suffix && <span style={{ fontSize: 22, color: "var(--accent)" }}>{suffix}</span>}
      </div>
      <div className="eyebrow" style={{ marginTop: 8 }}>{label}</div>
    </div>
  );
}

/* ---------- Tiny inline icon set ---------- */
const Icon = {
  arrow: (p) => (
    <svg viewBox="0 0 16 16" width={p.size || 14} height={p.size || 14} fill="none" {...p}>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  check: (p) => (
    <svg viewBox="0 0 16 16" width={p.size || 14} height={p.size || 14} fill="none" {...p}>
      <path d="M3 8.5 L7 12 L13 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  phone: (p) => (
    <svg viewBox="0 0 16 16" width={p.size || 14} height={p.size || 14} fill="none" {...p}>
      <path d="M3 4c0-.6.4-1 1-1h2l1 3-1.5 1c.8 1.7 2.1 3 3.8 3.8L10.5 9l3 1v2c0 .6-.4 1-1 1C6.7 13 3 9.3 3 4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    </svg>
  ),
  mail: (p) => (
    <svg viewBox="0 0 16 16" width={p.size || 14} height={p.size || 14} fill="none" {...p}>
      <rect x="2" y="3.5" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
      <path d="m2.5 4.5 5.5 4 5.5-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  star: (p) => (
    <svg viewBox="0 0 16 16" width={p.size || 14} height={p.size || 14}>
      <path d="m8 1.6 1.9 4 4.3.6-3.1 3 .8 4.3L8 11.5l-3.9 2 .8-4.3-3.1-3 4.3-.6Z" fill="currentColor"/>
    </svg>
  ),
  house: (p) => (
    <svg viewBox="0 0 24 24" width={p.size || 22} height={p.size || 22} fill="none" {...p}>
      <path d="M3 11 L12 4 L21 11 V20 H14 V14 H10 V20 H3 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    </svg>
  ),
  refi: (p) => (
    <svg viewBox="0 0 24 24" width={p.size || 22} height={p.size || 22} fill="none" {...p}>
      <path d="M4 11a8 8 0 0 1 13.7-5.6L20 8M20 4v4h-4M20 13a8 8 0 0 1-13.7 5.6L4 16M4 20v-4h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  shield: (p) => (
    <svg viewBox="0 0 24 24" width={p.size || 22} height={p.size || 22} fill="none" {...p}>
      <path d="M12 3 L20 6 V12 C20 16.5 16.5 20 12 21 C7.5 20 4 16.5 4 12 V6 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M8.5 12 L11 14.5 L15.5 9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  flag: (p) => (
    <svg viewBox="0 0 24 24" width={p.size || 22} height={p.size || 22} fill="none" {...p}>
      <path d="M5 21V4M5 4h12l-2 3 2 3H5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  key: (p) => (
    <svg viewBox="0 0 24 24" width={p.size || 22} height={p.size || 22} fill="none" {...p}>
      <circle cx="9" cy="13" r="4.5" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M13 13h8M19 13v3M16 13v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  growth: (p) => (
    <svg viewBox="0 0 24 24" width={p.size || 22} height={p.size || 22} fill="none" {...p}>
      <path d="M4 19h16M6 16l4-5 3 3 5-7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 7h-3M18 7v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  wallet: (p) => (
    <svg viewBox="0 0 24 24" width={p.size || 22} height={p.size || 22} fill="none" {...p}>
      <rect x="3" y="6" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M3 9h13a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="15.5" cy="12.5" r="1" fill="currentColor"/>
    </svg>
  ),
};

/* ---------- Avatar (placeholder portrait) ---------- */
function AvatarPlaceholder({ size = 64, name = "DR" }) {
  return (
    <div style={{
      width: size, height: size,
      borderRadius: "50%",
      background: "linear-gradient(140deg, color-mix(in oklab, var(--primary), white 30%), var(--primary))",
      color: "#fff",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      fontFamily: "var(--serif)", fontWeight: 500,
      fontSize: size * 0.4,
      letterSpacing: "0.02em",
      flex: "none",
    }}>{name}</div>
  );
}

/* ---------- Format helpers ---------- */
const fmt = {
  money: (n) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }),
  money2: (n) => n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 }),
  pct: (n) => `${n.toFixed(3).replace(/0$/, "")}%`,
};

Object.assign(window, {
  Logo, Wordmark, SectionHead, Stat, Icon, AvatarPlaceholder, fmt,
});

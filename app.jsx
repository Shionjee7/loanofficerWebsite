// Root app for the loan-officer site.

const palettes = {
  heritage: {
    name: "Heritage Navy",
    swatch: ["#0B2A4A", "#B6883E", "#F6F2EA", "#0B1726"],
    ink: "#0B1726",
    primary: "#0B2A4A",
    primary12: "#0B2A4A1f",
    accent: "#B6883E",
    canvas: "#F6F2EA",
    paper: "#FFFFFF",
    muted: "#5E6B7A",
    hairline: "#E5DDCB",
    field: "#EFEADF",
    good: "#1F6B47",
  },
  forest: {
    name: "Field Green",
    swatch: ["#1F4A38", "#B86A3A", "#F4F1E8", "#0F1F19"],
    ink: "#0F1F19",
    primary: "#1F4A38",
    primary12: "#1F4A381f",
    accent: "#B86A3A",
    canvas: "#F4F1E8",
    paper: "#FFFFFF",
    muted: "#5C6961",
    hairline: "#E0DACC",
    field: "#EBE6D8",
    good: "#1F6B47",
  },
  graphite: {
    name: "Graphite & Blue",
    swatch: ["#1B2230", "#2F6FE8", "#F4F4F2", "#0C0F14"],
    ink: "#0C0F14",
    primary: "#1B2230",
    primary12: "#1B22301f",
    accent: "#2F6FE8",
    canvas: "#F4F4F2",
    paper: "#FFFFFF",
    muted: "#5B6470",
    hairline: "#E1E2E0",
    field: "#ECEDEA",
    good: "#1F6B47",
  },
  oxblood: {
    name: "Oxblood",
    swatch: ["#5E1F22", "#C09357", "#F4EFE5", "#1A0F0F"],
    ink: "#1A0F0F",
    primary: "#5E1F22",
    primary12: "#5E1F221f",
    accent: "#C09357",
    canvas: "#F4EFE5",
    paper: "#FFFFFF",
    muted: "#6E5C5C",
    hairline: "#E5DBC9",
    field: "#EEE4D2",
    good: "#1F6B47",
  },
};

const PALETTE_KEYS = Object.keys(palettes);
const PALETTE_OPTIONS = PALETTE_KEYS.map((k) => palettes[k].swatch);

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "paletteSwatch": ["#0B2A4A", "#B6883E", "#F6F2EA", "#0B1726"]
}/*EDITMODE-END*/;

function applyPaletteByHero(heroHex) {
  const entry = Object.values(palettes).find(
    (p) => p.swatch[0].toLowerCase() === String(heroHex).toLowerCase()
  ) || palettes.heritage;
  const root = document.documentElement.style;
  root.setProperty("--ink", entry.ink);
  root.setProperty("--primary", entry.primary);
  root.setProperty("--primary-12", entry.primary12);
  root.setProperty("--accent", entry.accent);
  root.setProperty("--canvas", entry.canvas);
  root.setProperty("--paper", entry.paper);
  root.setProperty("--muted", entry.muted);
  root.setProperty("--hairline", entry.hairline);
  root.setProperty("--field", entry.field);
  root.setProperty("--good", entry.good);
}

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const heroHex = Array.isArray(tweaks.paletteSwatch) ? tweaks.paletteSwatch[0] : "#0B2A4A";

  React.useEffect(() => { applyPaletteByHero(heroHex); }, [heroHex]);

  return (
    <>
      <Nav />
      <Hero />
      <Products />
      <About />
      <Process />
      <Calculator />
      <Apply />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Palette" subtitle="Pick a mood. Same site, different lender personality.">
          <TweakColor
            label="Color palette"
            value={tweaks.paletteSwatch}
            options={PALETTE_OPTIONS}
            onChange={(v) => setTweak("paletteSwatch", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

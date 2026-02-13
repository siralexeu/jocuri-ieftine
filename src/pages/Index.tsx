import { ExternalLink } from "lucide-react";
import avatarImg from "@/assets/avatar.png";
import greenmangamingLogo from "@/assets/stores/greenmangaming.png";
import instantGamingLogo from "@/assets/stores/instant-gaming.png";
import humbleLogo from "@/assets/stores/humble.png";
import fanaticalLogo from "@/assets/stores/fanatical.png";
import isthereanydealLogo from "@/assets/stores/isthereanydeal.png";
import ggdealsLogo from "@/assets/stores/ggdeals.png";
import rgamedealsLogo from "@/assets/stores/rgamedeals.png";
import loadedLogo from "@/assets/stores/loaded.png";
import enebaLogo from "@/assets/stores/eneba.png";
import g2aLogo from "@/assets/stores/g2a.png";
import gamivoLogo from "@/assets/stores/gamivo.png";
import yuplayLogo from "@/assets/stores/yuplay.png"
import k4gLogo from "@/assets/stores/k4g.png";
import difmarkLogo from "@/assets/stores/difmark.png";
import gamesealLogo from "@/assets/stores/gameseal.png";
import hrkgameLogo from "@/assets/stores/hrkgame.png";
import cjscdkeysLogo from "@/assets/stores/cjs-cdkeys.png";
import wyrelLogo from "@/assets/stores/wyrel.png";

interface StoreLink {
  name: string;
  url: string;
  description: string;
  color: string;
  borderColor: string;
  logo: string;
}

const stores: StoreLink[] = [
  {
    name: "Green Man Gaming",
    url: "https://www.greenmangaming.com/",
    description: "Official game keys & great deals",
    color: "from-emerald-500 to-emerald-600",
    borderColor: "border-green-500/40", 
    logo: greenmangamingLogo,
  },
  {
    name: "Instant Gaming",
    url: "https://www.instant-gaming.com/",
    description: "Official game keys & great deals",
    color: "from-emerald-500 to-emerald-600",
    borderColor: "border-green-500/40", 
    logo: instantGamingLogo,
  },
  {
    name: "Humble Bundle",
    url: "https://www.humblebundle.com/",
    description: "Official Games, bundles & charity",
    color: "from-green-500 to-green-600",
    logo: humbleLogo,
  },
  {
    name: "Fanatical",
    url: "https://www.fanatical.com/",
    description: "Official game keys & bundles",
    color: "from-green-500 to-green-600",
    logo: fanaticalLogo,
  },
  {
    name: "IsThereAnyDeal",
    url: "https://isthereanydeal.com/",
    description: "Price comparison official stores",
    color: "from-blue-500 to-blue-700",
    logo: isthereanydealLogo,
  },
  {
    name: "GG.deals",
    url: "https://gg.deals/",
    description: "Price comparison",
    color: "from-cyan-500 to-cyan-700",
    logo: ggdealsLogo,
  },
  {
    name: "Loaded",
    url: "https://www.loaded.com/",
    description: "Fostul CDKeys.com",
    color: "from-emerald-500 to-emerald-600",
    logo: loadedLogo,
  },
  {
    name: "G2A",
    url: "https://www.g2a.com",
    description: "Global digital marketplace",
    color: "from-green-500 to-green-6000",
    logo: g2aLogo,
  },
  {
    name: "Eneba",
    url: "https://www.eneba.com/",
    description: "Taxe 1 euro la depunere",
    color: "from-green-500 to-green-600",
    logo: enebaLogo,
  },
  {
    name: "Gamivo",
    url: "https://www.gamivo.com/",
    description: "code:DEAL4U, nu aveau F1 2020",
    color: "from-amber-500 to-amber-600",
    logo: gamivoLogo,
  },
  {
    name: "YUPLAY",
    url: "https://www.yuplay.com/",
    description: "Legit",
    color: "from-emerald-500 to-emerald-600",
    logo: yuplayLogo,
  },
  {
    name: "K4G",
    url: "https://k4g.com/",
    description: "Game keys at great prices",
    color: "from-indigo-500 to-indigo-700",
    logo: k4gLogo,
  },
  {
    name: "Difmark",
    url: "https://difmark.com/",
    description: "Digital game key marketplace",
    color: "from-sky-500 to-sky-700",
    logo: difmarkLogo,
  },
  {
    name: "GameSeal",
    url: "https://gameseal.com/",
    description: "Sealed deals on game keys",
    color: "from-amber-500 to-amber-700",
    logo: gamesealLogo,
  },
  {
    name: "HRK Game",
    url: "https://www.hrkgame.com/",
    description: "Game keys & rewards",
    color: "from-rose-500 to-rose-700",
    logo: hrkgameLogo,
  },
  {
    name: "CJS CD Keys",
    url: "https://www.cjs-cdkeys.com/",
    description: "UK",
    color: "from-lime-500 to-lime-700",
    logo: cjscdkeysLogo,
  },
  {
    name: "Wyrel",
    url: "https://wyrel.com/",
    description: "Game keys marketplace",
    color: "from-fuchsia-500 to-fuchsia-700",
    logo: wyrelLogo,
  },
  {
    name: "r/GameDeals",
    url: "https://rgamedeals.net/",
    description: "Community-driven game deals",
    color: "from-orange-500 to-orange-700",
    logo: rgamedealsLogo,
  },
];

const LinkButton = ({ store }: { store: StoreLink }) => (
  <a
    href={store.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative block w-full"
  >
    <div
      className={`absolute -inset-0.5 rounded-xl bg-gradient-to-r ${store.color} opacity-0 blur transition-all duration-300 group-hover:opacity-60`}
    />
    <div className={`relative flex items-center justify-between rounded-xl border border-border bg-secondary px-6 py-4 transition-all duration-300 group-hover:${store.borderColor} group-hover:shadow-[var(--glow-primary)]`}>
      <div className="flex items-center gap-4">
        <img src={store.logo} alt={store.name} className="h-8 w-8 object-contain" />
        <div>
          <h3 className="font-display text-sm font-bold tracking-wide text-foreground">
            {store.name}
          </h3>
          <p className="text-xs text-muted-foreground">{store.description}</p>
        </div>
      </div>
      <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
    </div>
  </a>
);

const LinksPage = () => {
  return (
    <div className="relative flex min-h-screen items-start justify-center overflow-hidden px-4 py-16">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Avatar + Title */}
        <div className="mb-10 flex flex-col items-center text-center">
          <div className="mb-4 h-24 w-24 overflow-hidden rounded-full border-2 border-primary/30 shadow-[var(--glow-primary)]">
            <img src={avatarImg} alt="Key Games" className="h-full w-full object-cover" />
          </div>
          <h1 className="font-display text-2xl font-black tracking-wider text-foreground">
            Jocuri ieftine
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Find the best deals on game keys 🎮
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3">
          {stores.map((store) => (
            <LinkButton key={store.name} store={store} />
          ))}
        </div>

        {/* Footer */}
        <p className="mt-10 text-center text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} Key Games
        </p>
      </div>
    </div>
  );
};

export default LinksPage;

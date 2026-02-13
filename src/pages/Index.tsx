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
import g2gLogo from "@/assets/stores/g2g.png";
import etailmarketLogo from "@/assets/stores/etailmarket.png";
import ggselLogo from "@/assets/stores/ggsel.png";
import denuvogamesLogo from "@/assets/stores/denuvogames.png";

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
    borderColor: "border-emerald-500/40", 
    logo: greenmangamingLogo,
  },
  {
    name: "Instant Gaming",
    url: "https://www.instant-gaming.com/",
    description: "Official game keys & great deals",
    color: "from-emerald-500 to-emerald-600",
    borderColor: "border-emerald-500/40", 
    logo: instantGamingLogo,
  },
  {
    name: "Humble Bundle",
    url: "https://www.humblebundle.com/",
    description: "Official Games, bundles & charity",
    color: "from-green-500 to-green-600",
    borderColor: "border-green-500/40",
    logo: humbleLogo,
  },
  {
    name: "Fanatical",
    url: "https://www.fanatical.com/",
    description: "Official game keys & bundles",
    color: "from-green-500 to-green-600",
    borderColor: "border-green-500/40",
    logo: fanaticalLogo,
  },
  {
    name: "IsThereAnyDeal",
    url: "https://isthereanydeal.com/",
    description: "Price comparison official stores",
    color: "from-blue-500 to-blue-700",
    borderColor: "border-blue-500/40",
    logo: isthereanydealLogo,
  },
  {
    name: "GG.deals",
    url: "https://gg.deals/",
    description: "Price comparison",
    color: "from-cyan-500 to-cyan-700",
    borderColor: "border-cyan-500/40",
    logo: ggdealsLogo,
  },
  {
    name: "Loaded",
    url: "https://www.loaded.com/",
    description: "Fostul CDKeys.com",
    color: "from-emerald-500 to-emerald-600",
    borderColor: "border-emerald-500/40",
    logo: loadedLogo,
  },
  {
    name: "G2A",
    url: "https://www.g2a.com",
    description: "Global digital marketplace",
    color: "from-green-500 to-green-600",
    borderColor: "border-green-500/40",
    logo: g2aLogo,
  },
  {
    name: "Eneba",
    url: "https://www.eneba.com/",
    description: "Taxe 1 euro la depunere",
    color: "from-green-500 to-green-600",
    borderColor: "border-green-500/40",
    logo: enebaLogo,
  },
  {
    name: "Gamivo",
    url: "https://www.gamivo.com/",
    description: "code:DEAL4U, nu aveau F1 2020",
    color: "from-amber-500 to-amber-600",
    borderColor: "border-amber-500/40",
    logo: gamivoLogo,
  },
  {
    name: "YUPLAY",
    url: "https://www.yuplay.com/",
    description: "Legit",
    color: "from-emerald-500 to-emerald-600",
    borderColor: "border-emerald-500/40",
    logo: yuplayLogo,
  },
  {
    name: "G2G",
    url: "https://www.g2g.com/",
    description: "cu risk",
    color: "from-rose-500 to-rose-600",
    borderColor: "border-rose-500/40",
    logo: g2gLogo,
  },
  {
    name: "K4G",
    url: "https://k4g.com/",
    description: "As cumpara",
    color: "from-blue-500 to-blue-600",
    borderColor: "border-blue-500/40",
    logo: k4gLogo,
  },
  {
    name: "Difmark",
    url: "https://difmark.com/",
    description: "Preturi mari",
    color: "from-blue-500 to-blue-600",
    borderColor: "border-blue-500/40",
    logo: difmarkLogo,
  },
  {
    name: "GameSeal",
    url: "https://gameseal.com/",
    description: "Sealed deals on game keys",
    color: "from-blue-500 to-blue-600",
    borderColor: "border-blue-500/40",
    logo: gamesealLogo,
  },
  {
    name: "HRK Game",
    url: "https://www.hrkgame.com/",
    description: "Game keys & rewards",
    color: "from-blue-500 to-blue-600",
    borderColor: "border-blue-500/40",
    logo: hrkgameLogo,
  },
  {
    name: "CJS CD Keys",
    url: "https://www.cjs-cdkeys.com/",
    description: "UK",
    color: "from-blue-500 to-blue-600",
    borderColor: "border-blue-500/40",
    logo: cjscdkeysLogo,
  },
  {
    name: "Wyrel",
    url: "https://wyrel.com/",
    description: "Game keys marketplace",
    color: "from-blue-500 to-blue-600",
    borderColor: "border-blue-500/40",
    logo: wyrelLogo,
  },
  {
    name: "ggsel",
    url: "https://ggsel.net/",
    description: "Marketplace of digital goods: games, keys, gifts, software ...",
    color: "from-rose-500 to-rose-600",
    borderColor: "border-rose-500/40",
    logo: ggselLogo,
  },
  {
    name: "Etail.Market",
    url: "https://etail.market/",
    description: "cu risk",
    color: "from-rose-500 to-rose-600",
    borderColor: "border-rose-500/40",
    logo: etailmarketLogo,
  },
  {
    name: "DenuvoGames.Store",
    url: "https://denuvogames.store/",
    description: "Russia",
    color: "from-red-500 to-red-600",
    borderColor: "border-red-500/40",
    logo: denuvogamesLogo,
  },

  {
    name: "r/GameDeals",
    url: "https://rgamedeals.net/",
    description: "Reddit community-driven game deals",
    color: "from-fuchsia-500 to-fuchsia-600",
    borderColor: "border-fuchsia-500/40",
    logo: rgamedealsLogo,
  },
];

const LinkButton = ({ store }: { store: StoreLink }) => {
  // Map borderColor to actual Tailwind classes (safelist approach)
  const getBorderClass = (borderColor: string) => {
    const classMap: Record<string, string> = {
      'border-emerald-500/40': 'group-hover:border-emerald-500/40',
      'border-green-500/40': 'group-hover:border-green-500/40',
      'border-blue-500/40': 'group-hover:border-blue-500/40',
      'border-cyan-500/40': 'group-hover:border-cyan-500/40',
      'border-amber-500/40': 'group-hover:border-amber-500/40',
      'border-rose-500/40': 'group-hover:border-rose-500/40',
      'border-red-500/40': 'group-hover:border-red-500/40',
      'border-fuchsia-500/40': 'group-hover:border-fuchsia-500/40',
    };
    return classMap[borderColor] || 'group-hover:border-primary/40';
  };

  const getIconClass = (borderColor: string) => {
    const iconMap: Record<string, string> = {
      'border-emerald-500/40': 'group-hover:text-emerald-500',
      'border-green-500/40': 'group-hover:text-green-500',
      'border-blue-500/40': 'group-hover:text-blue-500',
      'border-cyan-500/40': 'group-hover:text-cyan-500',
      'border-amber-500/40': 'group-hover:text-amber-500',
      'border-rose-500/40': 'group-hover:text-rose-500',
      'border-red-500/40': 'group-hover:text-red-500',
      'border-fuchsia-500/40': 'group-hover:text-fuchsia-500',
    };
    return iconMap[borderColor] || 'group-hover:text-primary';
  };
  
  return (
    <a
      href={store.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full"
    >
      <div
        className={`absolute -inset-0.5 rounded-xl bg-gradient-to-r ${store.color} opacity-0 blur transition-all duration-300 group-hover:opacity-60`}
      />
      <div className={`relative flex items-center justify-between rounded-xl border border-border bg-secondary px-6 py-4 transition-all duration-300 ${getBorderClass(store.borderColor)} group-hover:shadow-[var(--glow-primary)]`}>
        <div className="flex items-center gap-4">
          <img src={store.logo} alt={store.name} className="h-8 w-8 object-contain" />
          <div>
            <h3 className="font-display text-sm font-bold tracking-wide text-foreground">
              {store.name}
            </h3>
            <p className="text-xs text-muted-foreground">{store.description}</p>
          </div>
        </div>
        <ExternalLink className={`h-4 w-4 text-muted-foreground transition-colors ${getIconClass(store.borderColor)}`} />
      </div>
    </a>
  );
};

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
import { ExternalLink } from "lucide-react";
import avatarImg from "@/assets/avatar.png";

interface StoreLink {
  name: string;
  url: string;
  description: string;
  color: string;
}

const stores: StoreLink[] = [
  {
    name: "G2A",
    url: "https://www.g2a.com",
    description: "Global digital marketplace",
    color: "from-orange-500 to-orange-700",
  },
  {
    name: "Eneba",
    url: "https://www.eneba.com",
    description: "Digital entertainment marketplace",
    color: "from-violet-500 to-violet-700",
  },
  {
    name: "CDKeys",
    url: "https://www.cdkeys.com",
    description: "Cheap game keys & codes",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Kinguin",
    url: "https://www.kinguin.net",
    description: "Game keys at low prices",
    color: "from-red-500 to-red-700",
  },
  {
    name: "Instant Gaming",
    url: "https://www.instant-gaming.com",
    description: "Up to 70% off on PC games",
    color: "from-emerald-500 to-emerald-700",
  },
  {
    name: "Humble Bundle",
    url: "https://www.humblebundle.com",
    description: "Games, bundles & charity",
    color: "from-pink-500 to-pink-700",
  },
];

const LinkButton = ({ store }: { store: StoreLink }) => (
  <a
    href={store.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative block w-full"
  >
    <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r opacity-0 blur transition-all duration-300 group-hover:opacity-60"
      style={{
        backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
      }}
    />
    <div className="relative flex items-center justify-between rounded-xl border border-border bg-secondary px-6 py-4 transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[var(--glow-primary)]">
      <div className="flex items-center gap-4">
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${store.color}`}>
           <span className="text-sm font-bold text-white">{store.name.charAt(0)}</span>
         </div>
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
            KEY GAMES
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

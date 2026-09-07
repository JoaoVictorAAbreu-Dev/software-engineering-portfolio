import { useEffect, type ReactNode } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function MainLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.documentElement.lang = "pt-BR";
    document.documentElement.style.colorScheme = "dark";
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-base)]">
      <a
        href="#conteudo-principal"
        className="absolute left-4 top-4 z-[70] -translate-y-20 rounded-full border border-[var(--border-strong)] bg-[var(--surface-card)] px-4 py-2 text-sm font-medium text-[var(--text-strong)] transition focus:translate-y-0"
      >
        Pular para o conteúdo
      </a>

      <div className="relative">
        <Header />
        <main id="conteudo-principal" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}

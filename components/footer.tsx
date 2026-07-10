import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind.
        </p>
        <p className="font-mono text-xs">Designed for Data Science & ML roles.</p>
      </div>
    </footer>
  );
}

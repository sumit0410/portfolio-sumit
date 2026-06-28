import SocialLinks from "../socialLinks/SocialLinks";

export default function Footer() {
  return (
    <footer className="py-12 bg-transparent  px-6 sm:px-12 md:px-24 border-t border-zinc-900/60 text-xs sm:text-sm font-mono text-zinc-500">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <span>© {new Date().getFullYear()} Sumit. All rights reserved.</span>
        </div>

        <SocialLinks variant="row" />
      </div>
    </footer>
  );
}

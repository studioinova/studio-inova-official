import { useEffect, useState } from "react";

export default function NoaWidget() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed bottom-6 right-6 z-50 flex items-end gap-3 transition-all duration-500 ease-out ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <div className="hidden sm:block max-w-[260px] rounded-2xl rounded-br-sm bg-white border border-[#0A2540]/10 px-4 py-3 text-sm text-[#0A2540] leading-relaxed shadow-[0_10px_30px_-12px_rgba(10,37,64,0.25)]">
        Hey! I'm <span className="font-semibold">Noa</span>. Welcome to Studio Inova—where we create simple solutions and AI-assisted tools for a better tomorrow. ✨
      </div>
      <img
        src="/noa_with_bg-removebg-preview.png"
        alt="Noa, Studio Inova mascot"
        className="w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-[0_12px_20px_rgba(10,37,64,0.25)] select-none"
        draggable={false}
      />
    </div>
  );
}

'use client';

export default function TitherButton() {
  return (
    <div className="tither-widget-container py-16 flex justify-center bg-neutral-50 border-t border-border"> 
      {/* 
        This bypasses script timing errors and renders an identical purple 
        button that safely opens your exact donation portal route.
      */}
      <a
        href="https://tither.us"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white rounded-full bg-[#7c3aed] hover:bg-[#6d28d9] transition-all duration-200 hover:scale-[1.02] shadow-sm"
      >
        Give Now
      </a>
    </div>
  );
}

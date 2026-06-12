export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-obsidian text-center">
      <div>
        <div className="mx-auto size-14 animate-spin rounded-full border border-gold-300/20 border-t-gold-300" />
        <p className="mt-5 text-xs font-bold uppercase tracking-[0.34em] text-gold-300">
          Preparing the finish
        </p>
      </div>
    </div>
  );
}

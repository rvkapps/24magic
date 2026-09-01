export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff8f8] text-[#1f1a1b]">
      <div className="text-center">
        <div className="inline-flex rounded-full bg-[#830036] px-8 py-4 items-center justify-center">
          <span className="h-8 w-8 rounded-full border-4 border-white/30 border-t-white animate-spin" />
        </div>
      </div>
    </div>
  );
}

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050508]">
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-pink-500/10 blur-[120px]" />
      <div className="absolute top-[-10%] right-[20%] w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[100px]" />
      <div className="absolute inset-0 grid-pattern" />
    </div>
  );
}
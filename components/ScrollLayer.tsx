export default function ScrollLayer({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10 bg-white">{children}</div>
  );
}
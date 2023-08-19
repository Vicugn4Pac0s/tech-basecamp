export default function Inner({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-[1000px] w-[90%]">{children}</div>;
}

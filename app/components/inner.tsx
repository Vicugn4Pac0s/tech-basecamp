type props = {
  children: React.ReactNode,
  className?: string
}

export default function Inner({ children, className }: props) {
  return <div className={`mx-auto max-w-[1000px] w-[90%] ${className}`}>{children}</div>;
}

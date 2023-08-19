type props = {
  children: React.ReactNode,
  className?: string
}

export default function ContentsWrap({ children, className }: props) {
  return <div className={`my-10 ${className}`}>{children}</div>;
}

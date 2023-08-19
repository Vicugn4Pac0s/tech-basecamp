type props = {
  children: React.ReactNode
}

export default function HeadingA({children}: props) {
  return (
    <h1 className="text-4xl text-center mb-8">{children}</h1>
  );
}

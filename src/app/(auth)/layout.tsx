const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="h-full">
      <div className="flex">{children}</div>
    </section>
  );
};

export default AuthLayout;

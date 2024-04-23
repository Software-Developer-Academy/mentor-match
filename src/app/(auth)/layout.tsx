const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center gap-24 min-h-screen xl:overflow-hidden xl:h-screen xl:min-h-min">
      {children}
    </div>
  );
};

export default AuthLayout;

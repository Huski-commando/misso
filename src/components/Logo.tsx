import { memo } from "react";

const Logo = () => {
  return (
    <div className="cursor-pointer font-semibold text-4xl text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 from-10% via-sky-500 via-50% to-emerald-500 to-80% italic">
      <h1>Misso</h1>
    </div>
  );
};

export default memo(Logo);

function Progress({ total, size = `sm` }) {
  const height = {
    sm: `0.375rem`,
    md: `0.5rem`,
    lg: `0.7rem`,
    xl: `1rem`,
  }[size];

  const padding = {
    sm: `0.375rem`,
    md: `0.5rem`,
    lg: `0.7rem`,
    xl: `1rem`,
  }[size];

  return (
    <div
      className="bg-[#EEEEEE] | w-full |  px-2 | rounded-sm"
      style={{
        paddingTop: padding,
        paddingBottom: padding,
      }}
    >
      <div
        className="total | bg-[#05F300] | rounded-sm h-1.5"
        style={{ width: `${total}%`, height: height }}
      ></div>
    </div>
  );
}

export default Progress;

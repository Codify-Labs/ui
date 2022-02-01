function Progress({ total }) {
  return (
    <div className="bg-[#EEEEEE] | w-full | py-1.5 px-2 | rounded-sm">
      <div
        className="total | bg-gray-primary h-1.5 | rounded-sm"
        style={{ width: `${total}%` }}
      ></div>
    </div>
  );
}

export default Progress;

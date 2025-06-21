type ToastProps = {type: string; message: string};

export const Toast = ({type, message}: ToastProps) => {
  const bg =
    type === "success"
      ? "bg-green-100"
      : type === "error"
      ? "bg-red-100"
      : "bg-blue-100";
  const border =
    type === "success"
      ? "border-green-400"
      : type === "error"
      ? "border-red-400"
      : "border-blue-400";
  return (
    <div
      className={`flex items-center border ${border} ${bg} rounded p-3 mb-2 shadow`}
    >
      <div className="flex-1 text-sm">{message}</div>
    </div>
  );
};

import { useAMethodQuery } from "./hooks";

export const A = () => {
  const { data } = useAMethodQuery({});
  return (
    <div className="block">
      <div className="card">
        <div className="card-content">{data?.msg ?? "loading..."}</div>
      </div>
    </div>
  );
};

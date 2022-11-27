import { useBMethodQuery } from "./hooks";

export const B = () => {
  const { data } = useBMethodQuery({});
  return (
    <div className="block">
      <div className="card">
        <div className="card-content">{data?.msg ?? "loading..."}</div>
      </div>
    </div>
  );
};

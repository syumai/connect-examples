import { useAMethodQuery } from "./hooks";

export const A = () => {
  const { data } = useAMethodQuery({});
  return <div>{data?.msg ?? "loading..."}</div>;
};

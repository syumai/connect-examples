import { useBMethodQuery } from "./hooks";

export const B = () => {
  const { data } = useBMethodQuery({});
  return <div>{data?.msg ?? "loading..."}</div>;
};

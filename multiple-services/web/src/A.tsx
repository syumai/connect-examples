import { Card } from "./Card";
import { useAMethodQuery } from "./hooks";

export const A = () => {
  const { data } = useAMethodQuery({});
  return (
    <Card message={data?.msg} />
  );
};

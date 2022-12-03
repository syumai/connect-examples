import { Card } from "./Card";
import { useBMethodQuery } from "./hooks";

export const B = () => {
  const { data } = useBMethodQuery({});
  return (
    <Card message={data?.msg} />
  );
};

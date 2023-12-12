import { useQuery } from "@tanstack/react-query";
import { exampleService } from ".";

export const useExampleTodos = () => {
  const query = useQuery({
    queryKey: ["todos"],
    queryFn: () => exampleService.getExampleData(),
  });

  return query;
};

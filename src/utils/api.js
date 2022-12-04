import { useMutation, useQuery, useQueryClient } from "react-query";
import { httpClient } from "./httpClient";

export const usePersonasQuery = () =>
  useQuery(["persona"], async () => httpClient.get("persona"));

export const useCreatePersonaMutation = () => {
  const qc = useQueryClient();
  return useMutation((data) => httpClient.post("persona", data), {
    onSuccess: () => qc.invalidateQueries(["persona"]),
  });
};

export const useDeletePersonaMutation = () => {
  const qc = useQueryClient();
  return useMutation((documento) => httpClient.delete("persona/" + documento), {
    onSuccess: () => qc.invalidateQueries(["persona"]),
  });
};

export const useEditPersonaMutation = () => {
  const qc = useQueryClient();
  return useMutation(
    (data) => httpClient.put("persona/" + data.documento, data),
    {
      onSuccess: () => qc.invalidateQueries(["persona"]),
    }
  );
};

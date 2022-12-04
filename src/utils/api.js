import { useMutation, useQuery, useQueryClient } from "react-query";
import { httpClient } from "./httpClient";

export const usePersonasQuery = () =>
  useQuery(["persona"], () => httpClient.get("persona"));

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

export const useEdificiosQuery = () =>
  useQuery(["edificio"], async () => httpClient.get("edificio"));

export const useCreateEdificioMutation = () => {
  const qc = useQueryClient();
  return useMutation((data) => httpClient.post("edificio", data), {
    onSuccess: () => qc.invalidateQueries(["edificio"]),
  });
};

export const useDeleteEdificioMutation = () => {
  const qc = useQueryClient();
  return useMutation((codigo) => httpClient.delete("edificio/" + codigo), {
    onSuccess: () => qc.invalidateQueries(["edificio"]),
  });
};

export const useEditEdificioMutation = () => {
  const qc = useQueryClient();
  return useMutation(
    (data) => httpClient.put("edificio/" + data.codigo, data),
    {
      onSuccess: () => qc.invalidateQueries(["edificio"]),
    }
  );
};

export const useDepartamentosQuery = (edificioId) =>
  useQuery(["unidad", { edificioId }], async () =>
    httpClient.get("unidad/edificio?codigo=" + edificioId)
  );

export const useCreateDepartamentoMutation = () => {
  const qc = useQueryClient();
  return useMutation((data) => httpClient.post("unidad", data), {
    onSuccess: () => qc.invalidateQueries(["unidad"]),
  });
};

export const useDeleteDepartamentoMutation = () => {
  const qc = useQueryClient();
  return useMutation((codigo) => httpClient.delete("unidad/" + codigo), {
    onSuccess: () => qc.invalidateQueries(["unidad"]),
  });
};

export const useEditDepartamentoMutation = () => {
  const qc = useQueryClient();
  return useMutation((data) => httpClient.put(`unidad/` + data.codigo, data), {
    onSuccess: () => qc.invalidateQueries(["unidad"]),
  });
};

export const useInquilinosQuery = (idDepto) =>
  useQuery(["inquilinos", { idDepto }], () =>
    httpClient.get("unidad/inquilinos/" + idDepto)
  );

export const useDueniosQuery = (idDepto) =>
  useQuery(["duenios", { idDepto }], () =>
    httpClient.get("unidad/duenios/" + idDepto)
  );

export const useAgregarInquilinoMutation = () => {
  const qc = useQueryClient();
  return useMutation(
    (data) => httpClient.put("unidad/agregar-inquilino", data),
    {
      onSuccess: () => qc.invalidateQueries(["inquilinos"]),
    }
  );
};

export const useAgregarDuenioMutation = () => {
  const qc = useQueryClient();
  return useMutation((data) => httpClient.put("unidad/agregar-duenios", data), {
    onSuccess: () => qc.invalidateQueries(["duenios"]),
  });
};

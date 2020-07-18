import { fetchUtils } from "react-admin";
const apiUrl = "http://localhost:4000";
const httpClient = fetchUtils.fetchJson;
export default {
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    };
    const url = `${apiUrl}/${resource}`;
    console.log(httpClient(url));
    return httpClient(url).then(({ headers, json }) => ({
      data: json,
      total: 10,
    }));
  },
  getOne: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
      data: json,
    })),
};

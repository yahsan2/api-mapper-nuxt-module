import ApiMapper from "rest-api-remapper";

export default (ctx, inject) => {
  const api = new ApiMapper( <%= JSON.stringify(options) %>, )
  ctx.$api = api
  inject('api', api)
}

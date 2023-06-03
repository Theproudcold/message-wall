import axios from "./request";

export const getLists = (obj) => axios.post(`/insertwall`, obj); //获取列表数据
//获取详情数据
export const getDatail = (obj) => axios.get(`/api/detail`, { params: obj });

// conectando  a api a banco de dados json server

import axios from "axios"

export const api=axios.create({
  baseURL:"https://chocolate-ant-veil.cyclic.app"
  // baseURL:" http://localhost:8000"
 
})


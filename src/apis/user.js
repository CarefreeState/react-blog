
import { request } from "@/utils";


const login = (loginForm) => {
    return request({
      url: "/authorizations",
      method: "post",
      data: loginForm,
    })
}

const info = () => {
  return request({
    url: "/user/profile",
    method: "get",
  })
}

export { login, info };


import { fetch } from "@/core/fetch";
import app from "@/store/app";
import { UserInfo } from "@/common/vos";

export interface UserParam {
  userinfo?: UserInfo;
  roomId?: string;
  role?: string;
}

export const user = (param?: UserParam) =>
  fetch("scrum-user", param).then(user => {
    app.user = user;
    return user;
  });

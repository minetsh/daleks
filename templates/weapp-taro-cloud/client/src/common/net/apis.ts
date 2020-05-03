import { UserInfo, User } from "@/common/vos";
import { fetch } from "@/core/fetch";
import app from "@/store/app";

export const user = (userinfo?: UserInfo): Promise<User> =>
  fetch("auth-user", { userinfo }).then(user => {
    app.onAuthed(user);
    return user;
  });

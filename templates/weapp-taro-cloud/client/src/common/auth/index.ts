import app from "@/store/app";
import { user } from "@/common/net/apis";

enum AuthType {
  any = "any",
  auth = "auth"
}

export interface AuthRequest {
  to?: string;
  type: AuthType;
}

export const check = async (request?: AuthRequest) => {
  const req = request || { type: AuthType.any };
  if (app.isAuthed || req.type === AuthType.any) {
    return true;
  }
  try {
    await user();
    if (req.type === AuthType.auth) {
      return app.isAuthed;
    }
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export default AuthType;

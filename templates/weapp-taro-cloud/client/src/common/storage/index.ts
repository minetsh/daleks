import Storage from "@/core/storage";
import { User } from "@/common/vos";

const Storages = {
  user: Storage.of<User>("user")
};

export default Storages;

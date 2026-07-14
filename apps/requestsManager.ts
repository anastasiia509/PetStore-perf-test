import { PetService } from "../apps/services/pet.ts";
import {StoreService} from "../apps/services/store.ts";
import { CreateUser } from "../apps/services/user/createUser.ts";
import {GetUser} from "../apps/services/user/getUser.ts";
import { DeleteUser } from "./services/user/deleteUser.ts";
import { UpdateUser } from "./services/user/UpdateUser.ts";
import { UserLogin } from "./services/user/userLogin.ts";

class RequestManager {

    petService: PetService = new PetService();
    storeService: StoreService = new StoreService();
    createUser: CreateUser = new CreateUser();
    getUser: GetUser = new GetUser();
    updateUser: UpdateUser = new UpdateUser();
    deleteUser: DeleteUser = new DeleteUser();
    userLogin: UserLogin = new UserLogin();

}

export const requestsManager = new RequestManager();


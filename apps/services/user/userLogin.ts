import { Params } from "k6/http";
import { BaseRequest } from "../baseRequest.ts"

export class UserLogin extends BaseRequest {

    execute(username: string, params?: Params){
        return this.GET(`/v2/user/login?username=${username}&password=12345`,
            params
        )

    }


}
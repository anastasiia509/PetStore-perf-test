import { Params, RequestBody } from "k6/http";
import { BaseRequest } from "../baseRequest.ts";

export class DeleteUser extends BaseRequest{

    execute(username: string, params?: Params){
        return this.DELETE(
            `/v2/user/${username}`,
            params
        );
    }

}
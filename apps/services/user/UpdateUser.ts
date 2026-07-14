import { Params } from "k6/http";
import { BaseRequest } from "../baseRequest.ts";

export class UpdateUser extends BaseRequest {

    execute(userName: string, body: object, params: Params){
        return this.PUT(`/v2/user/${userName}`, 
            JSON.stringify(body),
            params
        );
    }

}
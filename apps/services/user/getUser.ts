import { Params } from "k6/http";
import { BaseRequest } from "../baseRequest.ts";
 

export class GetUser extends BaseRequest {
    execute(userName: string, params?: Params){

        return this.GET(`/v2/user/${userName}`, params)
    }
}
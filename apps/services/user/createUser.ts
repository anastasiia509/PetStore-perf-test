import { Params, RequestBody } from "k6/http";
import { BaseRequest } from "../baseRequest.ts";

export class CreateUser extends BaseRequest {

    execute(body: object, params?: Params){
         return this.POST(
            `/v2/user`, 
            JSON.stringify(body),
            params
         );
    }
}   
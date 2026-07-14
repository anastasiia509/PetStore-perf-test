import { BaseRequest } from "./baseRequest.ts";
import  { Params} from 'k6/http';


export class StoreService extends BaseRequest {

placeOrder( body: object, params?: Params){
    return this.POST('/v2/store/order',
        JSON.stringify(body),
        params 
    );
}

getOrder(orderId: object, params?: Params){
    return this.GET(`/v2/store/order/${orderId}`, params );
}

deleteOrder(orderId: number, params?: Params){
    return this.DELETE(`/v2/store/order/${orderId}`, params);
}

}
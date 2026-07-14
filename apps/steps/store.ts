import { requestsManager } from "../requestsManager.ts";
import { group, check } from 'k6';
// @ts-ignore
import {randomIntBetween} from "../../framework/k6Libs/k6Utils.js";


export class StoreSteps {

placeOrder< T extends{orderId?: number} > (stepData: T = {} as T){
    const orderId = stepData.orderId ?? randomIntBetween(1, 100);
    const petId = randomIntBetween(1,10);
    const quantity = randomIntBetween(1,2);

    group("Place order", function(){

        const body = {
            "id": orderId,
            "petId": petId,
            "quantity": quantity,
            "shipDate": new Date().toISOString(),
            "status": "placed",
            "complete": true
        }
        const params = {
            headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
            },
        }
        const resp:any = requestsManager.storeService.placeOrder(body,params);
        check(resp, { 'Order placed': (r) => r.status === 200 });
        //console.log(`Order ${orderId} placed`);

    });
        return {...stepData, orderId};

}

getOrder< T extends {orderId: number} > (stepData: T = {} as T){

    const orderId = stepData;
    return group("Get order by Id", function(){

        const resp: any = requestsManager.storeService.getOrder(orderId);
        check(resp, { 'Order exists': (r) => r.status === 200 });
       // console.log(resp.body);

        return {...stepData,orderId};
    })

}

deleteOrder(orderId: number){
    return group("Delete order by Id", function(){

        const resp: any = requestsManager.storeService.deleteOrder(orderId);
        check(resp, { 'Order is deleted': (r) => r.status === 200 });
        //console.log(`Order ${orderId} deleted`)

    })
}
}



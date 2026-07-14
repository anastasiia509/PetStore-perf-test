import { BaseRequest } from "../services/baseRequest.ts";
import  { Params} from 'k6/http';


export class PetService extends BaseRequest {


    findPetByStatus(status: 'available' | 'pending' | 'sold', params?:Params) {

        return this.GET(`/v2/pet/findByStatus?status=${status}`, params);

    }

    findPetById(id: string, params?: Params){

        return this.GET(`/v2/pet/${id}`,params)
    }

}

//http.get('https://petstore.swagger.io/v2/pet/findByStatus?status=available');
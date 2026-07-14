import { check, group } from "k6";
import { requestsManager} from "../requestsManager.ts";
// @ts-ignore
import {randomIntBetween, randomString} from "../../framework/k6Libs/k6Utils.js";

export class UserSteps {

getUser< T extends{}> (userName: string, stepData: T = {} as T){

    return group("Get user by user name", function(){

        const resp: any = requestsManager.getUser.execute(userName);
        check(resp, {"UserName is found": (r) => r.status === 200});
       // console.log(`User info of ${userName} : ${resp.body}`);
        const userData = resp.body;
        return { ...stepData,userData };

    })
}

createUser< T extends {username?:string, email?: string} > ( stepData: T = {} as T){

    const username = stepData.username ?? randomString(5);
    const email = stepData.email ?? `${randomString(5)}@yopmail.com`;
    const userId = randomIntBetween(10, 99);
    
    return group ("Create user", function(){

    const body = {
        "id": userId,
        "username": username,
        "firstName": "PerfTest1",
        "lastName": "PerfTest1",
        "email": email,
        "password": "12345",
        "phone": "12345",
        "userStatus": 0
        }
    const params = {
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
            }
    }

    const createUserResp: any = requestsManager.createUser.execute(body, params);
    
    check(createUserResp, { 'User is created': (r) => r.status === 200 });
    const createUserBody = createUserResp.body
    //console.log(`User is created ${createUserResp.body}`);

    return { ...stepData, createUserBody,username, email, userId };

})
}

updateUser< T extends {username: string, userId: number, email: string} > ( stepData: T){

    const { userId, username, email } = stepData; //destructure


    return group("Update user", function(){

        const body = {
            "id": userId,
            "username": username,
            "firstName": "Updated First Name",
            "lastName": "Updated Last Name",
            "email": email,
            "password": "12345",
            "phone": "12345",
            "userStatus": 0
        }

        const params = {
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'  
            }
        }

        const updateUserResp: any = requestsManager.updateUser.execute(username, body, params);
        check(updateUserResp, {'User info is updated': (r) => r.status === 200});
       // console.log(`Updated user info: ${updateUserResp.body}`);


    })
}

deleteUser< T extends {username: string} > ( stepData: T){

    const { username} = stepData;

    const deleteUserResp: any = requestsManager.deleteUser.execute(username);
    check(deleteUserResp, {'User is deleted': (r) => r.status === 200});
    //console.log(`Deleted user is: ${deleteUserResp.body}`);
}

userLogin< T extends {username: string} > (stepData: T= {} as T){

    const {username} = stepData;

    const userLoginResp: any = requestsManager.userLogin.execute(username);
    check(userLoginResp, {
        'User is logged in': (r) => r.status === 200,
        'User session returned': (r) => r.body.includes('logged in user session')
    });

     return { ...stepData};

}


}

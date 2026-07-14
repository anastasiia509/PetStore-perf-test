import { sleep } from "k6";
import { stepManager } from "../apps/stepsManager.ts";


/*export const options = {
  cloud: {
    projectID: 8048953,
    name: "Petstore Load Test",
  },
  stages: [
    {duration: '30s', target: 10 },  // ramp-up
    {duration: '2m', target: 10},   //stable load
    {duration: '30s', target: 0 }  // ramp-down
  ],
  thresholds: {
    http_req_duration: ['p(95)<300'],
  }
};*/

export const options = {
    vus: 1,
    duration: '1s'
}

export default function() {

  
  //------------------------HOMEWORK----------------------------
  const orderId  = stepManager.storeSteps.placeOrder();
  sleep(1);
  //const orderId2  = stepManager.storeSteps.placeOrder({ orderId: 6 });
  const getOrderById = stepManager.storeSteps.getOrder(orderId.orderId);
  sleep(1);
  const deleteOrder = stepManager.storeSteps.deleteOrder(getOrderById.orderId);
  //sleep(1);

  // когда передаем параметры для createUser
  //const createUser2 = stepManager.userSteps.createUser({username: "Nastia3", email: "testperf@yopmail.com"});
  // не передаем параметры
 /* const createUser = stepManager.userSteps.createUser();
  sleep(1);
  const userLogin = stepManager.userSteps.userLogin(createUser.username);
  sleep(1);
  const getUserByUserName = stepManager.userSteps.getUser(createUser.username);
  sleep(1);
  const updateUser = stepManager.userSteps.updateUser(createUser);
  sleep(1);
  const deleteUser = stepManager.userSteps.deleteUser(createUser);
  sleep(1);*/

  //OR
  //const user = stepManager.userSteps.createUser();
  //stepManager.userSteps.userLogin(user);
  //stepManager.userSteps.updateUser(user);
  //stepManager.userSteps.deleteUser(user);

}
import { sleep } from "k6";
import { stepManager } from "../apps/stepsManager.ts";

export function userScenario (){

  // когда передаем параметры для createUser
  //const createUser2 = stepManager.userSteps.createUser({username: "Nastia3", email: "testperf@yopmail.com"});
  // не передаем параметры
  const createUser = stepManager.userSteps.createUser();
  sleep(1);
  const userLogin = stepManager.userSteps.userLogin(createUser.username);
  sleep(1);
  const getUserByUserName = stepManager.userSteps.getUser(createUser.username);
  sleep(1);
  const updateUser = stepManager.userSteps.updateUser(createUser);
  sleep(1);
  const deleteUser = stepManager.userSteps.deleteUser(createUser);
  sleep(1);

  //OR
  //const user = stepManager.userSteps.createUser();
  //stepManager.userSteps.userLogin(user);
  //stepManager.userSteps.updateUser(user);
  //stepManager.userSteps.deleteUser(user);

}
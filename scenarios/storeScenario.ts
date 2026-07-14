import { sleep } from "k6";
import { stepManager } from "../apps/stepsManager.ts";

export function storeScenario(){

const orderId  = stepManager.storeSteps.placeOrder();
  sleep(1);
  //const orderId2  = stepManager.storeSteps.placeOrder({ orderId: 6 });
  const getOrderById = stepManager.storeSteps.getOrder(orderId.orderId);
  sleep(1);
  const deleteOrder = stepManager.storeSteps.deleteOrder(getOrderById.orderId);
  sleep(1);

}
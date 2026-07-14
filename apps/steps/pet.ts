import { requestsManager } from "../requestsManager.ts";
import { group, check } from 'k6';
// @ts-ignore
import { randomItem } from "../../framework/k6Libs/k6Utils.js";


export class PetSteps {

//getAvailablePets() {

  //generic
  
  getAvailablePets<T extends object >(stepData: T = {} as T) {

  return group('Find available pets', function () {

  const resp: any = requestsManager.petService.findPetByStatus('available'); 

  check(resp, { 'status equals 200': (r) => r.status === 200 });
    
    const pets = JSON.parse(resp.body);
    const randomPet = randomItem(pets);

   // console.log(`Random Pet: ${JSON.stringify(randomPet)}`);
   // console.log(`Random Pet Name: ${randomPet.name}`);

    //const foundPet = pets.find( (pet: any) => pet.name === randomPet.name) ?? 'somePet_NOT_FOUND';
    const availablePetId: string = randomPet.id
    const availablePetName: string = randomPet.name;

    console.log(`Found Available Pet ID: ${availablePetId}`);
    console.log(`Found Available Pet name: ${availablePetName}`);

    return { ...stepData, availablePetId,availablePetName }
  });
}

getPendingPets<T extends object >(stepData: T = {} as T) {
return group('Find pending pets', function () {

  const resp: any = requestsManager.petService.findPetByStatus('pending'); 

  check(resp, { 'status equals 200': (r) => r.status === 200 });
    
    const pets = JSON.parse(resp.body);
    const randomPet = randomItem(pets);

    console.log(`Random Pending Pet: ${JSON.stringify(randomPet)}`);
    console.log(`Random Pending Pet Name: ${randomPet.name}`);

    const pendingPetId: string = randomPet.id
    const pendingPetName: string = randomPet.name;

    console.log(`Found Pending Pet ID: ${pendingPetId}`);
    console.log(`Found Pending Pet name: ${pendingPetName}`);

    return { ...stepData, pendingPetId,pendingPetName }

  });
}

getSoldPets<T extends object >(stepData: T = {} as T) {
  return group('Find sold pets', function () {

  const resp: any = requestsManager.petService.findPetByStatus('sold'); 

  check(resp, { 'status equals 200': (r) => r.status === 200 });
    
    const pets = JSON.parse(resp.body);
    const randomPet = randomItem(pets);

    const soldPetId: string = randomPet.id
    const soldPetName: string = randomPet.name;

    console.log(`Found Sold Pet ID: ${soldPetId}`);
    console.log(`Found Sold Pet name: ${soldPetName}`);

    return { ...stepData, soldPetId,soldPetName }

   
  });
}
//getPetByID<T extends object >(stepData: T, petId: string){

getPetByID<T extends {pendingPetId:string, soldPetName:string } >(stepData: T){
  const {pendingPetId,soldPetName } = stepData

  return group('Get pet by ID', function () {

  const getPetByIDResp: any = requestsManager.petService.findPetById(pendingPetId); 
  check(getPetByIDResp, { '2 status equals 200': (r) => r.status === 200 });

  console.log(`Pet is : ${getPetByIDResp.body}`);
  console.log(`Pet name is : ${soldPetName}`);


  return { ...stepData, getPetByIDResp };

  });
}

}
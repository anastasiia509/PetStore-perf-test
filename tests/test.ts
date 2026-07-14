import { stepManager } from "../apps/stepsManager.ts";


export const options = {
  vus: 1,
  iterations: 1,
};

export default function() {

   /* const availablePets = stepManager.petSteps.getAvailablePets();
    const getPetById = stepManager.petSteps.getPetByID(availablePets.availablePetId);

    const soldPets = stepManager.petSteps.getSoldPets();
    const soldPetsByid = stepManager.petSteps.getPetByID(soldPets.soldPetId);

    const pendingPets = stepManager.petSteps.getPendingPets();
    const pendingPetsById = stepManager.petSteps.getPetByID(pendingPets.pendingPetId);*/

    //------
    /*const availablePets = stepManager.petSteps.getAvailablePets();
    const getPetById = stepManager.petSteps.getPetByID(availablePets.availablePetId);
    const soldPets = stepManager.petSteps.getSoldPets(availablePets);
    const soldPetsById = stepManager.petSteps.getPetByID(soldPets.soldPetId);
    const pendingPets = stepManager.petSteps.getPendingPets(soldPets);
    const pendingPetsById = stepManager.petSteps.getPetByID(pendingPets.pendingPetId);*/


  /*const availablePets = stepManager.petSteps.getAvailablePets();
  const getPetById = stepManager.petSteps.getPetByID({petId: availablePets.availablePetId});
  const soldPets = stepManager.petSteps.getSoldPets(availablePets);
  const pendingPets = stepManager.petSteps.getPendingPets(soldPets);
  const getPetById2 = stepManager.petSteps.getPetByID({petId: pendingPets.pendingPetId});*/

  /*const pendingPets = stepManager.petSteps.getPendingPets();
  const soldPets = stepManager.petSteps.getSoldPets(pendingPets);
  const availablePets = stepManager.petSteps.getAvailablePets(soldPets);

  const pendingPetsById = stepManager.petSteps.getPetByID(availablePets);
  //can be manually changed,переназначили переменную  и перезаписивает pendingPetId
  const pendingPetsById1 = stepManager.petSteps.getPetByID({...availablePets, pendingPetId:availablePets.soldPetId});*/


}
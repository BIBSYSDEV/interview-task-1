import registrations from "../resources/registrations.json";
import { Registration, RegistrationResults } from "../types/registration.types";

export const getAllRegistrations = (): RegistrationResults => {
  return registrations;
};

export const getRegistration = (
  identifier: string
): Registration | undefined => {
  return registrations.hits.find(
    (registration) => registration.identifier === identifier
  );
};

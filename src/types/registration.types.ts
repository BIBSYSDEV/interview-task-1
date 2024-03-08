export interface RegistrationResults {
  hits: Registration[];
}

export interface Registration {
  id: string;
  identifier: string;
  createdDate: string;
  modifiedDate: string;
  publishedDate?: string;
  resourceOwner: ResourceOwner;
  status: string;
  doi?: string;
  publisher: RegistrationPublisher;
  handle?: string;
  additionalIdentifiers?: AdditionalIdentifier[];
  subjects: string[];
  entityDescription: EntityDescription;
}

interface ResourceOwner {
  owner: Identity;
  ownerAffiliation: string;
}

interface RegistrationPublisher {
  id: string;
  name: string;
}

interface AdditionalIdentifier {
  sourceName: "Cristin" | "Scopus";
  value: string;
}

interface EntityDescription {
  abstract: string;
  contributors: Contributor[];
  description: string;
  language: string;
  mainTitle: string;
  tags: string[];
}

interface Contributor {
  identity: Identity;
  affiliations: string[];
}

interface Identity {
  id: string;
  name: string;
}

export type AddressLocationType = {
  zipCode: string;
  state: string;
  city: string;
};

export type AddressStreetType = {
  streetName: string;
  streetNumber: string;
};
export type RoomType = {
  roomQuantity: number;
  roomSize: string;
};
export type StayType = {
  arrivalDate: string;
  departureDate: string;
};
export type ExtrasType = {
  label: string;
  value: string;
};
export type TagsType = {
  label: string;
  value: string;
};
export type ReservationType = {
  addressLocation: AddressLocationType;
  addressStreet: AddressStreetType;
  confirm: boolean;
  email: string;
  extras: string[];
  firstName: string;
  id?: number;
  lastName: string;
  newsletter: boolean;
  note: string;
  payment: string;
  phone: string;
  reminder?: boolean;
  room: RoomType;
  stay: StayType;
  tags: string[];
};

export type ReservationFormType = {
  zipCode: string;
  state: string;
  city: string;
  streetName: string;
  streetNumber: string;
  confirm: boolean;
  email: string;
  extras: ExtrasType[];
  firstName: string;
  id?: number;
  lastName: string;
  newsletter: boolean;
  note: string;
  payment: string;
  phone: string;
  reminder?: boolean;
  roomQuantity: number;
  roomSize: string;
  arrivalDate: string;
  departureDate: string;
  tags: TagsType[];
  addressLocation: AddressLocationType;
  addressStreet: AddressStreetType;
  room: RoomType;
  stay: StayType;
};

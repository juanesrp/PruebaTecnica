export interface Person {
  id: number;
  name: string;
  lastname: string;
  age: number;
  birthdate: string;
  dni: string;
  country: Country;
  state: State;
}

export interface Country {
  id: number;
  name: string;
}

export interface State {
  id: number;
  name: string;
  country: Country;
}

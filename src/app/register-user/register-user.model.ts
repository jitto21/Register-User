export interface RegisterUserModel {
  uid: number,
  fname: string,
  mname?: string,
  lname: string,
  address: string,
  pin: number,
  mobile: number,
  gender: string,
  age?: number
}

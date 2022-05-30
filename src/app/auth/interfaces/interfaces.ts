export interface AuthResponse {
  ok:string;
  uid?: string;
  name?:string;
  token?:string;
  email?:string;
  msg?:string;
}

export interface Usuario {
  uid: string;
  name: string;
  email:string;
}

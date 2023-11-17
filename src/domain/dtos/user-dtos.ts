export interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
  role: 'scholar' | 'coordinator';
  code: string;
}

export interface CreateUserResultDTO {
  id: string;
  name: string;
  email: string;
  role: 'scholar' | 'coordinator';
  code: string;
}

export interface UserDTO {
  name: string;
  email: string;
  role: 'scholar' | 'coordinator';
  code: string;
}

export interface AuthUserDTO {
  username: string;
  password: string;
}

export interface AuthUserResultDTO {
  isValid?: boolean;
  token: string;
}

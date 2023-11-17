interface UserProps {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'scholar' | 'coordinator';
  code: string;
}

interface UserPlainProps {
  id: string;
  name: string;
  email: string;
  role: 'scholar' | 'coordinator';
  code: string;
}

export class User {
  public readonly id: string;
  public name: string;
  public email: string;
  private readonly password: string;
  public role: 'scholar' | 'coordinator';
  public code: string;

  constructor(data: UserProps) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
    this.role = data.role;
    this.code = data.code;
  }

  public toJson(): UserPlainProps {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      role: this.role,
      code: this.code,
    };
  }
}

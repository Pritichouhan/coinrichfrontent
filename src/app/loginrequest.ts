export class LoginRequest {
    username!: string;
    password!: string;

    getUsername(): string {
        return this.username;
    }

    setUsername(username: string): void {
        this.username = username;
    }
}
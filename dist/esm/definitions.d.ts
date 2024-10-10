export interface appleLoginPlugin {
    appleLogin(): Promise<{
        email: string;
        name: string;
    }>;
}

import { WebPlugin } from '@capacitor/core';
import type { appleLoginPlugin } from './definitions';
export declare class appleLoginWeb extends WebPlugin implements appleLoginPlugin {
    appleLogin(): Promise<{
        email: string;
        name: string;
    }>;
}

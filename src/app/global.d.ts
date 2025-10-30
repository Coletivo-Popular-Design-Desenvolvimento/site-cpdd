import type { IStaticMethods } from "./interfaces";

declare global {
    interface Window {
        // Preline UI
        HSStaticMethods: IStaticMethods;
    }
}

export { };

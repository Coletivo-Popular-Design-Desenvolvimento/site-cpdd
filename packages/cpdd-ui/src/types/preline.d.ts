declare global {
  interface Window {
    HSStaticMethods: {
      autoInit: () => void;
    };
  }

  interface GlobalThis {
    HSStaticMethods?: {
      autoInit: () => void;
    };
  }
}

export {};

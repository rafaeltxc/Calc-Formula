export {};

declare global {
  interface Window {
    electronAPI: {
      openWhatsApp: (url: string) => void;
    };
  }
}

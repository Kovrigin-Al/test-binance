/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_WS_BASE_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

declare namespace NodeJS {
 interface ProcessEnv {
  NODE_ENV: 'development' | 'production';
  VITE_KEY_API: string;
 }
}
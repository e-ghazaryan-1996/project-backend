declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      PORT: string;
      HOST: string;
      DATABASE: string;
      DBUSERNAME: string;
      DBPASSWORD: string;
    }
  }
}

export {};

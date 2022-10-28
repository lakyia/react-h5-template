import { defineConfig } from "umi";

export default defineConfig({
  define: {
    baseApi: "https://api.somedomain.com",
    "process.env": {
      NODE_ENV: "uat",
      UMI_ENV: "uat",
    },
  },
});

import { defineConfig } from "umi";

export default defineConfig({
  define: {
    baseApi: "https://apitest.somedomain.com",
    "process.env": {
      NODE_ENV: "uat",
      UMI_ENV: "uat",
    },
  },
});

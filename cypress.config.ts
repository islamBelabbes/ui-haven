import { clearSeededElement, seedElement } from "./src/lib/seed";
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // on("task", {
      //   async "seed:elements"(options) {
      //     await seedElement(options);
      //     return null;
      //   },
      // });
      // on("task", {
      //   async "seed:clear"() {
      //     await clearSeededElement();
      //     return null;
      //   },
      // });
    },
  },
});

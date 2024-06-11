const { defineConfig } = require("cypress");

module.exports = defineConfig({

  watchForFileChanges:false,
  e2e: {
    setupNodeEvents(on, config) {
      screenshotOnRunFailure=true
      // implement node event listeners here
    },
  },
});

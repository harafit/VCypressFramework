const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');


module.exports = defineConfig({

  projectId: "bdbdxi",
  watchForFileChanges:false,
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {downloadFile})
      screenshotOnRunFailure:true
      // implement node event listeners here
    },
  },
});

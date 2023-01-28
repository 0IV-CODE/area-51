# STORE

**This directory is not required, you can delete it if you don't want to use it.**

This directory contains your Vuex Store files.
Vuex Store option is implemented in the Nuxt.js framework.

Creating a file in this directory automatically activates the option in the framework.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/vuex-store).

Notes Reagarding VueX Setup:

1. Folders "ProjectsAB, CD, EF, GH, IJ" are setup to each contain two projects only.
   This is to create seperation between data, so referencing code later isn't a problem.

2. Main is used as state management for the overall website & settings

3. Summary is used as the state management for project overviews that link to the project
   it's documenting. Each actual live project is linked from the summary data even though the project
   are internal & not external projects link wise.

## To run app use "npm run start"

## Description:
I have prepared small app that show current weather for few cities. When city is selected forecast data are fetched form backend and presented into a table form.
Stack:
    - NGRX as store lib.
    - SCSS as styles preprocessor
    - Angular materials

I didn't manage to prepare UT due to lack of time.

Here is list of things that could be improved.

    - clear definition of data model (remove all "any" in the project)
    - add UT
    - catch forecast data plus check if there is a need to refetch it.
    - better class names in css (to implement BEM methodology)
    - some data could be transformed on level of store (on reducer level)

NOTE: apiKey will be disabled in few days to make app working please add your own API key in weather-dashboard-http.service.ts

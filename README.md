## Commands

**Build**

`yarn run build:dev`  
`yarn run build:prod` 

**Test**

`yarn test`  
`yarn test -- --watch`

**Serve**

Dev server doesn't need prod files to be generated. Express server does.
 
`yarn run dev-server` 
`yarn start` 

**Run Playground File**

`yarn run src/playground/file.js`

**Go Live with Heroku**

Push master to Heroku and then open in-browser to veiw the full live app.

`git push heroku master`  
`heroku open` 
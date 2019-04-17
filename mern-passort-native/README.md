### Overview
This application will
- Sign up new user with encrypted password,
- Log in new user with session memory for auto log in.
- Validation Checks
  - Front end
    - "password" and "confirm" match
  - Back end
    - users duplicate
    - password duplicate
    - password exists
    - password greater than 6

### Setup Steps & Notes
- $`create-react-app MERN-passport-native`
- Reset README.md (removed default create-react-app directions... )
- Cleaned & Noted for `index.html`
- Added favicon folder. Files generated from link in Resources
- Gutted un-used `src` files (test included)
- created `styles` folder and replaced with simple bg #202020 for index.css
- `App.js` > gutted, basic holder code.

npm install...
- `npm install node-sass`
- `npm install axios`

Add Back End
- Create `client` & place everything in it.
  - except... .gitignore / .DS_Store
    att to .gitignore
    - `./node_modules`
    - `*node_modules`
  - make sure to toggle settings to view all files/folder
  - delete git folder
- `npm init`
  - `entry point: (index.js) ` > `server.js`

npm install...
- `npm install express`
- `npm install mongoose`
- `npm install if-env`
- `npm install passport`
- `npm install passport-local`
- `npm install bcryptjs`
- `npm install express-session`
- `npm install connect-mongo`
- `npm install mongoose-unique-validator`

Install Concurrently (DEV)
- `npm install concurrently --save-dev`
- `npm install nodemon --save-dev`

# Resources

Passport Packages
- http://www.passportjs.org/packages/
- http://www.passportjs.org/packages/passport-local/
  - developer's example: https://github.com/jaredhanson/passport-local

MERN Passport example
- https://medium.com/@brendt_bly/simple-mern-passport-app-tutorial-4aec2105e367

React Passport example
- https://github.com/shouheiyamauchi/react-passport-example

Google Passport Repo Example:
- https://github.com/thechutrain/mern-passport

Favicon Generator:
- https://realfavicongenerator.net/favicon_result?file_id=p1d6lj02mpfts1l8i1voptk91iaa6#.XJZg1-tKjOR

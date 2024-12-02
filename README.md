````
npx create-react-app my-first-landing
````

````
cd my-first-landing
````

````
npm install gh-pages --save-dev
````

Добавьте следующие строки в package.json
````
"scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
}
````

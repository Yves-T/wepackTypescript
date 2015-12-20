#Webpack and typescript

##Setup

First run:
* npm install
* tsd init
* tsd install jquery --save


Typescript compiler doesn't know what require does, so give it a hint by adding the following content to tsd.d.ts

`````
declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};
`````

Now you should be able to build the bundle.js code with

    webpack


##Hot reload

Start webpack server with

    npm start
    
    
And test it with following URL's

    http://localhost:8080/webpack-dev-server/index.html
    http://localhost:8080/webpack-dev-server/bundle
    
Both url's should do the trick. If you make changes to your scripts, changes will reflect in the browser.
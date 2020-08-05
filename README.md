# Aplicaciones Web Progresivas Ng2

Angular :     8.2.14
Angular CLI : 8.3.29
```sh
    $ ng new pwa
    $ Angular routing? yes
    $ Stylesheet format? CSS
```
```sh
    $ cd pwa/
```
Angular material :    8.2.3
```sh
    $ ng add @angular/material
    $ Indigo/Pink
    $ HammerJs? yes
    $ browser animations? yes
```
to run
```sh
    $ ng serve -o
```

Angular Universal v8
* [Server Side Render ¿qué es?](https://lemoncode.net/lemoncode-blog/2018/5/13/server-side-rendering-i-conceptos)
* [SSR with Angular Universal (oficial)](https://angular.io/guide/universal)
* [SSR con Angular Universal](https://medium.com/@mugan86/server-side-rendering-con-angular-universal-9-9fdf33d03f4d)
```sh
    $ ng add @nguniversal/express-engine --clientProject pwa
```
to run
```sh
    $ npm run build:ssr && npm run serve:ssr
```

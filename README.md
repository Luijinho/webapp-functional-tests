# webapp-functional-tests

This is a example on how to use of Mocha unit tests for funtional assessment of webapps.

The toplevel HTML file loads 4 iframes
* solution webapp
* attempt webapp
* solution tests
* attempt tests# webapp-functional-tests

This is an example of how to use Mocha unit tests for the functional assessment of web apps.

The toplevel HTML file loads 4 iframes
* solution web app
* attempt web app
* solution tests
* attempt tests

The solution and attempt web apps are 2 variants of my pet example: a counter.

The Mocha tests on both web apps run on the client side to use the browser's DOM. Both HTML files are similar and load the same JS file with the actual Mocha tests `tests-on-solution.js`

These tests use the `hackedDoc` variable, a hacked variant of the `document` global variable. This global variable cannot be changed and I avoid using modules, for simplicity's sake.

The `hackedDoc` variable is initialized using the `documents` object provided by `hacked-dom-js`. It contains the document objects of the main HTML test file (just in case) and the same objects for the "solution" and "attempt" documents.

The document object for the attempt is hacked ("instrumented" may be a more palatable word) objects with the same properties. The `getElementById()` function
is instrumented to convert queries in the solution into queries in the attempt.

This conversion uses `domMap` which simply maps the nth element in the solution body into the corresponding nth element in the "attempt" body. This stands for the result of the mapping algorithm.

The solution and attempt webapps are 2 variants of my pet example: a counter.

The Mocha test on both webapps run on client side the use the browser DOM. Both HTML files are similar and load the same JS file with the actual Mocha tests `tests-on-solution.js`

These tests use `hackedDoc` variable, a hacked variant of the `document` global variable. This global variable cannot be changed and I avoid using modules, for simplicity sake.

The `hackedDoc` variable is initialized using the `documents` object provided by `hacked-dom-js`. It contains the document objects of the main HTML test file (just in case) and the same objects for the solution and attempt documents.

The document object fot the attempt is hacked ("instrumented" may be a more palatable word) objects with the same properties. The `getElementById()` function
is instrumented to convert queries in the solution into queries in the attempt.

This conversion uses `domMap` that simply maps the nth element in the solution body into the corresponding nth element in the attempt body. This stands for the result of the mapping algorithm.




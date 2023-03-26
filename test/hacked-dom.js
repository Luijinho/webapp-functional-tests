
const main      = document;
const parent    = window.parent;   
const iframes   = parent.document.querySelectorAll('iframe');
const solution  = iframes[0].contentDocument;
const attempt   = iframes[1].contentDocument;
const domMap    = new Map();

const childInPos= (app,i) => app.body.children[i];

( () => {
    for(let i=0; i<3; i++) 
        domMap.set( childInPos(solution,i) , childInPos(attempt,i) );
})();

const documents = {
    main,  
    solution,
    attempt:   { 
        ...attempt, 
        getElementById: (id) => domMap.get( solution.getElementById(id) )
    }
}


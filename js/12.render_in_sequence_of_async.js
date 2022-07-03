// Assume you are getting paragraphs of a page from different library
// Your method should call render in sequence of first page, second page...
// even if second page response comes first and first page response is delayed. 
//your method should wait for first response to come and on rendering the first page then only second page should render


let getPageOne = () => new Promise((res, rej) => {
    setTimeout(() => {
        res('Response 1')
    }, 4000)
});
let getPageTwo = () => new Promise().resolve('Response 2');
let getPageThree = () => new Promise().resolve('Response 3');
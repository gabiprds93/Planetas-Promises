import store from './store';

// function getJSON(url)
// {
//     return new Promise(function(resolve, error)
//     {
//         var ajax = new XMLHttpRequest();
//         ajax.open("GET", url);
//         ajax.send();
//         ajax.onreadystatechange = function()
//         {
//             if(ajax.readyState == 4)
//             {
//                 var response = JSON.parse(ajax.responseText);
//                 resolve(response);
//             }
//         }
//     })
// }

export async function search() 
{
    const url = "data/earth-like-results.json";
    // fetch(url)
    //   .then(response => response.json())
    //   .then(result =>  store.setState({
    //       query: result.results
    //   }))
    const response = await fetch (url);
    const result = await response.json();
    // store.setState({
    //     query: result.results
    // })
    searchItem(result.results);
    // const planeta2 = searchItem(result.results[1]);    
    // console.log ('planeta1,', planeta1);
    // console.log ('planeta2,', planeta2);    
}

export async function searchItem(result) 
{
    //await search();
    const urls = result;
    // const urls = await [...store.getState().query];
    // return new Promise( (response, reject) => {
    //     fetch(url).then ( res => response ( res.json () ))
    //  })
    let newItems = [...store.getState().items];
    
    for(let i in urls)
    {
        fetch(urls[i])
            .then(response => response.json())
            .then(result =>  {
                console.log("result", result);
                // store.setState({
                //     items: newItems.push(result)
                // })
                newItems.push(result);
                console.log("newItems", newItems);                
        })
    }
    store.setState({
        items: newItems
    })
}
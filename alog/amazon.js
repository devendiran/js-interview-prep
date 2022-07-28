/*
customerId  itemId       timestamp
"936458932" "CreateUser" 734569298
"936458932" "EditUser"   734569400
"934334857" "CreateUser" 734569900
"934334857" "ListUsers"  734570000
"936458932" "ListUsers"  734580000

The widget could display e.g.:

|-----------------------|
| Top 3 Pages by visits|
|-----------------------|
| CreateUser: 2         |
| ListUsers: 2          |
| EditUser: 1           |
-------------------------

1. Create a data structure for the samples on the top.
2. Render the widget using the data structure.

*/

const apiRespone = [
    {
        customerId:"936458932",  
        itemId:"CreateUser",       
        timestamp:734569298
    },
]

N
M

const dataTransform = apiRespone.reduce((acc,res) => {
    
    acc = (acc[res.itemId] || {});
    acc

    const page = acc.find((page) => page.name === res.itemId);
    if (page) {
        page.details.push({
            "customerId": res.customerId,
            "timestamp": res.timestamp,
        });

    } else {
       acc.push({
           name: res.itemId,
               details: [{
                "customerId": res.customerId,
                "timestamp": res.timestamp,
            }]
       });
    }
    return acc;
}, {});

Object.keys(dataTransform).map((data) => {
    
})

const data = [{
    name:"CreateUser"
    details:[{
        "customerId": "936458932",
        "timestamp": "734569298"
    },{
        "customerId": "934334857",
        "timestamp": "734569900"
    }]
}];

const listOfVisitedPages = data.map((key,details) => {
    return (<li key={key}>
       {key}: {details.length}
    </li>)
});

<div>
   <h4>Top {Object.keys(data).length} Pages by visits<h4>
   {listOfVisitedPages}
</div>


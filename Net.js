ReactDOM.render(
    <>
    <h1>List Of Top 3 Netflix Series In 2021</h1>
        <Card imgsrc={Data[0].imgsrc}
            title={Data[0].title}
            name={Data[0].seriesname}
            link={Data[0].link}
        />
        <Card 
        imgsrc={Data[1].imgsrc}
            title={Data[1].title}
            name={Data[1].seriesname}
            link={Data[1].link} />
        <Card 
        imgsrc={Data[2].imgsrc}
            title={Data[2].title}
            name={Data[2].seriesname}
            link={Data[2].link} />

    </>,
    document.getElementById("root")
);


import React from "react";
import ReactDOM from "react-dom";
import Data from './Data';
import Card from './Card';

console.log(Data[0].seriesname);

function netcard(val){
    console.log(val);
         return(
            <Card 
            key={val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            name={val.seriesname}
          link={val.link}
      />
         );
}


ReactDOM.render(
    <>
    <h1>List Of Top 3 Netflix Series In 2021</h1>
        
    {Data.map(netcard)};


</>,
     document.getElementById("root")
);



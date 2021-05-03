import React from 'react'
import Papa from 'papaparse'
import { useEffect} from "react"

const Database = (props) => {

    var data = null;
    const inventoryurl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSJymJNzhwLJcpoTjHgNto0tZOiWd4tKcL1oQ6UY3-rquMmXL8FdDAYrmhedTKiXCYWKP7JpXpKxg45/pub?gid=689684771&single=true&output=csv'
    const init=() => {
        Papa.parse(inventoryurl, {
            download: true,
            header: true,
            // complete: function(results) {
            //     data = results.data
            // }
            complete: showInfo
        })
      console.log("first datapoint", data)
    }
    const showInfo=(results) => {
        data = results.data
        // data comes through as a simple array since simpleSheet is turned on
        // alert("Successfully processed " + data.length + " rows!")
        // document.getElementById("food").innerHTML = "<strong>Foods:</strong> " + [ data[0].Name, data[1].Name, data[2].Name ].join(", ");
        console.log(data);
    }
    const printdata=() => {
        console.log("updated data", data)
    }

    useEffect(() => {
        window.addEventListener('load', init)
        // window.addEventListener('click', printdata)
    })
    return (
        <div></div>
    )
}

export default Database

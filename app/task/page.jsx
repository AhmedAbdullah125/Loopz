// 'use client'
// import React, { useState } from 'react'

// export default function task() {
//     let [places, setPlaces] = useState(
//         [
//             { id: 1, data: { name: "ahmed", age: 28 } },
//             { id: 2, data: { name: "mohamed", age: 28 } },
//             { id: 3, data: { name: "ali", age: 28 } },
//             { id: 4, data: { name: "omar", age: 28 } },
//             { id: 5, data: { name: "moaz", age: 28 } },
//             { id: 6, data: { name: "maged", age: 28 } },
//             { id: 7, data: { name: "hamza", age: 28 } },
//             { id: 8, data: { name: "khaled", age: 28 } },
//             { id: 9, data: { name: "saad", age: 28 } },
//             { id: 10, data: { name: "othman", age: 28 } },
//             { id: 11, data: { name: "moawia", age: 28 } },
//             { id: 12, data: { name: "amr", age: 28 } },

//         ]
//     )
//     let placesCopy = [...places]
//     // let [selected,setSelected]=useState(null);
//     let firstPerson = null;
//     let secondPerson = null;
//     let firstindex = useState(null)
//     let secondindex = null
//     function drag(ev) {
//         ev.dataTransfer.setData("text", ev.target.id);
//     }

//     return (
//         <div className="taskDivv"
//         // style={{ cursor: `${firstindex == null ? "auto" : "grabbing"}` }}
//         >
//             <div className="container datamap">
//                 {
//                     places.map((person, index) =>
//                         <div className="person" key={person.id} style={{
//                             backgroundColor: `${firstindex == index ? "red" : "white"}`,
//                             // cursor: `${firstindex == null ? "grab" : "grabbing"}`
//                         }}
//                             onMouseDown={() => {
//                                 firstPerson = person;
//                                 firstindex = index;
//                                 console.log("first Person");
//                                 console.log(firstPerson);
//                                 console.log(placesCopy)
//                             }}
//                             onMouseUp={() => {
//                                 firstindex = null;
//                                 secondindex = null;
//                                 firstPerson = null;
//                                 secondPerson = null;
//                             }}
//                             onMouseOver={() => {
//                                 if (firstPerson != null) {
//                                     if (firstindex != index) {
//                                         secondPerson = person;
//                                         secondindex = index;
//                                         console.log("second");
//                                         console.log(secondPerson);
//                                         placesCopy[firstindex] = secondPerson;
//                                         placesCopy[secondindex] = firstPerson;
//                                         firstindex = null;
//                                         secondindex = null;
//                                         firstPerson = null;
//                                         secondPerson = null;
//                                         setPlaces(placesCopy)
//                                         console.log(places)

//                                     }
//                                 }
//                             }}
//                             draggable="true"

//                         >
//                             <h2>{person.data.name}</h2>
//                             <h3>{index}</h3>
//                         </div>
//                     )
//                 }
//             </div>
//         </div>
//     )
// }
import React from 'react'
import "./Destination.css"
import DestinationData from './DestinationData'
import night from "../assets/1.jpg"
import night2 from "../assets/2.jpg"
import night3 from "../assets/3.jpg"
import night4 from "../assets/4.jpg"

function Destination() {
  return (
    <>
      <div className="destination">
        <h1>Popular Destinations</h1>
        <p align="center">Tours give you the oppurtunity to see a lot, with in a frame time</p>
       <DestinationData 
       className="first-desc"
       heading="Taal Valcano, Batangas"
       text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quod cupiditate voluptates optio facere commodi possimus aut odio placeat quos? Nemo optio quasi nobis minima iusto iste alias, commodi neque dolores delectus nulla officia aut ratione placeat reiciendis repellendus adipisci harum eaque nihil ea odio rem impedit voluptate ut. Eos inventore reiciendis tenetur illum, alias doloremque sunt dolore molestiae minima vero, obcaecati saepe sed ipsa? In inventore, distinctio eaque alias dolores dolor. Voluptate harum doloribus amet. Explicabo similique assumenda a sequi praesentium distinctio necessitatibus alias! Voluptates odit excepturi reiciendis magnam assumenda aliquam qui ipsam enim provident, quidem deserunt, aut quaerat?"
       img1={night}
       img2={night2}/>
       <DestinationData 
       className="first-desc-reverse"
       heading="Mt. DagulDul, Batangas"
       text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quod cupiditate voluptates optio facere commodi possimus aut odio placeat quos? Nemo optio quasi nobis minima iusto iste alias, commodi neque dolores delectus nulla officia aut ratione placeat reiciendis repellendus adipisci harum eaque nihil ea odio rem impedit voluptate ut. Eos inventore reiciendis tenetur illum, alias doloremque sunt dolore molestiae minima vero, obcaecati saepe sed ipsa? In inventore, distinctio eaque alias dolores dolor. Voluptate harum doloribus amet. Explicabo similique assumenda a sequi praesentium distinctio necessitatibus alias! Voluptates odit excepturi reiciendis magnam assumenda aliquam qui ipsam enim provident, quidem deserunt, aut quaerat?"
       img1={night3}
       img2={night4}/>
      </div>
    </>
  )
}

export default Destination

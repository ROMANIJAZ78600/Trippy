import "./Trip.css"
import TripData from "./TripData"
import Trip1 from "../assets/5.jpg"
import Trip2 from "../assets/6.jpg"
import Trip3 from "../assets/8.jpg"
function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
      <TripData 
     
      image={Trip1}
      heading="Trip in Indonesia"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repellat vero labore asperiores impedit amet quod, quidem officia provident qui ratione pariatur sit vitae optio ea itaque dicta ut placeat quisquam veritatis laudantium. Dolorem consectetur recusandae quia, assumenda harum ad distinctio aut dignissimos, soluta aperiam iure quasi ullam ipsa quas."/>
      <TripData 
      
      image={Trip2}
      heading="Trip in Japan"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repellat vero labore asperiores impedit amet quod, quidem officia provident qui ratione pariatur sit vitae optio ea itaque dicta ut placeat quisquam veritatis laudantium. Dolorem consectetur recusandae quia, assumenda harum ad distinctio aut dignissimos, soluta aperiam iure quasi ullam ipsa quas."/>
      <TripData 
     
      image={Trip3}
      heading="Trip in America"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repellat vero labore asperiores impedit amet quod, quidem officia provident qui ratione pariatur sit vitae optio ea itaque dicta ut placeat quisquam veritatis laudantium. Dolorem consectetur recusandae quia, assumenda harum ad distinctio aut dignissimos, soluta aperiam iure quasi ullam ipsa quas."/>
      </div>
      
    </div>
  )
}

export default Trip

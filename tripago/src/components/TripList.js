import React from 'react'

export default function TripList() {
  
  
  fetch('https://3000-piyushbarve98-tripago-yxkpg1yv8w5.ws-us63.gitpod.io/trips',{ 
    headers:{
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true 
    },
    mode: 'no-cors'})
  .then(response => response.json())
  .then(json => console.log(json));

  return (
    <div>TripList</div>
  )
}

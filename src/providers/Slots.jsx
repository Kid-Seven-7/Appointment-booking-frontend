import axios from "axios";

export async function Slots() {
  const { data } = await axios.get("http://localhost:3000/booked-slots");
  console.log("in func "+data.toString());
  
  return data;
}
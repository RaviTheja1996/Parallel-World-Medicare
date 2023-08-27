import { Card } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getHospitals } from "../api/apiRequests";

export default function Hospitals() {
  const [hospitals, setHospitals] = useState([]);
  let params;

  useEffect(() => {
    let res = getHospitals();
    res.then((res) => {
      console.log(res.data);
      setHospitals(res.data);
    });
  }, []);

  return <section id="hospitals" style={{ marginTop: "2rem" }}></section>;
}

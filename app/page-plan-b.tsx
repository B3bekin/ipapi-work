
// import React, { useState, useEffect } from "react";
// import Loader from "../public/loading.jpg";

// interface IpApiData {
//   ip: string;
//   city: string;
//   region: string;
//   country: string;
//   postal: string;
//   eu: string;
//   latitude: number;
//   timezone: string;
//   country_calling_code: string;
//   currency: string;
//   languages: string;
//   asn: string;
//   org: string;
// }

// function Home() {
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState<IpApiData | null>(null);

//   useEffect(() => {
//     fetch("https://ipapi.co/json/")
//       .then((response) => response.json())
//       .then((data: IpApiData) => {
//         setData(data);
//         setLoading(false);
//       })
//       .catch((error) => console.error(error));
//   }, []);

//   return (
//     <div>
//       <h1>Buttons</h1>
//       {loading && <p>loading</p>}
//       {data && (
//         <div>
//           <p>IP: {data.ip}</p>
//           <p>City: {data.city}</p>
//           <p>Region: {data.region}</p>
//           <p>Country: {data.country}</p>
//           <p>Postal Code: {data.postal}</p>
//           <p>European Union: {data.eu}</p>
//           <p>Latitude: {data.latitude}</p>
//           <p>Time Zone: {data.timezone}</p>
//           <p>Calling Code: {data.country_calling_code}</p>
//           <p>Currency: {data.currency}</p>
//           <p>Languages: {data.languages}</p>
//           <p>ASN: {data.asn}</p>
//           <p>Org: {data.org}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Home;

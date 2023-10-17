"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

interface IpApiData {
  ip: string;
  city: string;
  region: string;
  country: string;
  postal: string;
  eu: boolean;
  latitude: number;
  timezone: string;
  country_calling_code: string;
  currency: string;
  languages: string;
  asn: string;
  org: string;
}

function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<IpApiData>();

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((data: IpApiData) => {
        setData(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 gap-4 mx-auto py-6">
        <div className="">
          <h1 className="text-3xl font-bold ">
            The info is coming from IPA API
          </h1>

          <div className="flex items-center justify-center">
            {loading && (
              <div className="flex flex-col h-1/2 justify-center items-center">
                <div className=" animate-spin rounded-full h-16 w-5 border-t-8 border-b-8 border-black"></div>
                <p>The table will be here shortly</p>
              </div>
            )}
          </div>
        </div>

        {data && (
          <div className="bg-yellow-300 p-6 rounded-xl hover:cursor-pointer">
            <p className="text-lg font-medium hover:text-xl hover:font-semibold">
              IP: {data.ip}
            </p>
            <p className="text-lg font-medium hover:text-xl hover:font-semibold">
              City: {data.city}
            </p>
            <p className="text-lg font-medium hover:text-xl hover:font-semibold">
              Region: {data.region}
            </p>
            <p className="text-lg font-medium hover:text-xl hover:font-semibold">
              Country: {data.country}
            </p>
            <p className="text-lg font-medium hover:text-xl hover:font-semibold">
              Postal Code: {data.postal}
            </p>
            <p className="text-lg font-medium hover:text-xl hover:font-semibold">
            European Union: {data.eu ? "You are in Europe " : "You are in Europe"}
            </p>
            <p className="text-lg font-medium hover:text-xl hover:font-semibold">
              Latitude: {data.latitude}
            </p>
            <p className="text-lg font-medium hover:text-xl hover:font-semibold">
              Time Zone: {data.timezone}
            </p>
            <p className="text-lg font-medium hover:text-xl hover:font-semibold">
              Calling Code: {data.country_calling_code}
            </p>
            <p className="text-lg font-medium hover:text-xl hover:font-semibold">
              Currency: {data.currency}
            </p>
            <p className="text-lg font-medium hover:text-xl hover:font-semibold">
              Languages: {data.languages}
            </p>
            <p className="text-lg font-medium hover:text-xl hover:font-semibold">
              ASN: {data.asn}
            </p>
            <p className="text-lg font-medium hover:text-xl hover:font-semibold">
              Org: {data.org}
            </p>
            <h1 className="text-3xl font-bold ">I know where you live 😎</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;

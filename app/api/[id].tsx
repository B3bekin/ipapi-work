import { NextApiRequest, NextApiResponse } from 'next';

interface IpApiData {
  ip: string;
  city: string;
  region: string;
  country: string;
  postal: string;
  eu: string;
  latitude: number;
  timezone: string;
  country_calling_code: string;
  currency: string;
  languages: string;
  asn: string;
  org: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IpApiData>
) 

{
  const { id } = req.query;

  try {
    const response = await fetch(`https://ipapi.co/${id}/json/`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.log("something went wrong");
  }
}
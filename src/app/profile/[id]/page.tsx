import Image from "next/image";
import { notFound } from "next/navigation";

import RatingStars from "@/components/RatingStars";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MentorsData } from "@/data/homepage";
import { getIcon } from "@/data/static";
const mentors = MentorsData;

const Profile = ({ params }: { params: { id: number } }) => {
  const id = params.id ? +params.id : 0;
  /*
    https://nextjs.org/docs/app/api-reference/functions/use-params
    Params are returned as strings, so you may need to cast them to the desired type.
  */
  const mentor = mentors.find((mentor) => mentor.id === id);

  return mentor ? (
    <div className="flex flex-col justify-center lg:flex-row gap-14 py-24">
      <div className="flex flex-col w-full lg:w-1/4 items-center">
        <Image src={mentor.image} alt={mentor.name} width={200} height={200} />
        <div className="w-full mt-5">
          <RatingStars id="profile" rating={mentor.rating} />
        </div>
        <h1 className="text-[2rem] mt-5">{mentor.name}</h1>
        <p>{mentor.title}</p>
        <p>{mentor.location}</p>
        <p className="mt-5 text-sm">{mentor.bio}</p>

        <p>{mentor.email}</p>
      </div>
      <div className="w-full lg:w-1/2 bg-slate-100 rounded-sm"></div>
      <div className="w-full lg:w-1/4">
        <div className="sidebar-section">
          <p>I can teach you:</p>
          <Separator className="mt-2" />
          <ul className="flex">
            {mentor.languages.map((language) => (
              <span
                key={language}
                className="text-xs text-white rounded-full mr-5 mt-5"
                title={language}
              >
                <Image
                  src={`/icons/${getIcon(language)}.svg`}
                  alt={`${language} Icon`}
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </span>
            ))}
          </ul>
        </div>

        <div className="sidebar-section">
          <p>Availability:</p>
          <Separator className="mt-2" />
          {mentor.availability ? (
            <div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/2">Day</TableHead>
                    <TableHead>Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Monday</TableCell>
                    <TableCell>9am - 1pm</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Tuesday</TableCell>
                    <TableCell>9am - 1pm</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Wednesday</TableCell>
                    <TableCell>9am - 1pm</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Thursday</TableCell>
                    <TableCell>9am - 1pm</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Friday</TableCell>
                    <TableCell>9am - 1pm</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Button className="w-full mt-5">Book a Session</Button>
            </div>
          ) : (
            <p>Not available</p>
          )}
        </div>
      </div>
    </div>
  ) : (
    notFound()
  );
};

export default Profile;

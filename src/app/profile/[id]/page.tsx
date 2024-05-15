import Image from "next/image";
import { notFound } from "next/navigation";

import RatingStars from "@/components/RatingStars";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { MentorsData } from "@/data/homepage";
const mentors = MentorsData;

const Profile = ({ params }: { params: { id: number } }) => {
  const id = params.id ? +params.id : 0;
  /*
    https://nextjs.org/docs/app/api-reference/functions/use-params
    Params are returned as strings, so you may need to cast them to the desired type.
  */
  const mentor = mentors.find((mentor) => mentor.id === id);

  return mentor ? (
    <div className="container flex flex-col justify-between lg:flex-row gap-14 my-24 bg-white p-10 rounded-[4px]">
      <div className="flex flex-col w-full lg:w-2/3 xl:w-3/4 items-start">
        <div className="w-full flex flex-col lg:flex-row  items-center lg:items-start">
          <Image src={mentor.image} alt={mentor.name} width={120} height={120} />
          <div className="ml-0 lg:ml-10 text-center lg:text-left">
            <h1 className="text-[2rem] mt-5 text-primary">{mentor.name}</h1>
            <div className="w-full mt-2">
              <RatingStars id="profile" rating={mentor.rating} align="left" size="large" colorClass="tertiary" />
            </div>
          </div>
        </div>
        <h2 className="text-primary text-[1.5rem] mt-10">Intro</h2>
        <p className="mt-5 text-sm">{mentor.bio}</p>

        <h2 className="text-primary text-[1.5rem] mt-10">Skills</h2>
        <ul className="flex">
          {mentor.languages.map((language) => (
            <span
              key={language}
              className="text-xs text-primary rounded-[4px] mr-5 mt-5 bg-primary/10 px-2 py-1"
              title={language}
            >
              {language}
            </span>
          ))}
        </ul>
      </div>
      <div className="w-full lg:w-1/3 xl:w-1/4">
        <div className="sidebar-section">
          <Button className="w-full">Message</Button>
          <Button className="w-full mt-5">Book a Session</Button>
        </div>

        <div className="sidebar-section">
          <h2 className="text-primary text-[1.5rem] mt-10">Availability</h2>
          <div className="bg-slate-50 rounded-[4px] px-8 py-4">
            {mentor.availability ? (
              <div>
                <Table className="tight">
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
              </div>
            ) : (
              <p>Not available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    notFound()
  );
};

export default Profile;

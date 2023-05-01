"use client";
import { Code2Icon, GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

interface Member {
  name: string;
  bio?: string;
  linkedin?: string;
  site?: string;
  twitter?: string;
  github?: string;
  photo: string;
}

export default function About() {
  const [members, setMembers] = useState<Member[]>();
  const githubUsers = [
    "anddreluis2",
    "lxcvz",
    "pedrohgoncalvess",
    "josethz00",
    "mauvieira",
    "mauricioabreu",
    "murillo-nahas",
  ];
  const fetchMembers = async () => {
    const members = await Promise.all(
      githubUsers.map(async (user) => {
        const res = await fetch(`https://api.github.com/users/${user}`);
        const data = await res.json();
        console.log("data", data);
        return {
          name: data.name,
          bio: data.bio,
          linkedin: data.linkedin,
          site: data.blog,
          twitter: data.twitter_username,
          github: data.login,
          photo: data.avatar_url,
        };
      })
    );
    setMembers(members);
  };

  useEffect(() => {
    fetchMembers();
    console.log(members);
  }, []);

  return (
    <main className={`${inter.className} mx-auto w-[95%] max-w-[1140px]`}>
      {" "}
      <div className="m-auto flex flex-col lg:flex-row">
        <h1 className="pb-4 text-3xl font-bold">Our team</h1>
      </div>
      <div className="w-full gap-4">
        {members?.map((member) => (
          <div key={member.github} className="mt-8 flex w-full">
            <Image
              className="rounded-full"
              width={90}
              height={90}
              src={member.photo}
              alt={member.name}
            />
            <div className="ml-4 ">
              <h2 className="font-bold">{member.name}</h2>
              <p className="text-sm text-gray">{member?.bio}</p>
              <div className="mt-2 flex gap-4">
                {member.site && (
                  <a href={member.site}>
                    <Code2Icon />
                  </a>
                )}
                {member.twitter && (
                  <a href={`https://twitter.com/${member.twitter}`}>
                    <TwitterIcon />
                  </a>
                )}
                {member.github && (
                  <a href={`https://github.com/${member.github}`}>
                    <GithubIcon />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

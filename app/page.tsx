import Image from "next/image";

import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          2024 CSE Exercise by&nbsp;
          <code className="font-mono font-bold">Mindy Postoff</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hopeful Staff Community Manager @{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <Accordion>
      <AccordionItem key="1" aria-label="Question 1" subtitle="PMy most and least favorite support tasks." title="Question 1">
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Question 2"
        subtitle={
          <span>
            Learn more. Do more. <strong>key 2</strong>
          </span>
        }
        title="Question 2"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Question 3" subtitle="Challenges help us grow." title="Question 3">
        {defaultContent}
      </AccordionItem>
    </Accordion>
    </main>
  );
}

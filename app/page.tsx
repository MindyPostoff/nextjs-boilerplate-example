import Image from "next/image";

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

      <div className="mb-8 relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/Mindy - Headshot - Small.jpg"
          alt="Mindy Postoff headshot"
          width={180}
          height={180}
          priority
        />

      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className={`mb-8 border-solid border-2 border-sky-500 p-4`}>
          <h2 className={`mb-3 text-2xl font-semibold`}>Question 1</h2>
          <p className={`mb-8 max-w-[300ch] text-sm opacity-50`}>
            My most and least favorite support tasks.
          </p>
          <p className={`m-0 max-w-[300ch] text-sm opacity-100`}>
            Most Favorite:
          </p>   
          <ul className={`list-decimal`}>
            <li className={`text-sm pl-4`}>Engage multiple users at once in a public discussion, to answer their questions and troubleshoot problems. Why? I love engaging with users, learning more about the projects they build, and what features would make their projects better.</li>
            <li className={`text-sm pl-4`}>Work with the product team to develop a new feature based on feedback from customers. Why? As a customer advocate, I want to help convey the importance of different features to the product teams that have the resources to build the solutions. Ensuring that we keep a prioritized and sustainable roadmap is important to me.</li>
            <li className={`text-sm pl-4`}>Create video tutorials to help teach users a specific feature or use case. Why? If a picture is worth a thousand words, a video walkthrough is worth so much more. I use video tutorials all the time, and I appreciate how helpful they are, so if I can create the same for our users, I will do it.</li>
            <li className={`text-sm pl-4`}>Manage a support team. Why? I love helping people reach their goals, and by being a force multiplier leader, I am in a unique position to help teammates level up and drive the team to reach broader goals.</li>
            <li className={`text-sm pl-4`}>Help train and onboard new support teammates. Why? See my point above. New teammates are bright-eyed and bushy-tailed, and ready to learn anything and everything. I love helping them get up to speed and become high performing colleagues.</li>
          </ul>

          <p className={`m-0 pt-4 max-w-[300ch] text-sm opacity-100`}>
            Least Favorite:
          </p>   
          <ul className={`list-decimal`}>
            <li className={`text-sm pl-4`}>Dig through logs to troubleshoot a broken project. Why? I much prefer working with humans, than digging through computer logs.</li>
            <li className={`text-sm pl-4`}>Scheduling time-off coverage and collaborating as part of a growing cohesive support team. Why? Working with the logistics of schedules is not what floats my boast. I do, however, really enjoy planning the logistics and itineraries of traveling.</li>
            <li className={`text-sm pl-4`}>Respond to over 50 support requests via email every day. Why? I find it mundane to work within a quota mentality. Each day is different, with different challenges that come in from users, so having a certain number of requests to reply to feels like a recipe for poorer support overall, because it does not leave space for requests to take longer.</li>
            <li className={`text-sm pl-4`}>Identify, file bugs in private and public repos on GitHub. Why? I often find myself battling doubt, of whether a problem I have with the code is actually a problem everyone is having. This doubt makes it challenging to identify bugs.</li>
            <li className={`text-sm pl-4`}>Analyze hundreds of support tickets to spot trends the product team can use. Why? Although I appreciate how important data analysis is, working with quantitative data is not as much fun for me as handling qualitative data.</li>
          </ul>
          
        </div>
        <div className={`mb-8 border-solid border-2 border-sky-500 p-4`}>
          <h2 className={`mb-3 text-2xl font-semibold`}>Question 2</h2>
          <p className={`mb-8 max-w-[300ch] text-sm opacity-50`}>
            Learn more. Do more.
          </p>
          <p className={`m-0 max-w-[300ch] text-sm opacity-100`}>
            I want to be a strong user advocate and brand ambassador. I need to learn more about the technology used, and how projects are being built with it. My mind is swimming with Vercel right now, so I want to learn more about Next.js and how to build website using it!
          </p>              
        </div>
        <div className={`mb-8 border-solid border-2 border-sky-500 p-4`}>
          <h2 className={`mb-3 text-2xl font-semibold`}>Question 3</h2>
          <p className={`mb-8 max-w-[300ch] text-sm opacity-50`}>
            I love a good challenge.
          </p>
          <p className={`m-0 max-w-[300ch] text-sm opacity-100`}>
            When I was leading a support team, a teammate took it upon themself to act on a decision that resulted in a loss of revenue for the company. They felt that it was immorale for the company to sell a product that was known to have a particular bug in it. I had to have a very candid discussion with them, where I listened to their concerns, explained why their actions were inappropriate, and set expectations for them moving forward. Years later, they told me that that incident, and how I helped them maneuver through it, was the most impactful experience of their career.
          </p>    
        </div>
        <div className={`mb-8 border-solid border-2 border-sky-500 p-4`}>
          <h2 className={`mb-3 text-2xl font-semibold`}>Question 4</h2>
          <p className={`mb-8 max-w-[300ch] text-sm opacity-50`}>
            Edge Functions, Serverless Functions, and Edge Middleware, Oh My.
          </p>
          <p className={`m-0 max-w-[300ch] text-sm opacity-100`}>
            Edge Functions are best used when lightweight JavaScript functions that execute close to the user are needed. Serverless Functions are for when you want access to all the Node.js APIs for writing on the web. Edge Middleware is code that executes before a request is processed on a site, so this is helpful when you want to personalize statically-generated content. 
          </p>            
        </div>
        <div className={`mb-8 border-solid border-2 border-sky-500 p-4`}>
          <h2 className={`mb-3 text-2xl font-semibold`}>Question 5</h2>
          <p className={`mb-8 max-w-[300ch] text-sm opacity-50`}>
            Troubleshooting the unknown is a hobby of mine.
          </p>
          <p className={`m-0 max-w-[300ch] text-sm opacity-100`}>
            My answer.
          </p>            
        </div>
        <div className={`mb-8 border-solid border-2 border-sky-500 p-4`}>
          <h2 className={`mb-3 text-2xl font-semibold`}>Question 6</h2>
          <p className={`mb-8 max-w-[300ch] text-sm opacity-50`}>
            Helping a frustrated customer.
          </p>
          <p className={`m-0 max-w-[300ch] text-sm opacity-100`}>
            My answer.
          </p>            
        </div>
        <div className={`mb-8 border-solid border-2 border-sky-500 p-4`}>
          <h2 className={`mb-3 text-2xl font-semibold`}>Question 7</h2>
          <p className={`mb-8 max-w-[300ch] text-sm opacity-50`}>
            Redirecting without losing SEO authority.
          </p>
          <p className={`m-0 max-w-[300ch] text-sm opacity-100`}>
            My answer.
          </p>            
        </div>
        <div className={`mb-8 border-solid border-2 border-sky-500 p-4`}>
          <h2 className={`mb-3 text-2xl font-semibold`}>Question 8</h2>
          <p className={`mb-8 max-w-[300ch] text-sm opacity-50`}>
            This party is awesome but search engines are not allowed.
          </p>
          <p className={`m-0 max-w-[300ch] text-sm opacity-100`}>
            My answer.
          </p>            
        </div>       
        <div className={`mb-8 border-solid border-2 border-sky-500 p-4`}>
          <h2 className={`mb-3 text-2xl font-semibold`}>Question 9</h2>
          <p className={`mb-8 max-w-[300ch] text-sm opacity-50`}>
            There are no problems we cannot solve together and very few that we can solve by ourselves. LBJ
          </p>
          <p className={`m-0 max-w-[300ch] text-sm opacity-100`}>
            My answer.
          </p>            
        </div>
        <div className={`mb-8 border-solid border-2 border-sky-500 p-4`}>
          <h2 className={`mb-3 text-2xl font-semibold`}>Question 10</h2>
          <p className={`mb-8 max-w-[300ch] text-sm opacity-50`}>
            Onward and upward.
          </p>
          <p className={`m-0 max-w-[300ch] text-sm opacity-100`}>
            My answer.
          </p>            
        </div>        
      </div>

      
    </main>
  );
}

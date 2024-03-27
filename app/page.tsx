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

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
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
        <div className={`mb-8 border-solid border-2 border-sky-500`}>
          <h2 className={`mb-3 text-2xl font-semibold`}>Question 1</h2>
          <p className={`mb-8 max-w-[300ch] text-sm opacity-50`}>
            My most and least favorite support tasks.
          </p>
          <p className={`m-0 max-w-[300ch] text-sm opacity-100`}>
            My answer.
          </p>                
        </div>
        <div className={`mb-8`}>
          <h2 className={`mb-3 text-2xl font-semibold`}>Question 2</h2>
          <p className={`mb-8 max-w-[300ch] text-sm opacity-50`}>
            Learn more. Do more.
          </p>
          <p className={`m-0 max-w-[300ch] text-sm opacity-100`}>
            My answer.
          </p>              
        </div>
        <div className={`mb-8`}>
          <h2 className={`mb-3 text-2xl font-semibold`}>Question 3</h2>
          <p className={`mb-8 max-w-[300ch] text-sm opacity-50`}>
            I love a good challenge.
          </p>
          <p className={`m-0 max-w-[300ch] text-sm opacity-100`}>
            My answer.
          </p>    
        </div>
        <div className={`mb-8`}>
          <h2 className={`mb-3 text-2xl font-semibold`}>Question 4</h2>
          <p className={`mb-8 max-w-[300ch] text-sm opacity-50`}>
            Edge Functions, Serverless Functions, and Edge Middleware, Oh My.
          </p>
          <p className={`m-0 max-w-[300ch] text-sm opacity-100`}>
            My answer.
          </p>            
        </div>
        <div className={`mb-8`}>
          <h2 className={`mb-3 text-2xl font-semibold`}>Question 5</h2>
          <p className={`mb-8 max-w-[300ch] text-sm opacity-50`}>
            Troubleshooting the unknown is a hobby of mine.
          </p>
          <p className={`m-0 max-w-[300ch] text-sm opacity-100`}>
            My answer.
          </p>            
        </div>
        <div className={`mb-8`}>
          <h2 className={`mb-3 text-2xl font-semibold`}>Question 6</h2>
          <p className={`mb-8 max-w-[300ch] text-sm opacity-50`}>
            Helping a frustrated customer.
          </p>
          <p className={`m-0 max-w-[300ch] text-sm opacity-100`}>
            My answer.
          </p>            
        </div>
        <div className={`mb-8`}>
          <h2 className={`mb-3 text-2xl font-semibold`}>Question 7</h2>
          <p className={`mb-8 max-w-[300ch] text-sm opacity-50`}>
            Redirecting without losing SEO authority.
          </p>
          <p className={`m-0 max-w-[300ch] text-sm opacity-100`}>
            My answer.
          </p>            
        </div>
        <div className={`mb-8`}>
          <h2 className={`mb-3 text-2xl font-semibold`}>Question 8</h2>
          <p className={`mb-8 max-w-[300ch] text-sm opacity-50`}>
            This party is awesome but search engines are not allowed.
          </p>
          <p className={`m-0 max-w-[300ch] text-sm opacity-100`}>
            My answer.
          </p>            
        </div>       
        <div className={`mb-8`}>
          <h2 className={`mb-3 text-2xl font-semibold`}>Question 2</h2>
          <p className={`mb-8 max-w-[300ch] text-sm opacity-50`}>
            There are no problems we cannot solve together and very few that we can solve by ourselves. LBJ
          </p>
          <p className={`m-0 max-w-[300ch] text-sm opacity-100`}>
            My answer.
          </p>            
        </div>
        <div className={`mb-8`}>
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

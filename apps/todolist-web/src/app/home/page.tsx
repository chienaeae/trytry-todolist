import Image from 'next/image';
import todolistConceptPic from '../../../public/todolist-concept.png';
import { FaGithubSquare, FaHandPointRight } from 'react-icons/fa';
import Link from 'next/link';

export default function Index() {
  return (
    <div className="bg-dark text-white w-screen h-screen flex flex-col  items-center">
      <header className="bg-black w-full text-center flex justify-center  items-end py-12 h-40 ">
        <h1 className="text-4xl ">Try Try Todolist (Beta)</h1>
        <div className="ml-12 hover:text-stone-400 duration-150 animate-bounce ">
          <Link href="/" className="flex justify-center items-center">
            Get Started!
            <FaHandPointRight className="inline-block ml-2 text-2xl" />
          </Link>
        </div>
      </header>
      <main className="flex flex-col items-center w-3/5 h-[52rem] py-10">
        <article className="w-full">
          <p>
            Currently, this todolist application is experimental and uses a
            monorpo structure managed by Nx. The frontend is built with Next.js,
            and the backend uses Go. I plan to gradually complete the folloing
            features
          </p>
          <ul className="list-disc p-3">
            <li>Backend communication with GraphQL</li>
            <li>User login</li>
            <li>Todolist and tag CRUD operations</li>
            <li>Interactive motion effects</li>
            <li>Multiple color themes</li>
            <li>Integration</li>
            <li>Multi-language support</li>
          </ul>
          <p>
            Once these features are completed, version 1.0.0 will be released.
          </p>
          <div className="flex flex-col px-3 py-6">
            <Image
              src={todolistConceptPic}
              height={300}
              alt="todolist concept example"
            />
            <p className="text-xs mt-1">This is concept picture.</p>
          </div>
        </article>
      </main>
      <footer className="flex item-center bg-black  w-full py-5 px-20 h-40">
        <div className="m-auto">
          <ul>
            <Link
              href="https://github.com/chienaeae/trytry-todolist"
              className="hover:text-stone-400 duration-150"
            >
              <FaGithubSquare className="text-3xl inline-block" /> chienaeae/
              trytry-todolist
            </Link>
          </ul>
        </div>
      </footer>
    </div>
  );
}

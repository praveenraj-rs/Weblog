import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className=" mx-auto bg-white">
      <div className="w-full flex flex-col justify-center align-middle text-center p-5 mb-4 font-serif bg-grey">
        <h1 className="text-5xl font-extrabold p-3">Web-log</h1>
        <p>A log of my technical insights, ideas, and solutions.</p>
      </div>
      <Posts />
    </main>
  );
}

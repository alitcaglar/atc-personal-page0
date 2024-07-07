import { GiPokecog } from "react-icons/gi";

export default function MyProjects() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <p className="italic text-3xl bg-gradient-to-r from-teal-600 to-lime-600 bg-clip-text text-transparent">
        Here will be my projects soon...
      </p>
      <span className="text-5xl text-lime-600 animate-spin">
        <GiPokecog />
      </span>
    </main>
  );
}

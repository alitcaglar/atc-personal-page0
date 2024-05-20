import { DiAtom } from "react-icons/di";

export default function Header() {
  return (
    <>
      <header className="flex justify-between backdrop-blur-sm">
        <div className="flex m-2 ml-3">
          <p className="text-6xl inline-block">
            <DiAtom />
          </p>
          <span className="p-5 inline-block">Ali Turabi Caglar</span>
        </div>
        <nav className="flex items-center">
          <ul className="flex items-center mr-3">
            <li className="p-3">Home</li>
            <li className="p-3">About Me</li>
          </ul>
        </nav>
      </header>
      <div className="w-full bg-gradient-radial from-transparent via-teal-500 to-transparent h-[2px] bg-contain"></div>
    </>
  );
}

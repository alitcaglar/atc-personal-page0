import MainTypewriter from "@/components/(Typewriters)/MainTypewriter";
import MainTopCarousel from "@/components/(Carousels)/MainTopCarousel";
import Emblems from "@/components/main-3d-programs/Emblems";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-wrap items-center justify-around">
      <MainTypewriter />
      <MainTopCarousel />
      <div className="bg-gradient-to-l from-transparent via-transparent to-teal-600 h-8 w-full left-0"></div>
      <div className="sm:m-48">
        <Emblems />
      </div>
      <div className="bg-gradient-to-r from-transparent via-transparent to-lime-600 h-8 w-full left-0"></div>
    </main>
  );
}

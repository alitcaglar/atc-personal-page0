import MainTypewriter from "@/components/(Typewriters)/MainTypewriter";
import MainTopCarousel from "@/components/(Carousels)/MainTopCarousel";
import Emblems from "@/components/main-3d-programs/Emblems";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-wrap items-center justify-around">
      <MainTypewriter />
      <MainTopCarousel />
      <div className="sm:m-48">
        <Emblems />
      </div>
    </main>
  );
}

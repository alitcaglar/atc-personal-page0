import Image from "next/image";
import Link from "next/link";

export default function PhotoPage({ params }: any) {
  console.log(params.photoSlug);

  const urlRevive = params.photoSlug
    .replaceAll("ssslashhh", "/")
    .replaceAll("dddottt", ".")
    .replaceAll("%3A", ":");
  return (
    <div className="overflow-hidden h-screen mt-5">
      <div className="w-full bg-gradient-to-l from-transparent via-lime-500 to-transparent h-1"></div>
      <Image
        src={urlRevive}
        alt={params.photoSlug}
        width={2000}
        height={2000}
      />
      <div className="w-full bg-gradient-to-l from-transparent via-lime-500 to-transparent h-1"></div>
      <Link href="/">
        <p className="text-teal-500 hover:text-lime-500 m-5 transition duration-500 text-center">
          Go to Main Page
        </p>
      </Link>
    </div>
  );
}

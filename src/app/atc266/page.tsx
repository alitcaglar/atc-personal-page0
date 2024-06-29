import Atc266Panel from "@/components/Panel/Atc266Panel";

export default async function atc266() {
  return session?.user?.role === "atc266" ? (
    <Atc266Panel />
  ) : (
    <div className="min-h-screen m-16">
      <h1 className="text-3xl font-bold">404 not found *</h1>
    </div>
  );
}

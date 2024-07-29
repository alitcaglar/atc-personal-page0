import { Separator } from "@/components/ui/separator";
import CvSummary from "@/components/CV/CvSummary";
import HeaderInfo from "@/components/CV/HeaderInfo";
import KeyCompetencies from "@/components/CV/KeyCompetencies";
import PersonalInfo from "@/components/CV/PersonalInfo";
import ProfessionalExperience from "@/components/CV/ProfessionalExperience";
import EducationInfo from "@/components/CV/EducationInfo";
import ContactInfo from "@/components/CV/ContactInfo";

export default function Home() {
  return (
    <>
      <main className=" min-h-screen p-12 grid md:grid-cols-5 gap-1 grid-rows-1 w-full grid-cols-1">
        <div className="col-span-2 flex-row">
          <div className="max-w-4xl mx-auto bg-slate-100 shadow-lg bg-opacity-60 rounded-lg mb-2">
            <HeaderInfo />
          </div>
          <div className="max-w-4xl mx-auto bg-slate-100 shadow-lg p-3 bg-opacity-80 rounded-lg mb-2">
            <PersonalInfo />
          </div>
          <div className="max-w-4xl mx-auto bg-slate-100 shadow-lg p-3 bg-opacity-60 rounded-lg mb-2">
            <EducationInfo />
          </div>
          <div className="max-w-4xl mx-auto bg-slate-100 shadow-lg p-3 bg-opacity-80  rounded-b-lg rounded-lg mb-2">
            <ContactInfo />
          </div>
          <div className="opacity-30 p-3 text-opacity-50 text-xs mt-64">
            designed and developed by
            <p className="text-teal-700"> Ali Turabi Caglar</p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto bg-white shadow-lg col-span-3 bg-opacity-80 rounded-lg ">
          <div>
            <CvSummary />
          </div>

          <div>
            <ProfessionalExperience />
            <Separator className="m-6 w-5/6 " />
          </div>

          <div>
            <KeyCompetencies />
            <Separator className="m-6 w-5/6" />
          </div>
        </div>
      </main>
    </>
  );
}

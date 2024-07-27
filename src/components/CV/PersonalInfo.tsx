export default function PersonalInfo() {
  return (
    <div className="p-6 text-slate-800">
      <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
      <div className="mb-4 text-stone-800">
        <h3 className="text-lg font-semibold">Date of Birth:</h3>
        <p>17.09.1993</p>
      </div>
      <div className="mb-4 text-stone-800">
        <h3 className="text-lg font-semibold">Nationality:</h3>
        <p>Turkish</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Languages:</h3>
        <ul className="list-disc list-inside ml-4">
          <li>Turkish (Native)</li>
          <li>English (B2+)</li>
          <li>Russian (Fluent)</li>
        </ul>
      </div>
      <div className="mb-4 text-stone-800">
        <h3 className="text-lg font-semibold">Driving License (DL):</h3>
        <ul className="list-disc list-inside ml-4">
          <li>
            Russian International DL (since 2017 - in 2022 I exchanged my
            Russian driver`s license for Turkish International DL)
          </li>
          <li>Turkish International DL since 2022</li>
        </ul>
      </div>
    </div>
  );
}

import { PollingUnit } from "@/types";

function BasicInfo({ unit }: { unit: PollingUnit }) {
  return (
    <div className="md:grid grid-cols-3 tablet:grid-cols-2 gap-5">
      {[
        { label: "ID", text: unit.polling_unit_id },
        { label: "Unit Name", text: unit.polling_unit_name },
        { label: "Unit Number", text: unit.polling_unit_number },
        { label: "Description", text: unit.polling_unit_description },
        { label: "Longitude", text: unit.long },
        { label: "Latitude", text: unit.lat },
        { label: "Entered By", text: unit.entered_by_user },
        {
          label: "Date Added",
          text: new Date(unit.date_entered).toDateString(),
        },
        { label: "Ward ID", text: unit.ward_id },
      ].map((val, ind) => (
        <div key={ind} className="space-y-1 p-5">
          <h3 className="text-primary font-medium uppercase">{val.label}</h3>

          <p className="text-textcolor text-2xl xs:text-xl">{val.text}</p>
        </div>
      ))}
    </div>
  );
}

export default BasicInfo;

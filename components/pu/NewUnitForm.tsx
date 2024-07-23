"use client";

import { Button } from "@mui/material";
import NewUnitInfo from "./NewUnitInfo";
import NewUnitResult from "./NewUnitResult";
import { createNewUnit } from "@/data/polling_unit";
import { useState } from "react";
import { uploadResult } from "@/data/result";
import Loader from "../widgets/loader";

function NewUnitForm({
  parties,
  lga_id,
  ward_id,
}: {
  parties: string[];
  lga_id: number;
  ward_id: number;
}) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const res = await createNewUnit(formData, lga_id, ward_id);

    if (res.error) {
      setLoading(false);

      return alert(res.error);
    }
    if (!res.data) {
      setLoading(false);

      return;
    }

    const res2 = await uploadResult(formData, parties, res.data);

    setLoading(false);
    if (res2.error) {
      setLoading(false);

      return alert(res2.error);
    }

    (e.target as HTMLFormElement).reset();

    if (res2.success) alert(res2.success);
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 xs:px-0 space-y-10">
      <div className="space-y-5">
        <h2 className="text-textcolor text-xl xs:text-lg font-medium">
          Polling Unit Info
        </h2>

        <NewUnitInfo />
      </div>

      <hr className="w-[90%] mx-auto" />

      <div className="space-y-5">
        <h2 className="text-textcolor text-xl xs:text-lg font-medium">
          Election Results
        </h2>

        <NewUnitResult parties={parties} />
      </div>

      <Button type="submit" className="mx-auto bg-primary hover:primary/80 text-[white]">
        Submit Unit
      </Button>

      {loading && (
        <div className="fixed top-0 left-0 w-full h-screen bg-[black]/60 z-10">
          <Loader />
        </div>
      )}
    </form>
  );
}

export default NewUnitForm;

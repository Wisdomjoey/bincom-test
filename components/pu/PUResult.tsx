"use client";

import { fetchPollResult } from "@/data/result";
import { PUResult as PUScore } from "@/types";
import { formatNmber } from "@/utils";
import { useEffect, useState } from "react";
import Loader from "../widgets/loader";

function PUResult({ id }: { id: number }) {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState<PUScore[]>([]);
  const [error, setError] = useState<string>();

  useEffect(() => {
    fetchPollResult(id).then((data) => {
      setLoading(false);

      if (data.error) return setError(data.error);
      if (data.data) setResults(data.data);
    });
  }, []);

  return loading ? (
    <Loader />
  ) : error ? (
    <p className="m-auto">{error}</p>
  ) : (
    <div className="flex flex-col gap-5">
      {results.map((result, ind) => {
        const percentage =
          (result.party_score /
            results.reduce((a, b) => a + b.party_score, 0)) *
          100;

        return (
          <div key={ind} className="space-y-3">
            <h3 className="text-xl xs:text-lg font-medium uppercase">
              {result.party_abbreviation}
            </h3>

            <div className="flex items-center gap-5 xs:gap-2 xs:flex-col">
              <div className="flex-1 xs:w-full">
                <div
                  style={{ width: `${percentage}%` }}
                  className="h-8 bg-primary"
                ></div>
              </div>

              <p className="xs:text-sm text-textcolor">
                {formatNmber(result.party_score)}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PUResult;

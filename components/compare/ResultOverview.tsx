import { LGAResult, PUResult } from "@/types";
import PUResultGraph from "../PUResultGraph";
import { formatNmber } from "@/utils";

function ResultOverview({
  puResults,
  lgaResults,
  parties,
}: {
  puResults: PUResult[][];
  lgaResults: LGAResult[];
  parties: string[];
}) {
  const fullResults = puResults.flatMap((v) => v.flatMap((t) => t));
  let scores: {
    label: string;
    result: number;
  }[] = [];

  parties.forEach((val) =>
    scores.push({
      label: val,
      result: fullResults
        .filter((result) => result.party_abbreviation === val)
        .reduce((a, b) => a + b.party_score, 0),
    })
  );

  const inconsistencies: {
    party: string;
    lgaScore: number;
    puScore: number;
  }[] = [];

  parties.forEach((party) => {
    const lgaScore =
      lgaResults.filter((val) => val.party_abbreviation === party)[0]
        ?.party_score ?? 0;
    const puScore = scores.filter((val) => val.label === party)[0]?.result ?? 0;

    if (lgaScore === puScore) return;

    inconsistencies.push({ lgaScore, party, puScore });
  });

  return (
    <div className="py-5">
      <div className="flex items-center gap-10 sm:flex-col">
        <div className="flex-1 sm:w-full">
          <span className="xs:text-sm font-medium">Polling Unit Result</span>

          <PUResultGraph results={scores} />
        </div>

        <hr className="w-60 xs:w-32 md:border-l" />

        <div className="flex-1 sm:w-full">
          <span className="xs:text-sm font-medium">LGA Result</span>

          <PUResultGraph
            results={lgaResults.map((val) => ({
              label: val.party_abbreviation,
              result: val.party_score,
            }))}
          />
        </div>
      </div>

      <div className="space-y-5">
        <h3 className="text-primary text-lg xs:text-base font-medium">
          Inconsistencies
        </h3>

        <div className="space-y-2">
          {inconsistencies.map((val, ind) => (
            <div key={ind} className="space-y-1">
              <h4 className="xs:text-sm font-medium">{val.party}</h4>

              <div className="flex items-center gap-5">
                <span className="xs:text-sm text-textcolor">
                  LGA: {formatNmber(val.lgaScore)}
                </span>
                <span className="xs:text-sm text-textcolor">
                  P. Unit: {formatNmber(val.puScore)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResultOverview;

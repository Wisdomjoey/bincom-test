import { APIResponse, PUResult } from "@/types";

export const fetchTotalPollResults = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/total-pu-results`
    );

    if (!res.ok) return { error: "Failed to fetch data" };

    const data: APIResponse = await res.json();

    return {
      data: data.data as { party: string; result: number }[],
      success: "Successfully fetched data",
    };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};

export const fetchPollResult = async (uniqueid: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/pu-result`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uniqueid }),
      }
    );

    if (!res.ok) return { error: "Failed to fetch data" };

    const data: APIResponse = await res.json();

    return {
      data: data.data as PUResult[],
      success: "Successfully fetched data",
    };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};

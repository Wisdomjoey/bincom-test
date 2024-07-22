import { APIResponse, LGAResult, PUResult } from "@/types";

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

export const fetchLGAResult = async (lga_id: number) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/lga-result`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lga_id }),
    });

    if (!res.ok) return { error: "Failed to fetch data" };

    const data: APIResponse = await res.json();

    return {
      data: data.data as LGAResult[],
      success: "Successfully fetched data",
    };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};

export const fetchLGAPUResults = async (lga_id: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/lga-pu-results`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ lga_id }),
      }
    );

    if (!res.ok) return { error: "Failed to fetch data" };

    const data: APIResponse = await res.json();

    return {
      data: data.data as PUResult[][],
      success: "Successfully fetched data",
    };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};

export const fetchPUResult = async (lga_id: number) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pu-result`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lga_id }),
    });

    if (!res.ok) return { error: "Failed to fetch data" };

    const data: APIResponse = await res.json();

    return {
      data: data.data as LGAResult[],
      success: "Successfully fetched data",
    };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};

export const fetchPollResult = async (uniqueid: number) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pu-result`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uniqueid }),
    });

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

export const uploadResult = async (
  form: FormData,
  parties: string[],
  id: number
) => {
  try {
    let results: any = [];

    parties.forEach((val) =>
      results.push({ party: val, score: parseInt(form.get(val) as string) })
    );

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/upload-result`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uniqueid: id,
          results,
          entered_by: form.get("registrar"),
        }),
      }
    );

    if (!res.ok) return { error: "Failed to upload results" };

    return {
      success: "Successfully uploaded results",
    };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};

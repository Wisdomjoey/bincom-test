import { APIResponse, PollingUnit } from "@/types";

export const fetchTotalPUs = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/total-polling-units`
    );

    if (!res.ok) return { error: "Failed to fetch data" };

    const data: APIResponse = await res.json();

    return {
      data: data.data as number,
      success: "Successfully fetched data",
    };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};

export const fetchWardPUs = async (ward_id: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/ward-polling-units`,
      {
        method: "POST",
        body: JSON.stringify({ ward_id }),
      }
    );

    if (!res.ok) return { error: "Failed to fetch data" };

    const data: APIResponse = await res.json();

    return {
      data: data.data as PollingUnit[],
      success: "Successfully fetched data",
    };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};

import { APIResponse, Ward } from "@/types";

export const fetchTotalWards = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/total-wards`);

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

export const fetchLGAWards = async (lga_id: number) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/lga-wards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lga_id }),
    });

    if (!res.ok) return { error: "Failed to fetch data" };

    const data: APIResponse = await res.json();

    return {
      data: data.data as Ward[],
      success: "Successfully fetched data",
    };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};

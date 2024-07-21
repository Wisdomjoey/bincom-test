import { APIResponse, LGA } from "@/types";

export const fetchTotalLGAs = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/total-lgas`);

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

export const fetchLGAs = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/lgas`);

    if (!res.ok) return { error: "Failed to fetch data" };

    const data: APIResponse = await res.json();

    return {
      data: data.data as LGA[],
      success: "Successfully fetched data",
    };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};

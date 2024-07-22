import { APIResponse, Party } from "@/types";

export const fetchParties = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/parties`);

    if (!res.ok) return { error: "Failed to fetch data" };

    const data: APIResponse = await res.json();

    return {
      data: data.data as Party[],
      success: "Successfully fetched data",
    };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};

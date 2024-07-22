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

export const fetchPUById = async (unit_id: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/polling-unit-id`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ unit_id }),
      }
    );

    if (!res.ok) return { error: "Failed to fetch data" };

    const data: APIResponse = await res.json();

    return {
      data: data.data as PollingUnit,
      success: "Successfully fetched data",
    };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};

export const fetchLGAPUs = async (lga_id: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/lga-polling-units`,
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
      data: data.data as PollingUnit[],
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
        headers: {
          "Content-Type": "application/json",
        },
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

export const createNewUnit = async (
  form: FormData,
  lga_id: number,
  ward_id: number
) => {
  try {
    const geo = new GeolocationCoordinates();
    const lat = geo.latitude;
    const long = geo.longitude;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/polling-unit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ward_id,
        lga_id,
        lat,
        long,
        name: form.get("name"),
        description: form.get("description"),
        entered_by: form.get("registrar"),
      }),
    });

    if (!res.ok) return { error: "Failed to create Polling Unit" };

    const data: APIResponse = await res.json();

    return {
      data: data.data as number,
      success: "Successfully created polling unit",
    };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};

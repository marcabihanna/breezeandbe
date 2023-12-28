import axios from "axios";

export const fetchData = async (URL) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/${URL}`
    );

    return {
      data: data.data,
      error: null,
    };
  } catch (error) {
    if (error?.response?.data?.error) {
      return {
        data: null,
        error: error?.response?.data?.error,
      };
    } else if (error?.message) {
      return {
        data: null,
        error: error?.message,
      };
    } else {
      return {
        data: null,
        error: error,
      };
    }
  }
};

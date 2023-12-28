import axios from "axios";

export const postData = async (URL, BODY) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/${URL}`,
      BODY
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

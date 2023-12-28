export const IsImage = (url) => {
  const extension = url.split(".").pop();
  return ["jpg", "png", "jpeg", "gif", "bmp"].includes(extension.toLowerCase());
};

export const imageUpload = async (imageFile: File): Promise<string | null> => {
  const apiKey = import.meta.env.VITE_IMGBB_API_KEY;

  if (!apiKey) {
    console.log("api key not found");
    return null;
  }

  const formData = new FormData();
  formData.append("image", imageFile);

  try {
    const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
      method: "POST",
      body: formData,
    });

    const result = await res.json();

    if (result.success) {
      return result.data.url;
    } else {
      console.log("Image upload failed", result);
      return null;
    }
  } catch (error) {
    console.log("Error uploading image", error);
    return null;
  }
};

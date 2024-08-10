import * as Yup from "yup";

export const postValidationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string()
    .min(10, "Description should be at least 10 characters")
    .required("Description is required"),
  imagesForHomePage: Yup.mixed()
    .required("A file is required")
    .test(
      "fileSize",
      "File size is too large",
      (value) => value && value.size <= 2 * 1024 * 1024
    ) // 2MB
    .test(
      "fileFormat",
      "Unsupported Format",
      (value) =>
        value && ["image/jpg", "image/jpeg", "image/png"].includes(value.type)
    ),
});

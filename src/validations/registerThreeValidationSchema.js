import * as Yup from "yup";

export const registerThreeValidationSchema = Yup.object({
  isPartOfCommunity: Yup.string().required("This field is required"),
  communityName: Yup.string().when("isPartOfCommunity", {
    is: "yes",
    then: Yup.string().required("Community name is required"),
  }),
});

export const gender = [
  { label: "Male" },
  { label: "Female" },
  { label: "Others" },
];

export const education = [
  { label: "B.Tech" },
  { label: "B.Sc" },
  { label: "BBA" },
  { label: "BComm" },
  { label: "BEd" },
  { label: "BE" },
  { label: "LLB" },
  { label: "B Pharma" },
  { label: "M.B.B.S" },
];

export const profession = [
  { label: "Engineer" },
  { label: "Business" },
  { label: "Doctor" },
];

export const states = [
  { label: "Andhra Pradesh" },
  { label: "Arunachal Pradesh" },
  { label: "Assam" },
  { label: "Bihar" },
  { label: "Chhattisgarh" },
  { label: "Delhi [National Capital Territory (NCT)]" },
  { label: "Goa" },
  { label: "Gujarat" },
  { label: "Haryana" },
  { label: "Himachal Pradesh" },
  { label: "Jharkhand" },
  { label: "Karnataka" },
  { label: "Kerala" },
  { label: "Maharashtra" },
  { label: "Madhya Pradesh" },
  { label: "Manipur" },
  { label: "Meghalaya" },
  { label: "Mizoram" },
  { label: "Nagaland" },
  { label: "Odisha" },
  { label: "Punjab" },
  { label: "Rajasthan" },
  { label: "Sikkim" },
  { label: "Tamil Nadu" },
  { label: "Tripura" },
  { label: "Telangana" },
  { label: "Uttar Pradesh" },
  { label: "West Bengal" },
  { label: "Andaman & Nicobar (UT)" },
  { label: "Chandigarh (UT)" },
  { label: "Dadra & Nagar Haveli and Daman & Diu (UT)" },
  { label: "Jammu & Kashmir (UT)" },
  { label: "Ladakh (UT)" },
  { label: "Lakshadweep (UT)" },
  { label: "Puducherry (UT)" },
];

export const country = [{ label: "India" }, { label: "NRI" }];

export const childGender = [
  { label: "Male" },
  { label: "Female" },
  { label: "Others" },
];

export const initialState = {
  firstName: "",
  middleName: "",
  lastName: "",
  dob: "",
  mobileNumber: "",
  email: "",
  gender: "",
  profession: "",
  education: "",
  address: "",
  address2: "",
  pincode: "",
  state: "",
  country: "",
  fatherName: "",
  motherName: "",
  spouseName: "",
  spouseAge: "",
  spouseGender: "",
  spouseProfession: "",
  spouseEducation: "",
  nativeAddress: "",
  noOfChildren: "",
  nameOfChild: "",
  ageOfChild: "",
  childGender: "",
  aadharNumber: "",
  voterId: "",
  introduction: "",
  description: "",
  presentOccupation: "",
  referenceOne: "",
  referenceTwo: "",
  membershipType: "",
};

export const addressType = [
  { label: "Office " },
  { label: "Permanent" },
  { label: "Current" },
];

export const category = [
  { label: "Telega " },
  { label: "Balija" },
  { label: "Kapu" },
];

export const registrationData = {
  userId: "user0013",
  profilePic: "https://example.com/profilepic.jpg",
  fullName: "John Doe",
  dateOfBirth: "1985-05-15T06:58:07.967Z",
  gender: "Male",
  category: "Professional",
  address: [
    {
      addressId: 1,
      addressLine1: "123 Elm Street",
      addressLine2: "Apt 4B",
      country: "USA",
      state: "CA",
      city: "Los Angeles",
      postalCode: "90001",
      creationDate: "2024-08-06T06:58:07.967Z",
      lastModifiedDate: "2024-08-06T06:58:07.967Z",
      defaultAddress: true,
      addressType: "Home",
    },
  ],
  emailAddress: "rmonshu00@gmail.com",
  phoneNumber: "9898989008",
  education: "Bachelor's Degree in Computer Science",
  profession: "Software Engineer",
  familyDetails: {
    fatherName: "Richard Doe",
    motherName: "Emily Doe",
    spouseName: "Jane Doe",
    spouseOccupation: "Graphic Designer",
    childern: [
      {
        name: "Alice Doe",
        education: "High School",
        profession: "Student",
        isMarried: "No",
        childAge: "16",
      },
    ],
    married: true,
  },
  aadharCard: "1234-5678-9101",
  voterIdCard: "VOTER-123456",
  occupation: "Software Engineer",
  brieflyTellAboutYourself:
    "I am a dedicated software engineer with over 10 years of experience in the tech industry. I am passionate about coding and problem-solving.",
  reasonToJoinAITBKS:
    "I am interested in joining AITBKS to connect with like-minded professionals and contribute to the community's growth.",
  reference1: "Dr. Alan Smith",
  reference2: "Ms. Laura Brown",
  categoryOfMembership: "Gold",
  requestForMembershipApplicationFromDeclaration: true,
  password: "securepassword123",
  confrimPassowrd: "securepassword123",
  createdDate: "2024-08-06T06:58:07.967Z",
  lastModifiedDate: "2024-08-06T06:58:07.967Z",
  nativePlace: "San Francisco, CA",
  status: "Pending",
  paymentInfo: {
    trasactionId: "TXN123456789",
    amountPaid: "100.00",
    transactionDate: "2024-08-06",
    paymentDetailDocument: "https://example.com/paymentdetails.pdf",
  },
  applicantChoosenMembership: "Gold",
  committeeChoosenMembershipForApplicant: "",
  presidentChoosenMembershipForApplicant: "",
  presidentRemarksForApplicant: "",
  committeeRemarksForApplicant: "",
  applicationForMembershipDeclaration: true,
  memberOfOtherCommunity: true,
};

import React, { useState, useEffect } from "react";form
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

import SectionA from "./formsections/SectionA";
import SectionB from "./formsections/SectionB";
import SectionC from "./formsections/SectionC";
import SectionD from "./formsections/SectionD";

// ==================== VALIDATION SCHEMA ====================
const schema = yup.object().shape({
  // SECTION A
  gender: yup.string().required("Gender is required"),
  age_group: yup.string().required("Age group is required"),
  marital_status: yup.string().required("Marital status is required"),

  household_size: yup
    .number()
    .typeError("Household size must be a number")
    .positive()
    .integer()
    .required("Household size is required"),

  main_occupation: yup
    .string()
    .required("Main occupation is required"),

  // SECTION B
  weekly_purchase_kg: yup
    .number()
    .typeError("Weekly purchase quantity must be a number")
    .positive()
    .required("Weekly purchase quantity is required"),

  avg_purchase_price: yup
    .number()
    .typeError("Average purchase price must be a number")
    .positive()
    .required("Average purchase price is required"),

  avg_selling_price: yup
    .number()
    .nullable(),

  weekly_sales_kg: yup
    .number()
    .nullable(),

  weekly_revenue: yup
    .number()
    .nullable(),

  // SECTION C
  experience_spoilage: yup.boolean(),

  // SECTION D
  major_challenges: yup.string(),
  measures_to_reduce: yup.string(),
  other_comments: yup.string(),
});

// ==================== STEPS ====================
const steps = [
  { id: 1, title: "Consent & Section A: Socio-Economic" },
  { id: 2, title: "Section B: Costs & Returns" },
  { id: 3, title: "Section C: Spoilage & Storage" },
  { id: 4, title: "Section D: Open Questions" },
];
const stepFields = {
  // Section A
  0: [
    "gender",
    "age_group",
    "marital_status",
    "household_size",
    "main_occupation",
  ],

  // Section B
  1: [
    "weekly_purchase_kg",
    "avg_purchase_price",
  ],

  // Section C
  2: [
    "experience_spoilage",
  ],

  // Section D
  3: [],
};

const SurveyWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    console.log("Rendering step:", currentStep);
  }, [currentStep]);

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
    //SectionA
      gender: "",
      member_of_group: false,
      age_group: "",
      marital_status: "",
      household_size:undefined,
      main_occupation: "",
      other_occupation: "",
      group_name: "",
      access_to_credit: false,
      credit_source: "",
      years_schooling: "",
      education_level: "",
      years_in_onion_retailing: "",
      business_nature: "",
    // SectionB
      onion_source: "",
      major_customers: "",
      weekly_purchase_kg: undefined,
      avg_purchase_price: undefined,
      avg_selling_price: undefined,
      weekly_sales_kg: undefined,
      weekly_revenue: undefined,
      weekly_transport_cost: undefined,
      stall_rent: 0,
      market_dues: 0,
      packaging_materials: 0,
      loading_offloading: 0,
      casual_labour: 0,
      storage_expenses: 0,
      other_cost_description: "",
      other_cost_amount: 0,
      profitability_opinion: "",
    // SectionC
      experience_spoilage: false,
      weekly_spoilage_kg: undefined,
      spoilage_percentage:undefined,
      money_loss_spoilage:undefined,
      spoilage_stage: "",
      causes_spoilage: [],
      storage_facility: false,
      storage_type: "",
      onions_stay_duration: undefined,
      received_training: false,
      spoilage_effects: [],
      strategies: [],
      storage_type_other: "",
      other_strategy: "",
    // SectionD
      major_challenges: "",
      measures_to_reduce: "",
      other_comments: "",
    },
    mode: "onChange",
  });

  const startNewRecord = () => {
    methods.reset();
    setCurrentStep(0);
    setSubmitted(false);
};

  const {
    handleSubmit,
    trigger,
    formState: { errors },
  } = methods;

  const nextStep = async () => {

    if (isTransitioning) return;

    setIsTransitioning(true);

    const isValid = await trigger(stepFields[currentStep]);

    if (isValid) {
      setCurrentStep((prev) => prev + 1);
    }

    setIsTransitioning(false);
  };

  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const onSubmit = async (data) => {

    console.log("onSubmit called");
    console.log(data);

    const confirmed = window.confirm(
      "Are you sure you want to submit this survey?"
    );

  if (!confirmed) return;

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      await axios.post(
        "http://127.0.0.1:8000/api/add/",
        data
      );

      setSubmitted(true);

    } catch (err) {
      console.error(err);
      alert("Submission failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center p-20">
        <h2>Thank You!</h2>
        <p>Your survey response was recorded.</p>
        <div className="flex p-10 gap-5">
            <button className="bg-green-600 border rounded text-white font-bold p-1 hover:bg-green-800 cursor-pointer" onClick={startNewRecord}>New record</button>
            <button className="bg-blue-600 border rounded text-white font-bold p-1">View Records</button>
        </div>
      </div>
    );
  }

  return (
    <FormProvider {...methods}>
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "20px",
          fontFamily: "Arial",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Nakasero Onion Retailers Survey</h1>
        <p>
          <strong>Emily Mwagale - Makerere University</strong>
        </p>

        {/* Progress Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "30px",
          }}
        >
          {steps.map((step, index) => (
            <div
              key={step.id}
              style={{
                padding: "10px",
                background: index <= currentStep ? "#28a745" : "#ddd",
                color: index <= currentStep ? "white" : "black",
                borderRadius: "5px",
                flex: 1,
                textAlign: "center",
                margin: "0 5px",
              }}
            >
              {step.title}
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Native form submit");
            handleSubmit(onSubmit)(e);
          }}
        >
          {/* STEP 1: Socio-Economic */}
          {currentStep === 0 && <SectionA methods={methods} />}

          {/* STEP 2: Costs & Returns */}
          {currentStep === 1 && <SectionB methods={methods} />}

          {/* STEP 3: Spoilage */}
          {currentStep === 2 && <SectionC methods={methods} />}

          {/* STEP 4: Open Questions */}
          {currentStep === 3 && <SectionD methods={methods} />}

          <div
            style={{
              marginTop: "30px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {currentStep > 0 && (
              <button type="button" onClick={prevStep} className="bg-blue-600 border rounded text-white font-bold p-1 hover:bg-blue-800 cursor-pointer">
                Previous
              </button>
            )}

            {currentStep < steps.length -1  ? (
              <button
                type="button"
                onClick={nextStep}
                disabled={isTransitioning}
                className={`px-4 py-2 rounded text-white font-bold

                ${
                  isTransitioning
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
                }`}
            >
                Next
            </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 rounded-lg font-semibold transition

                ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700 text-white"
                }`}
              >
                {isSubmitting ? "Saving..." : "Submit Survey"}
              </button>
            )}
          </div>
        </form>
      </div>
    </FormProvider>
  );
};

export default SurveyWizard;

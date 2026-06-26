import React from "react";
import { useFormContext } from "react-hook-form";

const inputClass =
  "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none";

const labelClass =
  "block text-sm font-medium text-gray-700 mb-2";

export default function SectionC() {
  const { register, watch, formState: { errors } } = useFormContext();

  const experienceSpoilage = watch("experience_spoilage");
  const storageFacility = watch("storage_facility");
  const storageType = watch("storage_type");
  const strategiesSelected = watch("strategies") || [];

  const causes = [
    "Poor storage conditions",
    "High temperatures",
    "Excess moisture",
    "Mechanical damage during transport",
    "Overstocking",
    "Poor packaging",
    "Delayed sales",
    "Poor ventilation",
  ];

  const effects = [
    "Reduces profits",
    "Forces sale at lower prices",
    "Reduces working capital",
    "Causes unstable income",
    "Increases business risk",
    "Reduces ability to restock",
  ];

  const strategies = [
    "Buying smaller quantities",
    "Regular sorting of onions",
    "Improved storage practices",
    "Faster selling/discounting",
    "Better packaging",
    "Improved ventilation",
    "Other",
  ];

  return (
    <div className="bg-white shadow-lg rounded-xl p-8 space-y-8">
      {/* Header */}
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-800">
          Section C: Level of Onion Spoilage and Factors Influencing Spoilage
        </h2>
        <p className="text-gray-500 mt-1">
          Please provide information regarding spoilage and storage practices.
        </p>
      </div>

      {/* Q24 */}
      <div className="bg-gray-50 p-5 rounded-lg">
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            className="h-5 w-5"
            {...register("experience_spoilage")}
          />
          <span className="font-medium">
            Do you experience onion spoilage in your business?
          </span>
        </label>
      </div>

      {/* Conditional Spoilage Questions */}
      {experienceSpoilage && (
        <>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Q25 */}
            <div>
              <label className={labelClass}>
                Average quantity spoiled per week (kg)
              </label>
              <input
                type="number"
                className={inputClass}
                {...register("weekly_spoilage_kg", {
                  valueAsNumber: true,
                })}
              />
              {errors.weekly_spoilage_kg && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.weekly_spoilage_kg.message}
                </p>
              )}
            </div>

            {/* Q26 */}
            <div>
              <label className={labelClass}>
                Percentage of onions spoiled before sale
              </label>
              <select
                {...register("spoilage_percentage")}
                className={inputClass}
              >
                <option value="">Select</option>
                <option value="Less than 5%">
                  Less than 5%
                </option>
                <option value="5–10%">
                  5–10%
                </option>
                <option value="11–20%">
                  11–20%
                </option>
                <option value="21–30%">
                  21–30%
                </option>
                <option value="Above 30%">
                  Above 30%
                </option>
              </select>
            </div>

            {/* Q27 */}
            <div>
              <label className={labelClass}>
                Money lost due to spoilage (UGX)
              </label>
              <input
                type="number"
                className={inputClass}
                {...register("money_loss_spoilage", {
                  valueAsNumber: true,
                })}
              />
            </div>

            {/* Q28 */}
            <div>
              <label className={labelClass}>
                Stage where spoilage mostly occurs
              </label>
              <select
                {...register("spoilage_stage")}
                className={inputClass}
              >
                <option value="">Select</option>
                <option value="Transportation">
                  Transportation
                </option>
                <option value="Storage">
                  Storage
                </option>
                <option value="Display at stall">
                  Display at Stall
                </option>
                <option value="Handling by customers">
                  Handling by Customers
                </option>
              </select>
            </div>
          </div>

          {/* Q29 */}
          <div>
            <label className={labelClass}>
              Common Causes of Onion Spoilage
            </label>

            <div className="grid md:grid-cols-2 gap-3">
              {causes.map((cause) => (
                <label
                  key={cause}
                  className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg"
                >
                  <input
                    type="checkbox"
                    value={cause}
                    {...register("causes_spoilage")}
                  />
                  <span>{cause}</span>
                </label>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Q30 */}
      <div className="bg-gray-50 p-5 rounded-lg">
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            className="h-5 w-5"
            {...register("storage_facility")}
          />
          <span className="font-medium">
            Do you have a storage facility for onions?
          </span>
        </label>

        {storageFacility && (
          <div className="mt-4">
            <label className={labelClass}>
              Type of Storage Facility
            </label>

            <select
              {...register("storage_type")}
              className={inputClass}
            >
              <option value="">Select</option>
              <option value="Permanent store">
                Permanent Store
              </option>
              <option value="Wooden shelves">
                Wooden Shelves
              </option>
              <option value="Open stall">
                Open Stall
              </option>
              <option value="Rented storage room">
                Rented Storage Room
              </option>
              <option value="Other">
                Other
              </option>
            </select>

            {storageType === "Other" && (
              <input
                type="text"
                className={`${inputClass} mt-3`}
                placeholder="Specify storage type"
                {...register("storage_type_other")}
              />
            )}
          </div>
        )}
      </div>

      {/* Q32 */}
      <div>
        <label className={labelClass}>
          How long do onions stay before being sold?
        </label>

        <select
          {...register("onions_stay_duration")}
          className={inputClass}
        >
          <option value="">Select</option>
          <option value="Less than 3 days">
            Less than 3 days
          </option>
          <option value="4–7 days">
            4–7 days
          </option>
          <option value="1–2 weeks">
            1–2 weeks
          </option>
          <option value="More than 2 weeks">
            More than 2 weeks
          </option>
        </select>
      </div>

      {/* Q33 */}
      <div className="bg-gray-50 p-5 rounded-lg">
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            className="h-5 w-5"
            {...register("received_training")}
          />
          <span className="font-medium">
            Have you received training on onion handling and storage?
          </span>
        </label>
      </div>

      {/* Q34 */}
      <div>
        <label className={labelClass}>
          How does spoilage affect your business?
        </label>

        <div className="grid md:grid-cols-2 gap-3">
          {effects.map((effect) => (
            <label
              key={effect}
              className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg"
            >
              <input
                type="checkbox"
                value={effect}
                {...register("spoilage_effects")}
              />
              <span>{effect}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Q35 */}
      <div>
        <label className={labelClass}>
          Strategies Used to Reduce Onion Spoilage
        </label>

        <div className="grid md:grid-cols-2 gap-3">
          {strategies.map((strategy) => (
            <label
              key={strategy}
              className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg"
            >
              <input
                type="checkbox"
                value={strategy}
                {...register("strategies")}
              />
              <span>{strategy}</span>
            </label>
          ))}
        </div>

        {strategiesSelected.includes("Other") && (
          <div className="mt-4">
            <input
              type="text"
              className={inputClass}
              placeholder="Specify other strategy"
              {...register("other_strategy")}
            />
          </div>
        )}
      </div>
    </div>
  );
}
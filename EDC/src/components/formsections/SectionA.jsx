// import React from 'react';
// import { useFormContext } from 'react-hook-form';

// const SectionA = () => {
//   const { register, formState: { errors } } = useFormContext();

//   return (
//     <div>
//       <h2>Section A: Socio-Economic Characteristics</h2>
      
//       <label>Gender:</label>
//       <select {...register('gender')}>
//         <option value="">Select</option>
//         <option value="Male">Male</option>
//         <option value="Female">Female</option>
//       </select>
//       {errors.gender && <p>{errors.gender.message}</p>}

//       {/* Repeat for age_group, marital_status, etc. */}
//       {/* For checkboxes: */}
//       <input type="checkbox" {...register('member_of_group')} /> Member of traders group?
      
//       {/* Text inputs, number inputs similarly */}
//     </div>
//   );
// };

// export default SectionA;


import React from "react";
import { useFormContext } from "react-hook-form";

const inputClass =
  "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none";

const labelClass =
  "block text-sm font-medium text-gray-700 mb-1";

const errorClass =
  "text-red-500 text-sm mt-1";

export default function SectionA() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const memberOfGroup = watch("member_of_group");
  const accessToCredit = watch("access_to_credit");

  return (
    <div className="bg-white shadow-lg rounded-xl p-8 space-y-8">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-800">
          Section A: Socio-Economic Characteristics
        </h2>
        <p className="text-gray-500 mt-1">
          Please provide information about yourself and your business.
        </p>
      </div>

      {/* Gender */}
      <div>
        <label className={labelClass}>Gender *</label>
        <select {...register("gender")} className={inputClass}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        {errors.gender && (
          <p className={errorClass}>{errors.gender.message}</p>
        )}
      </div>

      {/* Age Group */}
      <div>
        <label className={labelClass}>Age Group *</label>
        <select {...register("age_group")} className={inputClass}>
          <option value="">Select Age Group</option>
          <option value="Below 25">Below 25 years</option>
          <option value="25-34">25–34 years</option>
          <option value="35-44">35–44 years</option>
          <option value="45-54">45–54 years</option>
          <option value="Above 54">Above 54 years</option>
        </select>
        {errors.age_group && (
          <p className={errorClass}>{errors.age_group.message}</p>
        )}
      </div>

      {/* Marital Status */}
      <div>
        <label className={labelClass}>Marital Status *</label>
        <select {...register("marital_status")} className={inputClass}>
          <option value="">Select Marital Status</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Divorced/Separated">
            Divorced/Separated
          </option>
          <option value="Widowed">Widowed</option>
        </select>
        {errors.marital_status && (
          <p className={errorClass}>
            {errors.marital_status.message}
          </p>
        )}
      </div>

      {/* Household Size */}
      <div>
        <label className={labelClass}>Household Size *</label>
        <input
          type="number"
          className={inputClass}
          {...register("household_size", {
            valueAsNumber: true,
          })}
          placeholder="Number of people"
        />
        {errors.household_size && (
          <p className={errorClass}>
            {errors.household_size.message}
          </p>
        )}
      </div>

      {/* Main Occupation */}
      <div>
        <label className={labelClass}>Main Occupation *</label>
        <select {...register("main_occupation")} className={inputClass}>
          <option value="">Select Occupation</option>
          <option value="Onion retailing">Onion retailing</option>
          <option value="General produce trading">
            General produce trading
          </option>
          <option value="Farming">Farming</option>
          <option value="Salaried employment">
            Salaried employment
          </option>
          <option value="Other">Other</option>
        </select>
        {errors.main_occupation && (
          <p className={errorClass}>
            {errors.main_occupation.message}
          </p>
        )}
      </div>

      {/* Traders Group */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            {...register("member_of_group")}
            className="h-5 w-5"
          />
          <span>Member of Traders Group / Association?</span>
        </label>

        {memberOfGroup && (
          <div className="mt-4">
            <label className={labelClass}>
              Group Name
            </label>
            <input
              type="text"
              className={inputClass}
              {...register("group_name")}
            />
          </div>
        )}
      </div>

      {/* Credit Access */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            {...register("access_to_credit")}
            className="h-5 w-5"
          />
          <span>Access to Credit?</span>
        </label>

        {accessToCredit && (
          <div className="mt-4">
            <label className={labelClass}>
              Main Source of Credit
            </label>
            <select
              {...register("credit_source")}
              className={inputClass}
            >
              <option value="">Select Source</option>
              <option value="SACCO">SACCO</option>
              <option value="Commercial Bank">
                Commercial Bank
              </option>
              <option value="Microfinance">
                Microfinance Institution
              </option>
              <option value="Friends/Relatives">
                Friends / Relatives
              </option>
              <option value="Traders Association">
                Traders Association
              </option>
              <option value="Money Lender">
                Money Lender
              </option>
            </select>
          </div>
        )}
      </div>

      {/* Education & Experience */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>
            Years of Formal Schooling
          </label>
          <input
            type="number"
            className={inputClass}
            {...register("years_schooling", {
              valueAsNumber: true,
            })}
          />
        </div>

        <div>
          <label className={labelClass}>
            Years in Onion Retailing
          </label>
          <input
            type="number"
            className={inputClass}
            {...register("years_in_onion_retailing", {
              valueAsNumber: true,
            })}
          />
        </div>
      </div>
    </div>
  );
}
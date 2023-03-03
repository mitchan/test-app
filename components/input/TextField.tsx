"use client";

import React from "react";

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function TextField(props: TextFieldProps) {
  const { id, label, placeholder, type } = props;

  return (
    <div className="w-full">
      <label htmlFor={id} className="block mb-2 text-sm font-medium">
        {label}
      </label>
      <input
        type={type ?? "text"}
        id={id}
        value={props.value}
        className="w-full border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder ?? ""}
        required={props.required}
        onChange={(e) => {
          props.onChange?.(e);
        }}
      />
    </div>
  );
}

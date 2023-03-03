"use client";

import React from "react";
import { TextField } from "./input/TextField";

export function SigninForm() {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ form });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-1/3 border border-black p-2 rounded-md"
    >
      <div className="flex flex-col gap-2">
        <TextField
          id="email"
          value={form.email}
          onChange={(e) => {
            setForm((oldForm) => ({
              ...oldForm,
              email: e.target.value,
            }));
          }}
          label="Email"
          placeholder="Email"
        />
        <TextField
          id="password"
          value={form.password}
          onChange={(e) => {
            setForm((oldForm) => ({
              ...oldForm,
              password: e.target.value,
            }));
          }}
          label="Password"
          placeholder="Password"
          type="password"
        />

        <button type="submit">submit</button>
      </div>
    </form>
  );
}

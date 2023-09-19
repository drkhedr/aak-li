"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitButton({ className, value, submitValue }) {
  const { pending } = useFormStatus();

  return (
    <input
      type="submit"
      value={pending ? submitValue : value}
      className={`${className}`}
      disabled={pending}
    />
  );
}

"use client"; // Required for client-side state management

import { createContext, useContext, useState } from "react";

// Create Context
const FormContext = createContext();

// Context Provider Component
export const FormProvider = ({ children }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <FormContext.Provider value={{ isFormOpen, setIsFormOpen }}>
      {children}
    </FormContext.Provider>
  );
};

// Custom Hook to Use Context
export const useForm = () => {
  return useContext(FormContext);
};

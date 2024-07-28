import React, { useState, ChangeEvent } from "react";
import { useDebounce } from "../Customehooks/useDebounce"; // Import the debounce hook

interface USform {
  name: string;
  number: number;
  email: string;
}

const defaultFormValues: USform = {
  name: '',
  number: 0,
  email: ''
}

export function UserForm() {
  const [form, setForm] = useState<USform>(defaultFormValues);
  const [debouncedForm, setDebouncedForm] = useState<USform>(defaultFormValues);

  const debouncedValue = useDebounce(form, 300); // Debounce delay of 300ms

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: name === 'number' ? parseInt(value) : value,
    }));
  };

  // Sync debouncedForm with debouncedValue
  React.useEffect(() => {
    setDebouncedForm(debouncedValue);
  }, [debouncedValue]);

  console.log(debouncedForm);
  
  return (
    <div>
      <h1>User Form</h1>
      <input 
        type="text" 
        name="name" 
        value={form.name} 
        onChange={handleChange} 
        placeholder="Name"
      />
      <br />
      <input 
        type="number" 
        name="number" 
        value={form.number} 
        onChange={handleChange} 
        placeholder="Number"
      />
      <br />
      <input 
        type="email" 
        name="email" 
        value={form.email} 
        onChange={handleChange} 
        placeholder="Email"
      />
    </div>
  );
}

// REACT
import { Dispatch, SetStateAction } from 'react';
//
import { ChangeHandle, } from "#2_types/typages.tsx";
//
//
//
//
//
// AJOUTE ELEMENT CONTENU DANS formData
export const handleChange = ({
    fieldName, 
    newValue,
    idValue, 
    setFormData,
}: ChangeHandle) => {
    setFormData((prevState: {[key: string]: string }) => {
      return { ...prevState, [fieldName]: newValue, ...(idValue ? { ["idValue"]: idValue } : {}) };
    });
  }; 
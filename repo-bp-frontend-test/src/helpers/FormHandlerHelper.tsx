import { Dispatch, SetStateAction } from 'react';
import moment from 'moment';

import { FormValues, Product } from '../Types/types';

export type FormErrors = {
  id?: string;
  productName?: string;
  description?: string;
  logo?: string;
  date_release?: string;
  date_revision?: string;
};

export const initForm = {
  id: '',
  productName: '',
  description: '',
  logo: '',
  date_release: moment().format('YYYY-MM-DD'),
  date_revision: moment().add(1, 'year').format('YYYY-MM-DD'),
}

export const initErrors = {
  id: '',
  productName: '',
  description: '',
  logo: '',
  date_release: '',
  date_revision: '',
}

const getCurrentDate = (): string => {
  const currentDate = moment().format('YYYY-MM-DD');
  return currentDate;
};

const getOneYearLater = (date: string): string => {
  const releaseDate = moment(date);
  const reviewDate = releaseDate.add(1, 'year');
  return reviewDate.format('YYYY-MM-DD');
};

export const validateInput = async (
  fieldName: keyof FormValues, 
  value: string | File | null, 
  formValues: FormValues, 
  setFormErrors: Dispatch<SetStateAction<FormErrors>>,
  formErrors: FormErrors,
  setIsError: Dispatch<SetStateAction<boolean>>
) => {
  let errorMessage = '';
  let errorCount = 0; // Contador de errores
  let isAllFieldsFilled = true; // Mantener el estado de allFieldsFilled

  if (fieldName === 'id') {
    if (!value) {
      errorMessage = 'El campo es requerido';
      errorCount++;
    } else if (typeof value === 'string' && (value.length < 3 || value.length > 10)) {
      errorMessage = 'El campo debe tener entre 3 y 10 caracteres';
      errorCount++;
    }
  } else if (fieldName === 'productName') {
    if (!value) {
      errorMessage = 'El campo es requerido';
      errorCount++;
    } else if(typeof value === 'string' && (value.length < 5 || value.length > 100)) {
      errorMessage = 'El campo debe tener entre 5 y 100 caracteres';
      errorCount++;
    }
  } else if (fieldName === 'description') {
    if (!value) {
      errorMessage = 'El campo es requerido';
      errorCount++;
    } else if (typeof value === 'string' && (value.length < 10 || value.length > 200)) {
      errorMessage = 'El campo debe tener entre 10 y 200 caracteres';
      errorCount++;
    }
  } else if (fieldName === 'logo') {
    if (!value) {
      errorMessage = 'El campo es requerido';
      errorCount++;
    }
    else if (typeof value === 'string') {
      // Utilizar una expresión regular para verificar si es una URL válida
      const urlPattern = /^(https?:\/\/)?([\w.]+)\.([a-z]{2,6})([/\w .-]*)*\/?$/;
      if (!urlPattern.test(value)) {
        errorMessage = 'El campo debe ser una URL válida';
        errorCount++;
      }}
  } else if (fieldName === 'date_release') {
    if (!value) {
      errorMessage = 'El campo es requerido';
      errorCount++;
    } else if (value < getCurrentDate()) {
      errorMessage = 'La fecha debe ser igual o mayor a la fecha actual';
      errorCount++;
    }
  } else if (fieldName === 'date_revision') {
    if (!value) {
      errorMessage = 'El campo es requerido';
      errorCount++;
    } else if (value !== getOneYearLater(formValues.date_revision)) {
      errorMessage = 'La fecha debe ser exactamente un año posterior a la fecha de liberación';
      errorCount++;
    }
  }

  setFormErrors({ ...formErrors, [fieldName]: errorMessage });

  // Comprobar si no hay errores y todos los campos están llenos
  setIsError(errorCount > 0 || !isAllFieldsFilled);
};

export const createUpdatedFormValues = ( formValues: typeof initForm, productToUpdate: Product ) => {
  return {
    ...formValues,
    id: productToUpdate.id,
    productName: productToUpdate.name,
    description: productToUpdate.description,
    logo: productToUpdate.logo,
    date_release: moment(productToUpdate.date_release).format('YYYY-MM-DD'),
    date_revision: moment(productToUpdate.date_revision).format('YYYY-MM-DD'),
  };
};

export const validateFormByClick = ( fieldName : string  , value : string  ) => {
  let errorMessage = '';
  let errorCount = 0;

  if (fieldName === 'id') {
    if (!value) {
      errorMessage = 'El campo es requerido';
      errorCount++;
      return  {fieldName , errorMessage}
    } else if (typeof value === 'string' && (value.length < 3 || value.length > 10)) {
      errorMessage = 'El campo debe tener entre 3 y 10 caracteres';
      errorCount++;
    }     
  } else if (fieldName === 'productName') {
    if (!value) {
      errorMessage = 'El campo es requerido';
      errorCount++;
      return {fieldName , errorMessage}
    } else if(typeof value === 'string' && (value.length < 5 || value.length > 100)) {
      errorMessage = 'El campo debe tener entre 5 y 100 caracteres';
      errorCount++;
      return  {fieldName , errorMessage}
    }
  } else if (fieldName === 'description') {
    if (!value) {
      errorMessage = 'El campo es requerido';
      errorCount++;
      return  {fieldName , errorMessage}
    } else if (typeof value === 'string' && (value.length < 10 || value.length > 200)) {
      errorMessage = 'El campo debe tener entre 10 y 200 caracteres';
      errorCount++;
      return  {fieldName , errorMessage}
    }
  } else if (fieldName === 'logo') {
    if (!value) {
      errorMessage = 'El campo es requerido';
      errorCount++;
      return  {fieldName , errorMessage}
    }
  }
};

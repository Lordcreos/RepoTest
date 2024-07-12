import { useState, Dispatch, SetStateAction, FC, useEffect } from "react";
import moment from "moment";
import {
  FormErrors,
  createUpdatedFormValues,
  initErrors,
  initForm,
  validateInput,
  validateFormByClick,
} from "../../helpers/FormHandlerHelper";
import { FormValues, Product } from "../../Types/types";
import InputLabel from "../Inputs/inputLabel";
import { useProducts } from "../../Hooks/UseProducts";
import "./productForm.css";



interface Props {
  productToUpdate?: Product | null;
}

export const ProductForm: FC<Props> = ({ productToUpdate }) => {
  const { createProduct, updateProduct } = useProducts();
  const [formErrors, setFormErrors] = useState(initErrors);
  const [formValues, setFormValues] = useState(initForm);
  const [isError, setIsError] = useState(true);
  const { id, productName, description, logo, date_release, date_revision } =
    formValues;

  useEffect(() => {
    if (productToUpdate) {
      const updatedFormValues = createUpdatedFormValues(
        formValues,
        productToUpdate
      );
      setFormValues(updatedFormValues);
    }
    else {
      setFormValues(initForm);
      handleResetValues
    }
  }, [productToUpdate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "date_release") {
      setFormValues((prevState) => ({
        ...prevState,
        [name]: value,
        date_revision: moment(value).add(1, "year").format("YYYY-MM-DD"),
      }));
    } else {
      setFormValues((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
    validateInput(
      name as keyof FormValues,
      value,
      formValues,
      setFormErrors as Dispatch<SetStateAction<FormErrors>>,
      formErrors,
      setIsError as Dispatch<SetStateAction<boolean>>
    );
  };

  const handleResetValues = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedFormValues = productToUpdate
      ? createUpdatedFormValues(formValues, productToUpdate)
      : initForm;
    setFormValues(updatedFormValues);
    setFormErrors(initErrors);
  };



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validar todos los campos antes de enviar el formulario
    const fieldNames: Array<keyof FormValues> = [
      "id",
      "productName",
      "description",
      "logo",
    ];


    fieldNames.forEach((fieldName) => {
      const value = formValues[fieldName];
      const validateByclick = validateFormByClick(fieldName, value);
      if (validateByclick) {
        const {fieldName , errorMessage} = validateByclick
        setFormErrors((prevState) => ({
          ...prevState,
          [fieldName]: errorMessage,
        }));
      }


    });

    if (!isError) {
      if (productToUpdate) {
        updateProduct(formValues);
        
       
      } else {
        createProduct(formValues);
        
      }
    }
  };

  return (
    <section className="form">
      <form className="form-container">
        <InputLabel
          label="ID:"
          name="id"
          value={id}
          onChange={handleInputChange}
          error={productToUpdate ? '' : formErrors.id}
          disabled={!!productToUpdate}
          placeholder="tj-13"
        />

        <InputLabel
          label="Nombre:"
          name="productName"
          value={productName}
          onChange={handleInputChange}
          error={formErrors.productName}
          placeholder="Tarjeta de crédito"
        />

        <InputLabel
          label="Descripción:"
          name="description"
          value={description}
          onChange={handleInputChange}
          error={formErrors.description}
          placeholder="Nuevo producto tarjeta de crédito"
        />

        <InputLabel
          label="Logo:"
          name="logo"
          value={logo}
          onChange={handleInputChange}
          error={formErrors.logo}
          placeholder="Url con la imagen"
          type="url"
        />

        <InputLabel
          label="Fecha de Liberación:"
          name="date_release"
          value={date_release}
          onChange={handleInputChange}
          error={formErrors.date_release}
          type="date"
          min={moment().format("YYYY-MM-DD")}
        />

        <InputLabel
          label="Fecha de Revisión:"
          name="date_revision"
          value={date_revision}
          onChange={handleInputChange}
          error={formErrors.date_revision}
          type="date"
          disabled={true}
        />

        <footer className="buttons-container">
          <button className="secondary-button" onClick={handleResetValues}>{"Reiniciar"}</button>
          <button className={isError ? 'disabled-button primary-button':"primary-button"}   disabled={isError}  onClick={handleSubmit}>{"Enviar"}</button>
        </footer>
      </form>
    </section>
  );
};

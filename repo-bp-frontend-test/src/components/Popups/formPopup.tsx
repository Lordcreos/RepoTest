import { FC } from "react";
import { Product } from "../../Types/types";
import { ProductForm } from "../Forms/productForm";
import "./popup.css";

interface Props {
  title: string;  
  handleCloseMenu: () => void;
  selectedProduct ? : Product | null;
}

export const FormPopup: FC<Props> = ({
  title,
  handleCloseMenu,
  selectedProduct,
}) => {
  return (
    <div id="form-popup" className="popup">
      <div className="popup-content">
        <div className="popup-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={handleCloseMenu}>
            &times;
          </button>
        </div>
        <div className="popup-forms">
          <ProductForm productToUpdate={selectedProduct} />
        </div>
      </div>
    </div>
  );
};

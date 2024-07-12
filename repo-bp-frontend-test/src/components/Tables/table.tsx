import { useState, FC, useEffect } from "react";
import { TableFooter } from "./tableFooter";
import { handleClosePopup, handleOpenPopup } from "../../helpers/PopupShowHelper";
import { TableHeader } from "./tableHeader";
import { TableBody } from "./tableBody";
import { Pagination } from "./pagination";
import { Product, TableProps } from "../../Types/types";
import { useProducts } from "../../Hooks/UseProducts";
import { filterTableHelper } from "../../helpers/FilterTableHelper";
import { FormPopup } from "../Popups/formPopup";
import { DeletePopup } from "../Popups/deletePopup";
import "./table.css";

export const Table: FC<TableProps> = ({ data = [], filter, product, setProduct }) => {
  const { deleteProduct } = useProducts();

  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(5);
  const [popupId, setPopupId] = useState("");

  const handleProductIdChange = (product: Product) => {
    // Actualizar el estado compartido con el id del product
    setProduct(product);
  };

  const handletPopupIdChange = (popupId: string) => {
    // Actualizar el estado compartido con el id del product
    setPopupId(popupId);
  };

  useEffect(() => {
    if (popupId) {
      handleDelete();
      setPopupId("");
    }
  }, [popupId]);
  const filteredData = filterTableHelper(data, filter);
 
  const totalPages = filteredData
    ? Math.ceil(filteredData.length / resultsPerPage)
    : 0;

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleDelete = () => {
    handleOpenPopup(popupId);
  };
  const handleEdit = () => {
    handleOpenPopup(popupId);
  };

  const handleCloseFormPopup = () => {
    handleClosePopup("form-popup");
  };
  const handleCloseDeletePopup = () => {
    handleClosePopup("delete-popup");
  };

  const handleDeleteElement = () => {
    deleteProduct(product?.id as string);
    handleCloseDeletePopup();
  };

  return (
    <>
      <FormPopup
        title={product ? "Editar Producto" : "Agregar Producto"}
        primaryButtonTitle={"Eliminar"}
        handleCloseMenu={() => handleCloseFormPopup()}
        selectedProduct={product}
      />
      <DeletePopup
        title="¿Seguro desea eliminar?"
        primaryButtonTitle={"Eliminar"}
        handleActionMenu={() => handleDeleteElement()}
        handleCloseMenu={() => handleCloseDeletePopup()}
      />
      <table className="table">
        <TableHeader />
        <TableBody
          UpdateId={handleProductIdChange}
          PopupId={handletPopupIdChange}
          data={filteredData}
          currentPage={currentPage}
          resultsPerPage={resultsPerPage}
          handleDeleteActionButton={handleDelete}
          handleEditActionButton={handleEdit}
        />
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <TableFooter data={filteredData} setResultsPerPage={setResultsPerPage} />
    </>
  );
};

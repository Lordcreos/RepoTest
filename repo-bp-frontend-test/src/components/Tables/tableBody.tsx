import { FC, useState } from "react";

import MenuIcon from "../../assets/ActionsMenuIcon.svg";
import { getDate } from "../../utils/getDate";
import { Product } from "../../Types/types";
import "./table.css";

interface Props {
  handleDeleteActionButton: () => void;
  handleEditActionButton: () => void;
  currentPage: number;
  resultsPerPage: number;
  data: Product[] | undefined;
  UpdateId: (updateId: Product) => void;
  PopupId: (updateId: string) => void;
}

export const TableBody: FC<Props> = ({
  handleDeleteActionButton,
  handleEditActionButton,
  currentPage,
  resultsPerPage,
  data,
  UpdateId,
  PopupId,
}) => {
  const [openRow, setOpenRow] = useState("");
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  const currentResults = data?.slice(startIndex, endIndex);

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.display = "none"; // Esconde la imagen que falló
    event.currentTarget.parentElement?.appendChild(createDefaultAvatar()); // Añade el avatar por defecto
  };

  const createDefaultAvatar = () => {
    const avatar = document.createElement("div");
    avatar.className = "avatar-default";
    return avatar;
  };

  return (
    <tbody>
      {currentResults?.map((product, index) => (
        <tr key={`${product.id} ${index} `}>
          <td>
            <img
              src={product.logo}
              className="product-logo"
              alt="Logo del producto"
              width="50"
              height="50"
              onError={handleImageError}
            />
          </td>
          <td>{product.name}</td>
          <td>{product.description}</td>
          <td>{getDate(product.date_release)}</td>
          <td>{getDate(product.date_revision)}</td>
          <td
            className={`menu-popup ${openRow === product.id ? "open" : ""}`}
            onClick={() => setOpenRow(openRow === product.id ? "" : product.id)}
          >
            <img src={MenuIcon} className="logo" alt="Menu logo" />
            {openRow === product.id && (
              <div className="menu-buttons">
                <button
                  onClick={() => {
                    UpdateId(product);
                    PopupId("form-popup");
                    handleEditActionButton();
                  }}
                >
                  Editar
                </button>
                <button
                  onClick={() => {
                    UpdateId(product);
                    PopupId("delete-popup");
                    handleDeleteActionButton();
                  }}
                >
                  Eliminar
                </button>
              </div>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

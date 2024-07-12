import { FC } from "react";
import { Button } from "../Buttons/button";
import "./popup.css";



interface Props {
  title: string;  
  primaryButtonTitle: string;
  handleActionMenu: () => void;
  handleCloseMenu: () => void;
}

export const DeletePopup: FC<Props> = ({
  title,
  primaryButtonTitle,
  handleActionMenu,
  handleCloseMenu,
}) => {
  return (
    <div id="delete-popup" className="popup">
      <div className="popup-content">
        <h3>{title}</h3>
      </div>
      <div className="popup-options">
        <Button
          type="primary"
          title={primaryButtonTitle}
          action={ () => handleActionMenu() }
        />
          <Button type="secondary" title={"Cancelar"} action={() => handleCloseMenu()} />
      </div>
    </div>
  );
};

import IconInfo from "../../assets/IconInfo.svg";

import "./table.css";

export const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>
          <div className="table-tittle">Logo</div>
        </th>
        <th>
          <div className="table-tittle">Nombre del producto</div>
        </th>
        <th>
          <div className="table-tittle">Descripción
          <img src={IconInfo} className="logo" alt="Info logo" />
          </div>
        </th>
        <th>
          <div className="table-tittle">
          Fecha de liberación
          <img src={IconInfo} className="logo" alt="Info logo" />
          </div>
        </th>
        <th>
        <div className='table-tittle'>Fecha de reestructuración
          <img src={IconInfo} className="logo" alt="Info logo" /></div>
          
        </th>
        <th></th>
      </tr>
    </thead>
  );
};

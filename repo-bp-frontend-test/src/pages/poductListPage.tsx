import { useState, ChangeEvent, useEffect } from 'react';
import "./productListPage.css";
import { Product } from '../Types/types';
import { InputSearch } from "../components/Inputs/searchInput";
import { Button } from "../components/Buttons/button";
import { Table } from "../components/Tables/table";
import { handleOpenPopup } from "../helpers/PopupShowHelper";
import { useProducts } from '../Hooks/UseProducts';

const ProducListPage = () => {
  const { productsQuery, apiInteracted } = useProducts();
  const [inputValue, setInputValue] = useState("");
  const [preparedData, setPreparedData] = useState<Product[]>([]);

  const fetchData = async () => {
    try {
      const data = await productsQuery(); 
      setPreparedData(data.data); 
    } catch (error) {
      console.error(error); 
    }
  };

  useEffect(() => {
    if (apiInteracted !== '') {
      fetchData();
    }
  }, [apiInteracted, productsQuery]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []); 

  const [product, setProduct] = useState<Product | null>(null);
  const handleAdd = () => {
    handleOpenPopup("form-popup");
    setProduct(null);
  };

  return (
    <main className="main-list">
      <section className="actions-container">
        <InputSearch
          placeholder="Buscar Productos"
          value={inputValue}
          onChange={handleChange}
        />
        <Button type="primary" title={"Agregar"} action={() => handleAdd()} />
      </section>
      <section className="data-container">
        <Table data={preparedData} filter={inputValue}  setProduct={setProduct} product = {product}  />
      </section>
    </main>
  );
};

export default ProducListPage;

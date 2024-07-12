export interface TableProps {
  data: Product[] | undefined;
  filter: string;
  product : Product | null;
  setProduct: (product: Product) => void;
}

export interface FormValues {
  id: string;
  productName: string;
  description: string;
  logo: string;
  date_release: string;
  date_revision: string;
}
interface Product {
  id: string;
  name: string;
  description: string;
  logo: string;
  date_release: string;
  date_revision: string;
}

interface productToSave {
  id: string;
  productName: string;
  description: string;
  logo: string;
  date_release: string;
  date_revision: string;
}


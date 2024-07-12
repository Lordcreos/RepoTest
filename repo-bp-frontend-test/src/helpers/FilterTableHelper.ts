import { Product } from "../Types/types";


export const filterTableHelper = (data: Product[] | undefined, filter: string) => {
  return data
    ? data.filter((item: Product) => {
        const { name, description, id, date_release, date_revision } = item;
        const lowerCaseQuery = filter.toLowerCase();

        const propertiesToSearch = [name, description, id.toString(), date_release, date_revision];
        const found = propertiesToSearch.some((property) =>
          property.toLowerCase().includes(lowerCaseQuery)
        );

        return found;
      })
    : [];
};
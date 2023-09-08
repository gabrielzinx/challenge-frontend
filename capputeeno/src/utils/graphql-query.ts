import { FilterType } from "@/types/filter-types";
import { PriorityTypes } from "@/types/priority-types";

interface FilterContextType {
    page: number,
    type: FilterType,
    priority: PriorityTypes
}

export default function graphqlQuery({ type, priority, page }: FilterContextType) {

    const categoryFilter =
        type !== FilterType.ALL ? (type === FilterType.MUG ? "mugs" : "t-shirts") : "";

    const sortField =
        priority === PriorityTypes.NEWS
            ? "created_at"
            : priority === PriorityTypes.POPULARITY
                ? "sales"
                : priority === PriorityTypes.BIGGEST_PRICE ||
                    priority === PriorityTypes.LOWEST_PRICE ? "price_in_cents" : "_";

    const sortOrder = priority === PriorityTypes.BIGGEST_PRICE ? "CSA" : "ASC";

    const graphqlQuery = `{
       allProducts (
           filter: {
               ${categoryFilter ? `category: "${categoryFilter}"` : ""}
           }
           sortField: ${sortField && `"${sortField}"`}
           sortOrder: "${sortOrder}"
           page: ${page}
           perPage: ${type === FilterType.ALL ? 12 : 10}
       ) {
           id
           name
           image_url
           price_in_cents
           created_at
           sales
       }
    }`;

    return graphqlQuery

}

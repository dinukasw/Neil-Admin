import ProductTable from "../../components/ProductsTable/ProductsTable";
import styles from "./allProducts.module.scss";

const tableData = [
    {
        product: "Product 1",
        sku: "SKU-12345"
    },
    {
        product: "Product 2",
        sku: "SKU-12346"
    },
    {
        product: "Product 3",
        sku: "SKU-12347"
    },
    {
        product: "Product 4",
        sku: "SKU-12348"
    },
    {
        product: "Product 5",
        sku: "SKU-12349"
    },
    {
        product: "Product 6",
        sku: "SKU-12350"
    },
    {
        product: "Product 7",
        sku: "SKU-12351"
    },
    {
        product: "Product 8",
        sku: "SKU-12352"
    },
    {
        product: "Product 9",
        sku: "SKU-12353"
    },
    {
        product: "Product 10",
        sku: "SKU-12354"
    },
    {
        product: "Product 11",
        sku: "SKU-12355"
    },
    {
        product: "Product 12",
        sku: "SKU-12356"
    },
    {
        product: "Product 13",
        sku: "SKU-12357"
    },
    {
        product: "Product 14",
        sku: "SKU-12358"
    },
    {
        product: "Product 15",
        sku: "SKU-12359"
    }
];

const AllProducts = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.topContainer}>
                <p>Product List</p>
                <div className={styles.sortingContainer}>
                    <input
                        type="search"
                        className={styles.searchBar}
                        placeholder="Search…"
                        
                    />
                    <select className={styles.sortingSelect}>
                        <option disabled selected className={styles.default}>
                            Filter By
                        </option>
                        <option value="price">Price</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
            </div>
            <ProductTable data={tableData} />
        </div>
    );
};

export default AllProducts;

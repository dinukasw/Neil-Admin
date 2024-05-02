import React, { useState } from "react";
import Styles from "./productsTableRow.module.scss";
import EyeIcon from "../../assets/Icons/eye-icon.svg";
import EditIcon from "../../assets/Icons/pen-icon.svg";
import DeleteIcon from "../../assets/Icons/delete-gray-icon.svg";
import DeleteModal from "../DeleteModal/DeleteModal";
import { Link } from "react-router-dom";

interface TableRowProps {
    product: React.ReactNode;
    sku: string;
}

const TableRow: React.FC<TableRowProps> = ({ product, sku }) => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <tr className={Styles.tr}>
            <DeleteModal open={openModal} onClose={() => setOpenModal(false)} />
            <div className={Styles.td}>
                <td className={Styles.td1}>
                    {product}
                </td>
                <td className={Styles.td2}>{sku}</td>
                <td className={Styles.td3}>
                    <div className={Styles.action}>
                        <button>
                            <img src={EyeIcon} alt="View" />
                        </button>
                        <Link to={`/add-products/${sku}`}>
                            <button>
                                <img src={EditIcon} alt="Edit" />
                            </button>
                        </Link>
                        <button onClick={() => setOpenModal(true)}>
                            <img src={DeleteIcon} alt="Delete" />
                        </button>
                    </div>
                </td>
            </div>
        </tr>
    );
};

export default TableRow;

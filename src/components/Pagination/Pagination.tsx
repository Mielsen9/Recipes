import React from "react";
import * as styles from "./Pagination.module.scss";

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, setCurrentPage }) => {
	const handlePageChange = (page: number) => {
		if (page >= 1 && page <= totalPages) {
			setCurrentPage(page);
		}
	};

	const pages = [];
	if (totalPages > 7) {
		// Створюємо сторінки з обмеженням до 7 сторінок
		for (let i = 1; i <= 7; i++) {
			pages.push(i);
		}
		if (currentPage > 7) {
			pages.push("...");
		}
		pages.push(totalPages);
	} else {
		for (let i = 1; i <= totalPages; i++) {
			pages.push(i);
		}
	}

	return (
		<div className={styles.pagination}>
			<button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
				&lt;
			</button>
			{pages.map((page, index) => (
				<button
					key={index}
					onClick={() => handlePageChange(Number(page))}
					className={currentPage === Number(page) ? styles.active : ""}
				>
					{page}
				</button>
			))}
			<button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
				&gt;
			</button>
		</div>
	);
};

export default Pagination;
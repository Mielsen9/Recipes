import React from "react";
import * as styles from "./Pagination.module.scss";

interface PaginationProps {
	currentPage: number;
	setCurrentPage: (page: number) => void;
	totalPages: number;
}

const Pagination = ({ currentPage, setCurrentPage, totalPages }: PaginationProps) => {
	const handlePageChange = (page: number) => {
		if (page < 1 || page > totalPages) return;
		setCurrentPage(page);
	};

	// Створення масиву сторінок для відображення
	const pages = [];
	for (let i = 1; i <= totalPages; i++) {
		if (i <= 7 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
			pages.push(i);
		}
	}

	return (
		<div className={styles.pagination}>
			<button
				className={styles.arrow}
				onClick={() => handlePageChange(currentPage - 1)}
				disabled={currentPage === 1}
			>
				&lt;
			</button>
			{pages[0] > 1 && <span>1 ...</span>}
			{pages.map((page) => (
				<button
					key={page}
					className={`${styles.page} ${currentPage === page ? styles.active : ""}`}
					onClick={() => handlePageChange(page)}
				>
					{page}
				</button>
			))}
			{pages[pages.length - 1] < totalPages && <span>... {totalPages}</span>}
			<button
				className={styles.arrow}
				onClick={() => handlePageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				&gt;
			</button>
		</div>
	);
};

export default Pagination;
import React from "react";
import * as styles from "./Pagination.module.scss";
import {DOTS, usePagination} from "../hook/usePagination";
import {useAppDispatch, useAppSelector} from "@/App/state/hook";
import {selectCurrentPage} from "@/features/pagination";
import {usePaginationHandler} from "@/features/pagination/hook/usePaginationHandler";

interface PaginationProps {
	totalCount: number;
	itemsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = React.memo(({ totalCount, itemsPerPage }) => {
	const currentPage = useAppSelector(selectCurrentPage);
	// Використовуємо хук usePagination
	const paginationRange = usePagination({
		totalCount,
		pageSize: itemsPerPage,
		siblingCount: 1,
		currentPage: currentPage,
	});

	const { setPage } = usePaginationHandler();

	// Якщо пагінація не потрібна (коли сторінок дуже мало)
	if (!paginationRange || paginationRange.length <= 1) {
		return null;
	}

	// Обробник для зміни поточної сторінки
	const handlePageChange = (currentPage: number) => {
		setPage(currentPage)
	};

	return (
		<div className={styles.pagination}>
			{paginationRange.map((page, idx) => {
				if (page === DOTS) {
					return <span key={idx} className={styles.dots}>{DOTS}</span>;
				}

				return (
					<button
						key={idx}
						onClick={() => handlePageChange(Number(page))}
						className={`${styles.pageNumber} ${page === currentPage ? styles.active : ""}`}
					>
						{page}
					</button>
				);
			})}
		</div>
	);
});

export default Pagination;

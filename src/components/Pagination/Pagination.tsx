// import React from "react";
// import * as styles from "./Pagination.module.scss";
// import {DOTS, usePagination} from "@/hook/usePagination";
// import { selectPagination, setCurrentPage, setItemsPerPage} from "@/state/slices/paginationSlice";
// import {useAppDispatch, useAppSelector} from "@/state/hook";
//
// interface PaginationProps {
// 	totalCount: number;
// 	itemsPerPage: number;
// }
//
// const Pagination: React.FC<PaginationProps> = ({ totalCount, itemsPerPage }) => {
// 	const dispatch = useAppDispatch();
// 	const {currentPage} = useAppSelector(selectPagination);
// 	// Використовуємо хук usePagination
// 	const paginationRange = usePagination({
// 		totalCount,
// 		pageSize: itemsPerPage,
// 		siblingCount: 1,
// 		currentPage: currentPage,
// 	});
//
// 	dispatch(setItemsPerPage(itemsPerPage))
//
// 	// Якщо пагінація не потрібна (коли сторінок дуже мало)
// 	if (!paginationRange || paginationRange.length <= 1) {
// 		return null;
// 	}
//
// 	// Обробник для зміни поточної сторінки
// 	const handlePageChange = (currentPage: number) => {
// 		dispatch(setCurrentPage(currentPage))
// 	};
//
// 	return (
// 		<div className={styles.pagination}>
// 			{paginationRange.map((page, idx) => {
// 				if (page === DOTS) {
// 					return <span key={idx} className={styles.dots}>{DOTS}</span>;
// 				}
//
// 				return (
// 					<button
// 						key={idx}
// 						onClick={() => handlePageChange(Number(page))}
// 						className={`${styles.pageNumber} ${page === currentPage ? styles.active : ""}`}
// 					>
// 						{page}
// 					</button>
// 				);
// 			})}
// 		</div>
// 	);
// };
//
// export default Pagination;

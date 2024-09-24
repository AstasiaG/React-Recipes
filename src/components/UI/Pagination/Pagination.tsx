import React, { FC, useMemo, useState } from 'react'
import * as classes from './Pagination.module.scss'

interface PaginationProps {
  total: number
  limit: number
  page: number
  setPage: (page: React.SetStateAction<number>) => void
}

export const Pagination: FC<PaginationProps> = ({ total, limit, page, setPage }) => {
  const [pages, setPages] = useState<number[]>([])

  const getAllPages = useMemo(() => {
    const totalPages = Math.ceil(total / limit);
    let result = []
    for (let i = 0; i < totalPages; i++) {
      result.push(i + 1)
    }

    setPages(result)
  }, [limit, total])
  
  return (
    <div className={ classes.list}>
      {pages.map((num: number) => 
        <div
          key={num}
          className={num === page ? `${classes.item} ${classes.active}` : classes.item}
          onClick={() => setPage(num)}
        >
          <span>{ num }</span>
        </div>
      )}

    </div>
  )
}
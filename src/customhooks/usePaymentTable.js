import { 
  createColumnHelper,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  flexRender
} from '@tanstack/react-table';
import { usePaymentHistory } from '../backend/queries';

export const usePaymentTable = () => {
  const { data, isLoading, isError, error } = usePaymentHistory();

  // Ensure tableData is always an array
  const tableData = Array.isArray(data) ? data : [];

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor('class_type', {
      header: 'Class Type',
      cell: info => info.getValue() || '-',
    }),
    columnHelper.accessor('academic_year', {
      header: 'Academic Year',
      cell: info => info.getValue() || '-',
    }),
    columnHelper.accessor('payment_head', {
      header: 'Payment Head',
      cell: info => info.getValue() || '-',
    }),
    columnHelper.accessor('mode_of_payment', {
      header: 'Payment Mode',
      cell: info => info.getValue() || '-',
    }),
    columnHelper.accessor('fee_head', {
      header: 'Fee Head',
      cell: info => info.getValue() || '-',
    }),
    columnHelper.accessor('amount', {
      header: 'Amount',
      cell: info => `₹${(info.getValue() || 0).toLocaleString('en-IN')}`,
    }),
    columnHelper.accessor('payment_campus', {
      header: 'Campus',
      cell: info => info.getValue() || '-',
    }),
    columnHelper.accessor('date', {
      header: 'Date',
      cell: info => {
        const value = info.getValue();
        return value ? new Date(value).toLocaleDateString('en-IN') : '-';
      },
    }),
    columnHelper.accessor('installment_no', {
      header: 'Installment No',
      cell: info => info.getValue() || '-',
    }),
  ];

  const table = useReactTable({
    data: tableData, 
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getRowId: (row, index) => row.id || `${index}`,
  });

  return { 
    table,
    columns,
    data: tableData,
    isLoading,
    isError,
    error,
    flexRender
  };
};
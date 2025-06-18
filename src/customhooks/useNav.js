
const useNavigation = () => {
  
  // Main tabs configuration
  const mainTabs = [
    { name: 'Student Profile', path: '/' },
    { name: 'Payments', path: '/payment' },
    { name: 'Transport', path: '/transport' },
    { name: 'Academics', path: '/academics' },
    { name: 'Alerts', path: '/alerts' },
    { name: 'History', path: '/history' },
    { name: 'Room Allotment', path: '/room-allotment' },
  ];

  // Sub-tabs configuration
  const subTabs = [
    { name: 'Payments', path: '/payment' },
    { name: 'Cancellation', path: 'cancellation' },
    { name: 'Concession', path: 'concession' },
    { name: 'PM Issue', path: 'pmissue' },
    { name: 'Fee Installments', path: 'feeinstallments' },
    { name: 'Akash Books', path: 'akashbooks' },
    { name: 'Uniform', path: 'uniform' },
    { name: 'Transfers', path: 'transfers' },
  ];

  return {
    mainTabs,
    subTabs,
  };
};

export default useNavigation;
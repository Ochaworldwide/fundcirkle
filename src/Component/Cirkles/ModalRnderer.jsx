const ModalRenderer = ({ modals }) => {
  const { closeModal } = useModal();

  // Map modal types to components
  const modalComponents = {
    ConfirmPayment: ConfirmPaymentModal,
    AnotherModal: AnotherModal, // Add other modal components here
  };

  return (
    <>
      {modals.map((modal, index) => {
        const ModalComponent = modalComponents[modal.type];
        return (
          ModalComponent && (
            <ModalComponent
              key={index}
              {...modal.props}
              onClose={() => closeModal(modal.type)}
            />
          )
        );
      })}
    </>
  );
};

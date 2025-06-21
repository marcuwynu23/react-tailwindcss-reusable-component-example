import { useCallback, useState } from "react";
import { Button, Container, Modal, useModal, useToast } from "ui";

function App() {
  const { isOpen, openModal, closeModal } = useModal();
  const toast = useToast();

  const [counter, setCounter] = useState(0);
  const handleBtnClick = useCallback(() => {
    openModal();
    console.log("Hello World!");
    setCounter(counter + 1);
  }, [counter]);

  return (
    <>
      <Container className="h-screen w-screen" alignX="center" alignY="center">
        <Container className="bg-green-600 rounded-full mt-6 py-6" alignX="center" alignY="center">
          <p className="text-[2rem] font-bold text-white">{counter}</p>
        </Container>
        <Button className="mt-4" onClick={handleBtnClick}>
          Click Me!
        </Button>
        <Button onClick={() => toast("info", "Registration Processing...", "top-right")}>Show Toast</Button>
        <Modal isOpen={isOpen} onClose={closeModal} title="Registration Form" fullScreen>
          <p className="mb-4">This is the modal content.</p>
        </Modal>
      </Container>
    </>
  );
}

export default App;

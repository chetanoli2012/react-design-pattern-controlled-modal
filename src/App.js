import { useState } from "react";
import { ControlledModal } from "./ControlledModal";

function App() {
  const [shouldShowModal, setShouldShowModal] = useState(false);

  return (
    <>
      <ControlledModal
        shouldShow={shouldShowModal}
        onRequestClose={() => setShouldShowModal(false)}
      >
        <p>This is a sample modal</p>
      </ControlledModal>
      <button onClick={() => setShouldShowModal(!shouldShowModal)}>
        {shouldShowModal ? "Hide Modal" : "Show Modal"}
      </button>
    </>
  );
}

export default App;

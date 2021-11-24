import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import FileBase from "react-file-base64";

import "./Home.css";

const Home = () => {
  const [show, setShow] = useState(false);

  const [details, setDetails] = useState({
    value: "",
    file: "",
    privateKey: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    // TODO: create and call clear state method
    handleClose();
    console.log("Submiting form with values", details);
  };

  return (
    <div>
      <Button variant="secondary" onClick={handleShow}>
        Mint NFT
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please fill this form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ background: "white" }}>
            <form className="form-tg">
              <div className="row row-div">
                <div className="col-md-3">
                  <label className="labl"> Picture : </label>
                </div>
                <div className="col-md-9">
                  <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setDetails({ ...details, file: base64 })
                    }
                  />
                </div>
              </div>

              <div className="row row-div">
                <div className="col-md-3">
                  <label className="labl"> Value : </label>
                </div>
                <div className="col-md-9">
                  <input
                    type="text"
                    value={details.value}
                    onChange={(e) =>
                      setDetails({ ...details, value: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="row row-div">
                <div className="col-md-3">
                  <label className="labl"> Private Key : </label>
                </div>
                <div className="col-md-9">
                  <input
                    type="text"
                    value={details.privateKey}
                    onChange={(e) =>
                      setDetails({ ...details, privateKey: e.target.value })
                    }
                  />
                </div>
              </div>
            </form>
          </div>{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;

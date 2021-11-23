// import React, { useEffect, useState } from "react";
// // import crypto from "../crypto.jpg";
// import crypto from "../etherLogo.png";
// // import crypto from "../crypto2.jpg";
// import "./Details.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Button, Card, Spinner } from "react-bootstrap";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { CopyToClipboard } from "react-copy-to-clipboard";

// //used bootstrap icon below

// toast.configure();

// const Details = (props) => {
//   const [showSend, setShowSend] = useState(false);
//   const [showSend2, setShowSend2] = useState(false);
//   const [showSend3, setShowSend3] = useState(false);

//   const [walletBalance, setWalletBalance] = useState();

//   const [addressTo, setAddressTo] = useState();
//   const [amount, setAmount] = useState();

//   const [addressToToken, setAddressToToken] = useState();
//   const [amountToken, setAmountToken] = useState();

//   const [addressToTransferToken, setAddressToTransferToken] = useState();
//   const [amountTokenTransfer, setAmountTokenTransfer] = useState();

//   const [loader, setLoader] = useState(false);

//   const [tokenBalance, setTokenBalance] = useState();

//   const getBalance = () => {
//     //get balance
//     props?.location?.state?.walletDetails?.Address &&
//       axios
//         .get("http://localhost:8080/api/user/getBalance", {
//           params: { address: props?.location?.state?.walletDetails?.Address },
//         })
//         .then((res) => {
//           setWalletBalance(res.data);
//         })
//         .catch((err) => console.log(err));
//   };

//   const getTokenBalance = () => {
//     console.log("Balace token");
//     //get token balance
//     props?.location?.state?.walletDetails?.Address &&
//       axios
//         .get("http://localhost:8080/api/user/getTokenBalance", {
//           params: { address: props?.location?.state?.walletDetails?.Address },
//         })
//         .then((res) => {
//           setTokenBalance(res.data.balance);
//           console.log(res.data.balance);
//         })
//         .catch((err) => console.log(err));
//   };

//   const sendTransaction = () => {
//     //sending Ethereums
//     setLoader(true);
//     let payload = {
//       addressFrom: props.location.state.walletDetails.Address,
//       addressTo,
//       amount,
//       privateKey: props.location.state.walletDetails.privateKey,
//     };

//     axios
//       .post("http://localhost:8080/api/user/sendTransaction", payload)
//       .then((res) => {
//         // console.log(res.data);
//         toast.info(res.data);
//         setLoader(false);
//         setAddressTo();
//         setAmount();
//         getBalance();
//         setShowSend(false);
//       })
//       .catch((err) => {
//         setLoader(false);
//         // console.log(err.response.data);
//         toast.error(err.response.data);
//         // setShowSend(false);
//       });
//   };

//   const purchaseToken = () => {
//     //for sending token
//     console.log("Amount of token", amountToken);
//     console.log("Address Token", addressToToken);
//     setLoader(true);
//     let payload = {
//       addressFrom: props.location.state.walletDetails.Address,
//       // addressToToken,
//       amount: parseInt(amountToken) * 10 ** 18,
//       privateKey: props.location.state.walletDetails.privateKey,
//     };

//     axios
//       .post("http://localhost:8080/api/user/sendToken", payload)
//       .then((res) => {
//         // console.log(res.data);
//         toast.info(res.data);
//         setLoader(false);
//         setAddressToToken();
//         setAddressToToken();
//         getBalance();
//         getTokenBalance();
//         setShowSend2(false);
//       })
//       .catch((err) => {
//         setLoader(false);
//         // console.log("helollolol", err);
//         toast.error(err.response.data);
//         // setShowSend(false);
//       });
//   };

//   const transferToken = () => {
//     console.log("Transfer token", amountTokenTransfer, addressToTransferToken);
//     setLoader(true);
//     let payload = {
//       addressFrom: props.location.state.walletDetails.Address,
//       amount: parseInt(amountTokenTransfer) * 10 ** 18,
//       privateKey: props.location.state.walletDetails.privateKey,
//       account: addressToTransferToken,
//     };

//     axios
//       .post("http://localhost:8080/api/user/transferToken", payload)
//       .then((res) => {
//         // console.log(res.data);
//         toast.info(res.data);
//         setLoader(false);
//         setAddressToTransferToken();
//         setAmountTokenTransfer();
//         getBalance();
//         getTokenBalance();
//         setShowSend3(false);
//       })
//       .catch((err) => {
//         setLoader(false);
//         // console.log(err.response.data);
//         toast.error(err.response.data);
//         // setShowSend(false);
//       });
//   };

//   useEffect(() => {
//     console.log("getting balance", props.location.state.walletDetails.Address);
//     getBalance();
//     getTokenBalance();
//   }, []);

//   return (
//     <div>
//       {/* {console.log("details", props.location.state.walletDetails)} */}
//       {props && (
//         <div className="row">
//           <div className="col-lg-2  md-2"></div>
//           <div className="col-lg-8  md-8">
//             <div className="main-box">
//               <div className="img-div">
//                 <img className="crypto-img " src={crypto} width="50%" />
//               </div>

//               <div className="row ">
//                 <div className="col-lg-1"></div>
//                 <div className="col-lg-4">
//                   <Card
//                     // bg="secondary"
//                     className="cards"
//                     text="white"
//                     style={{ width: "26rem", height: "190px" }}
//                   >
//                     <Card.Body>
//                       <Card.Title>User Details</Card.Title>
//                       <Card.Text>
//                         {`Name : ${props?.location?.state?.walletDetails?.name}`}
//                       </Card.Text>
//                       <Card.Text>
//                         {`Email ID : ${props?.location?.state?.walletDetails?.email}`}
//                       </Card.Text>
//                     </Card.Body>
//                   </Card>
//                 </div>
//                 <div className="col-lg-1"></div>

//                 <div className="col-lg-5">
//                   <Card
//                     // bg="secondary"
//                     className="cards"
//                     text="white"
//                     style={{ width: "27rem", height: "190px" }}
//                   >
//                     <Card.Body>
//                       <Card.Title>Wallet Details</Card.Title>
//                       <Card.Text>
//                         {`Address : ${props?.location?.state?.walletDetails?.Address}  `}

//                         <CopyToClipboard
//                           text={props?.location?.state?.walletDetails?.Address}
//                         >
//                           {/* <img
//                             src="https://img.icons8.com/material-outlined/24/000000/copy.png"
//                             onClick={() => toast.info("Address Copied ")}
//                           /> */}

//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="16"
//                             height="16"
//                             fill="currentColor"
//                             class="bi bi-files"
//                             viewBox="0 0 16 16"
//                             style={{ cursor: "pointer" }}
//                             onClick={() => toast.info("Address Copied ")}
//                           >
//                             <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z" />
//                           </svg>
//                         </CopyToClipboard>
//                       </Card.Text>
//                       <Card.Text>{`Wallet Balance : ${
//                         walletBalance == "undefined"
//                           ? "_"
//                           : walletBalance + " ETH"
//                       }`}</Card.Text>

//                       <Card.Text>{`Token Balance : ${
//                         tokenBalance == "undefined"
//                           ? "_"
//                           : tokenBalance + " ERC"
//                       }`}</Card.Text>
//                     </Card.Body>
//                   </Card>
//                 </div>
//                 {/* <div className="col-lg-1"></div> */}
//               </div>

//               <div className="circularProgress-div">
//                 {loader ? (
//                   <Spinner size="xlg" animation="border" variant="dark" />
//                 ) : null}
//               </div>

//               <div className="row">
//                 <div className="col-lg-2"></div>
//                 <div className="col-lg-8  div-button">
//                   {/* <Button
//                     variant="dark"
//                     className="buttonSendToken"
//                     onClick={() => setShowSend(!showSend)}
//                   >
//                     Send Ether
//                   </Button> */}

//                   <Button
//                     variant="dark"
//                     className="buttonSendToken"
//                     onClick={() => setShowSend2(!showSend2)}
//                   >
//                     Purchase Token
//                   </Button>

//                   <Button
//                     variant="dark"
//                     className="buttonSendToken"
//                     onClick={() => setShowSend3(!showSend3)}
//                   >
//                     Transfer Token
//                   </Button>
//                 </div>
//                 <div className="col-lg-2"></div>
//               </div>

//               {showSend ? (
//                 <div className="input-box">
//                   <input
//                     type="text"
//                     value={addressTo}
//                     class="form-control"
//                     id="address"
//                     placeholder="Address to send Ether"
//                     onChange={(e) => setAddressTo(e.target.value)}
//                   />{" "}
//                   <br />
//                   <input
//                     type="text"
//                     value={amount}
//                     class="form-control"
//                     id="amount"
//                     placeholder="Amount of Ether"
//                     onChange={(e) => setAmount(e.target.value)}
//                   />
//                   <div class="button-div">
//                     <Button variant="warning" onClick={() => sendTransaction()}>
//                       Submit
//                     </Button>
//                   </div>
//                 </div>
//               ) : null}

//               {showSend2 ? (
//                 <div className="input-box">
//                   <br />
//                   <input
//                     type="text"
//                     value={amountToken}
//                     class="form-control"
//                     id="amount"
//                     placeholder="Amount of Token you want to buy"
//                     onChange={(e) => setAmountToken(e.target.value)}
//                   />
//                   <div class="button-div">
//                     <Button variant="warning" onClick={() => purchaseToken()}>
//                       Submit
//                     </Button>
//                   </div>
//                 </div>
//               ) : null}

//               {showSend3 ? (
//                 <div className="input-box">
//                   <input
//                     type="text"
//                     value={addressToTransferToken}
//                     class="form-control"
//                     id="address"
//                     placeholder="Recievers Address"
//                     onChange={(e) => setAddressToTransferToken(e.target.value)}
//                   />{" "}
//                   <br />
//                   <input
//                     type="text"
//                     value={amountTokenTransfer}
//                     class="form-control"
//                     id="amount"
//                     placeholder="Amount of token you want to transfer"
//                     onChange={(e) => setAmountTokenTransfer(e.target.value)}
//                   />
//                   <div class="button-div">
//                     <Button variant="warning" onClick={() => transferToken()}>
//                       Submit
//                     </Button>
//                   </div>
//                 </div>
//               ) : null}
//             </div>
//           </div>
//           <div className="col-lg-2  md-2"></div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Details;

import React from "react";

const Details = () => {
  return (
    <div>
      <h1>Sucessfully Logged In</h1>
    </div>
  );
};

export default Details;

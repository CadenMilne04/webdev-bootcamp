import React, {useState} from "react";
import { token } from "../../../declarations/token"
import { Principal }  from "@dfinity/principal";


function Transfer() {
  const [recipientId, setId] = useState("");
  const [amount, setAmount] = useState("");
  const [text, setText] = useState("Transfer");
  const [isDisabled, setDisabled] = useState(false);
  const [isHidden, setHidden] = useState(true);

  
  async function handleClick() {
    setDisabled(true);
    const recipient = Principal.fromText(recipientId);
    const amountToTransfer = Number(amount);

    const result = await token.transfer(recipient, amountToTransfer);
    setDisabled(false);
    setText(result);
    setHidden(false);
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={recipientId}
                onChange={(e) => setId(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button id="btn-transfer" onClick={handleClick} disabled={isDisabled}>
            Transfer
          </button>
        </p>
        <p hidden={isHidden}>
          {text}
        </p>
      </div>
    </div>
  );
}

export default Transfer;

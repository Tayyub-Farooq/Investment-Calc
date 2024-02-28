export default function UserInput({ handleChange }) {
  function handleEventChange(event, name) {
    let key = name;
    let value = event.target.value;
    handleChange(key, value);
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Invitial Investment</label>
          <input
            type="number"
            required
            name="initialInvestment"
            onChange={(event) => handleEventChange(event, "initialInvestment")}
          ></input>
        </p>
        <p>
          <label>Anual Investment</label>
          <input
            type="number"
            name="annualInvestment"
            required
            onChange={(event) => handleEventChange(event, "annualInvestment")}
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            name="expectedReturn"
            required
            onChange={(event) => handleEventChange(event, "expectedReturn")}
          ></input>
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            name="duration"
            required
            onChange={(event) => handleEventChange(event, "duration")}
          ></input>
        </p>
      </div>
    </section>
  );
}

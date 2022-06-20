import "./index.css";

const Create = () => (
  <div className="main-container">
    <div className="transaction-details">
      <form className="transaction-form">
        <h1 className="transaction-header">Candidates Portal</h1>
        <label className="input-label" htmlFor="fullname">
          FULL NAME
        </label>
        <input
          type="text"
          className="input"
          placeholder="Full Name"
          id="fullname"
        />
        <label className="input-label" htmlFor="lastname">
          LAST NAME
        </label>
        <input
          type="text"
          className="input"
          placeholder="Last Name"
          id="lastname"
        />
        <label className="input-label" htmlFor="dob">
          DOB
        </label>
        <input type="date" className="input" placeholder="DOB" id="dob" />
        <label className="input-label" htmlFor="skill">
          SKILL
        </label>
        <input type="text" className="input" placeholder="Skill" id="skill" />

        <div className="dist">
          <label className="input-label" htmlFor="radio">
            AVAILABLE :
          </label>
          {/* <input
          type="radio"
          className="dist"
          placeholder="DOB"
          id="dob"
          value="yes"
        /> */}
          <input
            type="radio"
            id="yes"
            name="fav_language"
            value="yes"
            checked
          ></input>
          <label for="yes">Yes</label>
          <br />
          <input type="radio" id="no" name="fav_language" value="no"></input>
          <label for="no">No</label>
          <br />
        </div>

        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  </div>
);
export default Create;

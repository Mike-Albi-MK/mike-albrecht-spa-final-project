const Form = ({ inputs, buttonText, heading }) => {
    return (
      <form
        className="form-container"
        onSubmit={() => console.log("Submit Handler")}
      >
        <h1>{heading}</h1>
        {inputs.map((input) => (
          <div key={input.name} className="info">
            <input
              name={input.name}
              placeholder={input.placeholder}
              onChange={() => console.log("Change Handler")}
            />
          </div>
        ))}
        <div className="submit">
          <input className="button-bg" type="submit" value={buttonText} />
        </div>
      </form>
    );
  };
  
  export default Form;
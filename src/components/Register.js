import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const courseRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/confirmation", { state: { name: nameRef.current.value, email: emailRef.current.value, course: courseRef.current.value }});
  }

  return (
    <div className="container">
      <h1>Register your interest</h1>
      <p>
        Please register with the course you are interest in!
      </p>
      <form onSubmit={handleSubmit} autoComplete="off">
      <label>
          Name:
          <input type="text" name="name" ref={nameRef} />
        </label>
        <label>
          Email:
          <input type="text" name="email" ref={emailRef} />
        </label>
        <label>
          Course:
          <input type="text" name="course" ref={courseRef} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

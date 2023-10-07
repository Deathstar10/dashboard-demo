"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailValidity, setEmailValidity] = useState(false);
  const [passwordValidity, setPasswordValidity] = useState(false);
  const router = useRouter();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const currentValue = e.target.value;

    setUsername(currentValue);

    if (e.target.validity.valid) {
      setEmailValidity(true);
      setUsernameError("");
    } else {
      setEmailValidity(false);
      if (e.target.validity.valueMissing) {
        setUsernameError("You need to enter username.");
      } else if (e.target.validity.tooShort) {
        setUsernameError(
          `The Username should be atleast ${e.target.minLength}  characters long`
        );
      } else if (e.target.validity.patternMismatch) {
        setUsernameError(
          "The username should consist of atleast 1 uppercase, 1 number and 1 special character"
        );
      }
    }
  }

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
    const currentValue = e.target.value;

    setPassword(currentValue);

    if (e.target.validity.valid) {
      setPasswordValidity(true);
      setPasswordError("");
    } else {
      setPasswordValidity(false);
      if (e.target.validity.valueMissing) {
        setPasswordError("You need to enter pasword.");
      } else if (e.target.validity.tooShort) {
        setPasswordError(
          `The pasword should be atleast ${e.target.minLength}  characters long`
        );
      } else if (e.target.validity.patternMismatch) {
        setPasswordError(
          "The pasword should consist of atleast 1 uppercase, 1 number and 1 special character"
        );
      }
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    router.push("/dashboard");
  }

  function showError() {}
  return (
    <main className=" h-screen ">
      <div className="flex w-1/2 mx-auto  justify-center items-center  h-screen">
        <form
          className="grid w-full mx-auto"
          noValidate={true}
          onSubmit={(e) => handleSubmit(e)}
        >
          <h1 className="text-center font-extrabold text-black text-2xl">
            Commercehq
          </h1>

          <label htmlFor="username" className="font-medium">
            Username
          </label>
          <input
            className="border mb-2 p-2 font-semibold rounded border-[#333]  valid:border-primary"
            value={username}
            onChange={handleChange}
            id="username"
            type="text"
            minLength={8}
            required={true}
            placeholder="enter username..."
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
          />

          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <input
            className="border p-2 font-semibold rounded border-[#333]  valid:border-primary"
            value={password}
            onChange={handlePasswordChange}
            type="password"
            id="password"
            autoComplete="false"
            minLength={8}
            required={true}
            placeholder="enter password..."
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
          />

          <input
            type="submit"
            value="Login"
            disabled={!(emailValidity && passwordValidity)}
            className="bg-primary rounded text-white py-2 my-2 cursor-pointer disabled:cursor-not-allowed disabled:bg-blue-300"
          />

          <ul>
            <li aria-live="polite" className="text-red-400">
              {usernameError}
            </li>
            <li aria-live="polite" className="text-red-400">
              {passwordError}
            </li>
          </ul>
        </form>
      </div>
    </main>
  );
}

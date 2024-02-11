import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./RegisterForm.module.css";
import coverImage from "../assets/cover.png";
export default function RegisterForm() {
  const [formValue, setformValue] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    registerbox: false,
  });
  const [errors, setErrors] = useState({
    name: null,
    username: null,
    email: null,
    mobile: null,
    registerbox: null,
  });
  const navigate = useNavigate();
  const handleSubmit = () => {
    let isError = false;
    if (formValue.name.trim().length == 0) {
      setErrors((prev) => {
        return {
          ...prev,
          name: " Name is required",
        };
      });
      isError = true;
    } else {
      setErrors((prev) => {
        return {
          ...prev,
          name: null,
        };
      });
    }
    if (formValue.username.trim().length == 0) {
      setErrors((prev) => {
        return {
          ...prev,
          username: " Username is required",
        };
      });
      isError = true;
    } else {
      setErrors((prev) => {
        return {
          ...prev,
          username: null,
        };
      });
    }
    if (formValue.email.trim().length == 0) {
      setErrors((prev) => {
        return {
          ...prev,
          email: " Email is required",
        };
      });
      isError = true;
    } else {
      setErrors((prev) => {
        return {
          ...prev,
          email: null,
        };
      });
    }
    if (formValue.mobile.trim().length == 0) {
      setErrors((prev) => {
        return {
          ...prev,
          mobile: "Moblie is required",
        };
      });
      isError = true;
    } else {
      setErrors((prev) => {
        return {
          ...prev,
          mobile: null,
        };
      });
    }
    if (formValue.registerbox === false) {
      setErrors((prev) => {
        return { ...prev, registerbox: "Please check the box" };
      });
      isError = true;
    } else {
      setErrors((prev) => {
        return { ...prev, registerbox: null };
      });
      if (isError) {
        return;
      } else {
        window.localStorage.setItem("userInfo", JSON.stringify(formValue));
        navigate("/info");
      }
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.bottom}>
          <p>Discover new things on SuperApp</p>
        </div>
        <img src={coverImage} alt="Cover Image" />
      </div>
      <div className={styles.body}>
        <p className={styles.super}>Super App</p>
        <p>Create a new Account</p>
        <form>
          <input
            value={formValue.name}
            onChange={(e) => {
              setformValue((prev) => {
                return { ...prev, name: e.target.value };
              });
            }}
            type="text"
            placeholder="Name"
          />
          <p className={styles.error}>{errors.name}</p>
          <input
            value={formValue.username}
            onChange={(e) => {
              setformValue((prev) => {
                return { ...prev, username: e.target.value };
              });
            }}
            type="text"
            placeholder="Username"
          />
          <p className={styles.error}>{errors.username}</p>
          <input
            value={formValue.email}
            onChange={(e) => {
              setformValue((prev) => {
                return { ...prev, email: e.target.value };
              });
            }}
            type="text"
            placeholder="Email"
          />
          <p className={styles.error}>{errors.email}</p>
          <input
            value={formValue.mobile}
            onChange={(e) => {
              setformValue((prev) => {
                return { ...prev, mobile: e.target.value };
              });
            }}
            type="text"
            placeholder="Mobile"
          />
          <p className={styles.error}>{errors.mobile}</p>
          <label htmlFor="registerbox">
            <input
              value={formValue.registerbox}
              type="checkbox"
              name="registerbox"
              id="registerbox"
              onChange={(e) => {
                setformValue((prev) => {
                  return { ...prev, registerbox: e.target.checked };
                });
              }}
            />
            Share my registeration data with Superapp{" "}
          </label>
          <p className={styles.error}>{errors.registerbox}</p>
          <button onClick={handleSubmit}>Sing Up</button>
          <footer className={styles.footer}>
            <p>
              By clicking on Sign up. you agree to Superapp
              <span style={{ color: "green" }}>
                Terms and Conditions of Use
              </span>
            </p>
            <p>
              To learn more about how Superapp collects, uses, shares and
              protects your personal data please head Superapp
              <span style={{ color: "green" }}> Privacy Policy</span>
            </p>
          </footer>
        </form>
      </div>
    </div>
  );
}

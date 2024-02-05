import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
      if(isError) {
        return;
      }else{
        navigate('/info')
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        flexDirection: "column",
      }}
    >
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
      <p>{errors.name}</p>
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
      <p>{errors.username}</p>
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
      <p>{errors.email}</p>
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
      <p>{errors.mobile}</p>
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
      <p>{errors.registerbox}</p>
      <button
        onClick={handleSubmit}
        style={{ border: "none", padding: "6px", background: "green" }}
      >
        {" "}
        Sing Up
      </button>
    </div>
  );
}

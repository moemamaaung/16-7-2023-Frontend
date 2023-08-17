import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import classes from "./EmailSendForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../login/authSlice";
import { selectTeacherById } from "../teacher/teacherSlice";
import { sendEmail } from "./emailSlice";
// import { sendEmail } from "./emailSlice";
// import { getToken } from "../component/features/auth/authSlice";
// import { selectUserById } from "../component/features/user/userSlice";

const EmailSendForm = () => {
  const { userId } =useParams()
  console.log("UserId in email"+ userId)
  const emailSentUser = useSelector((state) => selectTeacherById(state,Number(userId)))
  console.log(emailSentUser)

  const [to, setTo] = useState(emailSentUser.username);
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const token = useSelector(getToken)
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const navigate = useNavigate();
  
  const onToChange = (e) => setTo(e.target.value);
  const onSubjectChange = (e) => setSubject(e.target.value);
  const onTextChange = (e) => setText(e.target.value);

  const canSave = [to, subject, text].every(Boolean) && addRequestStatus === "idle";

  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();

    console.log("Send Email"+sendEmail)

    if (canSave) {
      try {
        setAddRequestStatus("pending");

        dispatch(
          sendEmail({
            email:{
              to,
              subject,
              text,
            },token
          
          })
        );
      } catch (error) {
        console.log(error);
      } finally {
        setAddRequestStatus("idle");
      }

      setTo("");
      setSubject("");
      setText("");

      navigate("/admin");
    }
  };

  return (
    <div className={classes.all}>
      <div className={classes.wrapper}>
        <h2>Send Email Form</h2>
        <form onSubmit={onSubmit}>
          <div className={classes.row}>
            <div className={classes.col}>
              <div className={classes.col}>
                <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                    <input
                      type="text"
                      required
                      className={classes.name}
                      placeholder="email"
                      value={to}
                      onChange={onToChange}
                    />
                  </div>
                </div>
              </div>

              <div className={classes.col}>
                <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                    <input
                      type="text"
                      required
                      className={classes.name}
                      placeholder="Subject"
                      value={subject}
                      onChange={onSubjectChange}
                    />
                  </div>
                </div>
              </div>

              <div className={classes.col}>
                <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                    <input
                      type="text"
                      required
                      className={classes.name}
                      placeholder="Text"
                      value={text}
                      onChange={onTextChange}
                    />
                  </div>
                </div>
              </div>

              <div className={classes.inputGroup}>
                <div className={classes.inputBox}>
                  <button type="submit" className={classes.btn}>
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailSendForm;

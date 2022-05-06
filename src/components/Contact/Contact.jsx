import React, { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import Axios from "axios";

const Contact = () => {
  const [input, setInput] = useState({});
  const [success, setSuccess] = useState(false);

  const { t, i18n } = useTranslation();

  async function handleChange({ target }) {
    const { name, value } = target;
    setInput({ ...input, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const { pseudo, email, content } = input;

    if (!pseudo && pseudo == undefined) return;
    if (!email && email == undefined) return;
    if (!content && content == undefined) return;

    const sendMail = await Axios.post("https://formspree.io/mwkrqekd", input);
    if (sendMail.status === 200) {
      setSuccess(true);
    }
  }

  return (
    <Fragment>
      <div className="container contact-container">
        <p className="contact-title">{t("Link-Contact")}</p>
        <form>
          <div className="form:group group:grey-3">
            <input
              className="form:control"
              placeholder="default"
              name="pseudo"
              onChange={() => handleChange(event)}
              required
            />
            <label htmlFor="pseudo" className="form:label" name="pseudo">
              Pseudo
            </label>
          </div>
          <div className="form:group group:grey-3">
            <input
              className="form:control"
              placeholder="default"
              name="email"
              onChange={() => handleChange(event)}
              required
            />
            <label htmlFor="email" className="form:label" name="email">
              Email
            </label>
          </div>
          <div className="form:group group:grey-3">
            <label htmlFor="content" className="form:label">
              Message
            </label>
            <textarea
              className="form:control"
              placeholder="default"
              name="content"
              onChange={() => handleChange(event)}
              required
            />
          </div>
          <button
            role="input"
            className="btn btn:rounded background:amber-2"
            onClick={() => handleSubmit(event)}
          >
            Envoyer
          </button>
          {success && (
            <Fragment>
              <hr />
              <div className="background:green sm:text:center">
                <p className="text:white">Mail envoyé avec succès.</p>
              </div>
            </Fragment>
          )}
        </form>
      </div>
    </Fragment>
  );
};

export default Contact;

import { useRef, useState } from "react";
import "./Contact.css";
import { contacts } from "../../data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const container = useRef(null);
  

  // ✅ state form (UI remains same, just added state management)
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", msg: "" }); // success | error | info
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", msg: "" });

    // mala validacija
    if (!form.firstname || !form.lastname || !form.email || !form.message) {
      setStatus({ type: "error", msg: "Bitte füllen Sie alle Pflichtfelder aus." });
      return;
    }

    setLoading(true);
    try {
      const serviceId = "service_19olr1q";
      const templateId = "template_3zoawk7";
      const publicKey = "H5aCmwT0mqavHzoKJ";

      // ✅ template params - adjust variable names in EmailJS template
      const templateParams = {
        from_name: `${form.firstname} ${form.lastname}`.trim(),
        reply_to: form.email,
        phone: form.phone,
        message: form.message,
        // optional:
        to_name: "Edin Bau", // or whatever you need
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus({ type: "success", msg: "Nachricht erfolgreich gesendet!" });
      setForm({ firstname: "", lastname: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus({ type: "error", msg: "Fehler beim Senden. Bitte versuchen Sie es erneut." });
    } finally {
      setLoading(false);
    }
  };

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        delay: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "20% bottom",
          end: "bottom top",
        },
      });
      timeline.fromTo(".contact_form", { opacity: 0, x: -100 }, { opacity: 1, x: 0 });
      timeline.fromTo(".option", { x: 100, opacity: 0 }, { opacity: 1, stagger: 0.5, x: 0 });
    },
    { scope: container }
  );

  return (
    <section id="contact" ref={container}>
      <div className="container">
        {/* ✅ we just added a <form> wrapper, UI remains the same */}
        <form className="contact_form" onSubmit={handleSubmit}>
          <div className="contact_form_top">
            <h1 className="title">
              <span className="g-text">Verbinden Sie sich mit den Profis!</span>
            </h1>
            <p className="text_muted">
              Vertrauen Sie auf Erfahrung, Präzision und Engagement – wir begleiten Ihr Projekt
              vom ersten Entwurf bis zum letzten Stein.
            </p>
          </div>

          <div className="contact_form_middle">
            <div className="row">
              <input
                type="text"
                placeholder="Vorname"
                name="firstname"
                className="control"
                value={form.firstname}
                onChange={onChange}
                required
              />
              <input
                type="text"
                placeholder="Nachname"
                name="lastname"
                className="control"
                value={form.lastname}
                onChange={onChange}
                required
              />
            </div>

            <div className="row">
              <input
                type="email"
                placeholder="Email Adresse"
                name="email"
                className="control"
                value={form.email}
                onChange={onChange}
                required
              />
              <input
                type="tel"
                placeholder="Telefonnummer"
                name="phone"
                className="control"
                value={form.phone}
                onChange={onChange}
              />
            </div>

            <textarea
              name="message"
              cols={30}
              rows={10}
              placeholder="Message"
              className="control"
              value={form.message}
              onChange={onChange}
              required
            />
          </div>

          {/* status message (does not change UI, just information) */}
          {status.msg && (
            <p className={`text_muted contact_status ${status.type}`}>
              {status.msg}
            </p>
          )}

          <div className="contact_form_bottom">
            <button className="btn btn_primary" type="submit" disabled={loading}>
              {loading ? "Senden..." : "Absenden"}
            </button>
          </div>
        </form>

        <div className="contact_options">
          {contacts.map((contact, index) => (
            <div className="option" key={index}>
              <div className="icon_container">
                <a href={contact.href} target="_blank" rel="noreferrer">
                  {contact.icon}
                </a>
              </div>

              <h3 className="name">{contact.name}</h3>
              <h4 className="text_muted">{contact.value}</h4>

              <div>
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn_primary"
                >
                  {contact.buttonTitle}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

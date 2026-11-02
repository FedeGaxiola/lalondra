import { useRef, useState } from 'react';

function ContactButton({ email }) {
  const [buttonText, setButtonText] = useState('Copiar');
  const mailRef = useRef(null);

  // Si el portapapeles no está disponible, deja el correo seleccionado para copiarlo a mano
  const selectEmail = () => {
    const range = document.createRange();
    range.selectNodeContents(mailRef.current);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    setButtonText('Selecciónalo');
  };

  const handleCopyEmail = () => {
    if (!navigator.clipboard) return selectEmail();
    navigator.clipboard.writeText(email)
      .then(() => {
        setButtonText('Copiado');
        setTimeout(() => setButtonText('Copiar'), 1600);
      })
      .catch(selectEmail);
  };

  return (
    <section className="contact" aria-label="Contacto">
      <span className="k">
        <svg className="k-ico" aria-hidden="true"><use href="#i-mail" /></svg> E-mail · Colaboraciones y prensa
      </span>
      <div className="mail">
        <code ref={mailRef}>{email}</code>
        <button type="button" onClick={handleCopyEmail}>{buttonText}</button>
      </div>
    </section>
  );
}

export default ContactButton;

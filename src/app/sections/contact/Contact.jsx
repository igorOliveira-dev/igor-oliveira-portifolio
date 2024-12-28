import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import S from "./contact.module.css";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className={S.screen}>
      <h1 className={S.title}>Entre em contato</h1>
      <div className={S.contactContainer}>
        <div className={S.contactItem}>
          <h2 className={S.subtitle}>Email:</h2>
          <p>
            <a href="mailto:igor.oliveira.contact2210@gmail.com" className={S.email}>
              igor.oliveira.contact2210@gmail.com
            </a>
          </p>
        </div>
        <div className={S.contactItem}>
          <h2 className={S.subtitle}>Redes Sociais:</h2>
          <div className={S.socialLinks}>
            <Link
              href="https://www.linkedin.com/in/igor-ventura-de-oliveira-6a4645293/"
              target="_blank"
              rel="noopener noreferrer"
              className={S.linkedin}
            >
              <FaLinkedin className={S.icon} /> Linkedin
            </Link>
            <Link
              href="https://www.instagram.com/dev.igoroliveira?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className={S.instagram}
            >
              <FaInstagram className={S.icon} /> Instagram
            </Link>
          </div>
        </div>
      </div>
      <p className={S.tytext}>Obrigado por escolher a opção certa para melhorar a sua presença online!</p>
    </section>
  );
};

export default Contact;

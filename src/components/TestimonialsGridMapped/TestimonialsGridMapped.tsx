import styles from "../TestimonialsGridSectionRegular/TestimonialsGridSectionRegular.module.css";
import { testimonials } from "./testimonialsData";

export default function TestimonialsGridMapped() {
  return (
    <section
      className={styles.TestimonalGrid}
      tabIndex={0}
      role="region"
      aria-label="Testimonials"
    >
      {testimonials.map((t, i) => (
        <article
          key={i}
          className={`${styles.TestimonalCard} ${styles[t.className]}`}
        >
          <div className={styles.PersonInfoGroup}>
            <img className={styles.Portrait} src={t.image} alt={t.alt} />
            <div className={styles.PersonTextGroup}>
              <p className={`${styles.Fullname} TextPresetTwo`}>{t.name}</p>
              <p className={`${styles.VerifiedGraduate} TextPresetFour`}>
                {t.role}
              </p>
            </div>
          </div>
          <p className={`${styles.BoldQoute} TextPresetOne`}>{t.quote}</p>
          <p className={`${styles.LightQoute} TextPresetThree`}>{t.body}</p>
          {t.showQuoteImage && (
            <img
              className={styles.QoutationMark}
              src="/bg-pattern-quotation.svg"
              alt="Qoutation Mark Icon"
              aria-hidden="true"
            />
          )}
        </article>
      ))}
    </section>
  );
}

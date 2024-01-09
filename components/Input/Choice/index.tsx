import styles from "./InputChoice.module.scss";

import { Choice, Option } from "../../../types";

type InputChoiceProps = {
  choice: Choice;
  onAnswer: (answer: string) => void;
};

export default function InputChoice({
  choice: { question, options, color },
  onAnswer,
}: InputChoiceProps) {
  return (
    <section className={styles.choice}>
      <h2 className={styles.choice__question}>{question}</h2>

      <menu className={styles.choice__options}>
        {options &&
          options.map((option) => {
            return (
              <li key={option.value} className={styles.choice__options__option}>
                <button
                  style={{ backgroundColor: color }}
                  onClick={() => onAnswer(option.value)}
                  className={styles.choice__options__option__button}
                >
                  {option.label}
                </button>
              </li>
            );
          })}
      </menu>
    </section>
  );
}

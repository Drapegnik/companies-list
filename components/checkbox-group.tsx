import type { Option } from 'data/core';

interface Props {
  selected: string[];
  setSelected: (selected: string[]) => void;
  options: Option[];
}

export const CheckboxGroup: React.FC<Props> = ({ options, selected, setSelected }) => (
  <ul>
    {options.map(({ id, label }) => {
      const checked = selected.includes(id);
      const htmlId = `checkbox-${id}`;

      return (
        <ul key={id}>
          <input
            type="checkbox"
            id={htmlId}
            name={label}
            value={id}
            checked={checked}
            onChange={() => {
              if (checked) {
                setSelected(selected.filter(el => el !== id));
              } else {
                setSelected(selected.concat(id));
              }
            }}
          />
          <label htmlFor={htmlId}>{label}</label>
        </ul>
      );
    })}
  </ul>
);

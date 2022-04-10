import type { Option } from 'data/core';

interface Props {
  selected: string[];
  setSelected: (selected: string[]) => void;
  options: Option[];
}

export const CheckboxGroup: React.FC<Props> = ({ options, selected, setSelected }) => (
  <div className="flex flex-wrap justify-between">
    {options.map(({ id, label }) => {
      const checked = selected.includes(id);
      const htmlId = `checkbox-${id}`;

      return (
        <label key={id} className="md:w-min inline-flex items-center w-1/2 mt-3 cursor-pointer">
          <input
            className="form-checkbox w-5 h-5 text-blue-600 cursor-pointer"
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
          <span className="-m-2">
            <span className="p-2 ml-2 text-gray-700">{label}</span>
          </span>
        </label>
      );
    })}
  </div>
);

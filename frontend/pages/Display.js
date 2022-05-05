import React, { useState } from 'react';
// // import './Product.css';



// export default function display() {
//   return(
//     <div className="wrapper">
//       <div>
//         Shopping Cart: 0 total items.
//       </div>
//       <div>Total: 0</div>

//       <div className="product"><span role="img" aria-label="ice cream">🍦</span></div>
//       <button>Add</button> 
//       <button>Remove</button>
//     </div>
//   )
// }



import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Check from "@material-ui/icons/Check";


export default function CheckboxExample() {
  const [checked, setChecked] = React.useState([24, 22]);
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const category = useState();
  return (
    <div>
      <div
        className={
          category.checkboxAndRadio + " " + category.checkboxAndRadioHorizontal
        }
      >
        <FormControlLabel
          control={
            <Checkbox
              tabIndex={-1}
              onClick={() => handleToggle(21)}
              checkedIcon={<Check className={category.checkedIcon} />}
              icon={<Check className={category.uncheckedIcon} />}
              category={{
                checked: category.checked,
                root: category.checkRoot
              }}
            />
          }
          category={{ label: category.label }}
          label="Unchecked"
        />
      </div>
      <div
        className={
          category.checkboxAndRadio + " " + category.checkboxAndRadioHorizontal
        }
      >
        <FormControlLabel
          control={
            <Checkbox
              tabIndex={-1}
              onClick={() => handleToggle(22)}
              checked={checked.indexOf(22) !== -1 ? true : false}
              checkedIcon={<Check className={category.checkedIcon} />}
              icon={<Check className={category.uncheckedIcon} />}
              category={{
                checked: category.checked,
                root: category.checkRoot
              }}
            />
          }
          category={{ label: category.label }}
          label="Checked"
        />
      </div>
      <div
        className={
          category.checkboxAndRadio + " " + category.checkboxAndRadioHorizontal
        }
      >
        <FormControlLabel
          disabled
          control={
            <Checkbox
              tabIndex={-1}
              checkedIcon={<Check className={category.checkedIcon} />}
              icon={<Check className={category.uncheckedIcon} />}
              category={{
                checked: category.checked,
                root: category.checkRoot
              }}
            />
          }
          category={{
            label: category.label,
            disabled: category.disabledCheckboxAndRadio
          }}
          label="Disabled Unchecked"
        />
      </div>
      <div
        className={
          category.checkboxAndRadio + " " + category.checkboxAndRadioHorizontal
        }
      >
        <FormControlLabel
          disabled
          control={
            <Checkbox
              tabIndex={-1}
              checked={checked.indexOf(24) !== -1 ? true : false}
              checkedIcon={<Check className={category.checkedIcon} />}
              icon={<Check className={category.uncheckedIcon} />}
              category={{
                checked: category.checked,
                root: category.checkRoot
              }}
            />
          }
          category={{
            label: category.label,
            disabled: category.disabledCheckboxAndRadio
          }}
          label="Disabled Checked"
        />
      </div>
    </div>
  );
}
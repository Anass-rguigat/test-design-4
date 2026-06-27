import { Autocomplete, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { motion } from 'framer-motion';

const AutocompleteField = ({ name, control, label, options = [], index = 0, disabled = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05, duration: 0.35 }}
  >
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          options={options}
          value={field.value || null}
          onChange={(_, newValue) => field.onChange(newValue || '')}
          disabled={disabled}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              error={!!error}
              helperText={error?.message}
              aria-invalid={!!error}
            />
          )}
          isOptionEqualToValue={(option, value) => option === value}
          noOptionsText="Aucune option"
        />
      )}
    />
  </motion.div>
);

export default AutocompleteField;

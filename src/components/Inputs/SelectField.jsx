import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import { Controller } from 'react-hook-form';
import { motion } from 'framer-motion';

const SelectField = ({ name, control, label, options = [], index = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05, duration: 0.35 }}
  >
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl fullWidth error={!!error}>
          <InputLabel id={`${name}-label`}>{label}</InputLabel>
          <Select
            {...field}
            labelId={`${name}-label`}
            label={label}
            value={field.value ?? ''}
            aria-invalid={!!error}
            aria-describedby={error ? `${name}-error` : undefined}
          >
            {options.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </Select>
          {error && <FormHelperText id={`${name}-error`}>{error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  </motion.div>
);

export default SelectField;

import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { motion } from 'framer-motion';

const InputField = ({
  name,
  control,
  label,
  type = 'text',
  placeholder,
  index = 0,
  min,
  max,
  step,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05, duration: 0.35 }}
  >
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          type={type}
          label={label}
          placeholder={placeholder}
          error={!!error}
          helperText={error?.message}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
          value={field.value ?? ''}
          slotProps={{
            htmlInput: { min, max, step },
          }}
          onChange={(e) => {
            if (type === 'number') {
              const val = e.target.value;
              field.onChange(val === '' ? '' : Number(val));
            } else {
              field.onChange(e.target.value);
            }
          }}
        />
      )}
    />
  </motion.div>
);

export default InputField;

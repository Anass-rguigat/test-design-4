import { InputAdornment, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { motion } from 'framer-motion';
import { colors } from '../../theme/constants';

const CurrencyInput = ({ name, control, label, currency = 'DH', index = 0 }) => (
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
          label={label}
          type="number"
          error={!!error}
          helperText={error?.message}
          aria-invalid={!!error}
          value={field.value ?? ''}
          onChange={(e) => {
            const val = e.target.value;
            field.onChange(val === '' ? '' : Number(val));
          }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <span style={{ color: colors.textSecondary, fontWeight: 600 }}>{currency}</span>
                </InputAdornment>
              ),
            },
            htmlInput: { min: 0, step: 1000 },
          }}
        />
      )}
    />
  </motion.div>
);

export default CurrencyInput;

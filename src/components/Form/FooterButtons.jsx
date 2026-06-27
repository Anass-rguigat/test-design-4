import { Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi2';

const FooterButtons = ({ onPrevious, onNext, isValid, isFirstStep = true, isSubmitting = false }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 2,
      flexWrap: 'wrap',
    }}
  >
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Button
        variant="outlined"
        onClick={onPrevious}
        disabled={isFirstStep}
        startIcon={<HiOutlineArrowLeft size={18} />}
        aria-label="Étape précédente"
        sx={{ minWidth: 140 }}
      >
        Précédent
      </Button>
    </motion.div>

    <motion.div whileHover={isValid ? { scale: 1.02 } : {}} whileTap={isValid ? { scale: 0.98 } : {}}>
      <Button
        variant="contained"
        onClick={onNext}
        disabled={!isValid || isSubmitting}
        endIcon={<HiOutlineArrowRight size={18} />}
        aria-label="Passer à l'étape suivante"
        sx={{ minWidth: 160 }}
      >
        {isSubmitting ? 'Envoi...' : 'Étape suivante'}
      </Button>
    </motion.div>
  </Box>
);

export default FooterButtons;

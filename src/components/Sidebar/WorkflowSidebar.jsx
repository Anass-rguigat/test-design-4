import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import WorkflowStep from './WorkflowStep';
import HorizontalStepper from '../Progress/HorizontalStepper';
import { colors, layout, shadows } from '../../theme/constants';

const WorkflowSidebar = ({ steps, currentStepId, onStepClick }) => (
  <>
    <HorizontalStepper steps={steps} currentStepId={currentStepId} onStepClick={onStepClick} />

    <Box
      sx={{
        display: { xs: 'none', md: 'block' },
        backgroundColor: colors.card,
        borderRadius: `${layout.radius}px`,
        border: `1px solid ${colors.border}`,
        boxShadow: shadows.soft,
        p: 3,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Typography
          variant="overline"
          sx={{
            color: colors.textSecondary,
            fontWeight: 600,
            letterSpacing: '0.1em',
            display: 'block',
            mb: 2,
          }}
        >
          Votre parcours
        </Typography>
      </motion.div>

      <Box role="list" aria-label="Étapes du workflow">
        {steps.map((step, index) => (
          <Box key={step.id} role="listitem">
            <WorkflowStep
              step={step}
              index={index}
              isLast={index === steps.length - 1}
              isSelected={step.id === currentStepId}
              onClick={() => onStepClick?.(step.id)}
            />
          </Box>
        ))}
      </Box>
    </Box>
  </>
);

export default WorkflowSidebar;

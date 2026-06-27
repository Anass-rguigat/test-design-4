import { useMemo } from 'react';
import { WORKFLOW_STEPS, STEP_STATUS } from '../utils/constants';

/**
 * All steps are always accessible — selected step is highlighted, others are neutral.
 */
const useWorkflowSteps = (selectedStepId = 1) => {
  const steps = useMemo(
    () =>
      WORKFLOW_STEPS.map((step) => ({
        ...step,
        status: step.id === selectedStepId ? STEP_STATUS.CURRENT : STEP_STATUS.TODO,
      })),
    [selectedStepId],
  );

  const currentStep = steps.find((s) => s.id === selectedStepId) || steps[0];

  return { steps, currentStep };
};

export default useWorkflowSteps;

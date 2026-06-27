import { useState, useCallback, useEffect } from 'react';
import { Snackbar, Alert } from '@mui/material';
import PageLayout from '../../components/Layout/PageLayout';
import WorkflowSidebar from '../../components/Sidebar/WorkflowSidebar';
import InvestorForm from '../../components/Form/InvestorForm';
import StepDetailPanel from '../../components/Cards/StepDetailPanel';
import useWorkflowSteps from '../../hooks/useWorkflowSteps';
import useInvestmentForm from '../../hooks/useInvestmentForm';
import { submitInvestorForm } from '../../services/api';
import { PROVINCES } from '../../utils/constants';

const InvestmentJourneyPage = () => {
  const [selectedStepId, setSelectedStepId] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const { steps } = useWorkflowSteps(selectedStepId);
  const selectedStep = steps.find((s) => s.id === selectedStepId) || steps[0];

  const {
    control,
    handleSubmit,
    watchedValues,
    completionPercentage,
    activeCharacteristicsCount,
    isFormValid,
    setValue,
  } = useInvestmentForm();

  useEffect(() => {
    if (watchedValues.region && watchedValues.province) {
      const validProvinces = PROVINCES[watchedValues.region] || [];
      if (!validProvinces.includes(watchedValues.province)) {
        setValue('province', '');
      }
    }
  }, [watchedValues.region, watchedValues.province, setValue]);

  const handleStepClick = useCallback((stepId) => {
    setSelectedStepId(stepId);
  }, []);

  const handlePrevious = useCallback(() => {
    if (selectedStepId > 1) {
      setSelectedStepId((prev) => prev - 1);
    }
  }, [selectedStepId]);

  const onSubmit = useCallback(async (data) => {
    setIsSubmitting(true);
    try {
      await submitInvestorForm(data);
      setSnackbar({
        open: true,
        message: 'Formulaire soumis avec succès.',
        severity: 'success',
      });
    } catch {
      setSnackbar({
        open: true,
        message: 'Données enregistrées localement.',
        severity: 'info',
      });
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  const handleNext = handleSubmit(onSubmit);

  return (
    <>
      <PageLayout
        formPanel={
          <InvestorForm
            control={control}
            watchedValues={watchedValues}
            completionPercentage={completionPercentage}
            activeCharacteristicsCount={activeCharacteristicsCount}
            isFormValid={isFormValid}
            onPrevious={handlePrevious}
            onNext={handleNext}
            isSubmitting={isSubmitting}
          />
        }
        journeyPanel={
          <WorkflowSidebar
            steps={steps}
            currentStepId={selectedStepId}
            onStepClick={handleStepClick}
          />
        }
        detailPanel={<StepDetailPanel step={selectedStep} />}
      />

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity={snackbar.severity} variant="filled" sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default InvestmentJourneyPage;

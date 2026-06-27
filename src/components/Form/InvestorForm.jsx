import { useMemo } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { HiOutlineUserGroup, HiOutlineCog6Tooth, HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import SectionTitle from './SectionTitle';
import InputField from '../Inputs/InputField';
import SelectField from '../Inputs/SelectField';
import AutocompleteField from '../Inputs/AutocompleteField';
import CurrencyInput from '../Inputs/CurrencyInput';
import SwitchCard from '../Cards/SwitchCard';
import SummaryCard from '../Cards/SummaryCard';
import FooterButtons from './FooterButtons';
import {
  INVESTOR_TYPES,
  COMPANY_TYPES,
  PROJECT_TYPES,
  NATIONALITIES,
  REGIONS,
  PROVINCES,
  SECTORS,
  PROJECT_CHARACTERISTICS,
} from '../../utils/constants';
import { colors, layout, shadows } from '../../theme/constants';

const InvestorForm = ({
  control,
  watchedValues,
  completionPercentage,
  activeCharacteristicsCount,
  isFormValid,
  onPrevious,
  onNext,
  isSubmitting,
}) => {
  const provinceOptions = useMemo(() => {
    if (!watchedValues.region) return [];
    return PROVINCES[watchedValues.region] || [];
  }, [watchedValues.region]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Box
        component="section"
        sx={{
          backgroundColor: colors.card,
          borderRadius: `${layout.radius}px`,
          border: `1px solid ${colors.border}`,
          boxShadow: shadows.soft,
          p: { xs: 3, md: 3.5 },
        }}
      >
        {/* Form Header */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 4 }}>
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: `${layout.radiusSm}px`,
              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: shadows.hover,
              flexShrink: 0,
            }}
            aria-hidden="true"
          >
            <HiOutlineClipboardDocumentList size={28} color="#fff" />
          </Box>
          <Box>
            <Typography
              variant="overline"
              sx={{ color: colors.textSecondary, fontWeight: 600, letterSpacing: '0.08em' }}
            >
              4. Données Saisies par l&apos;Investisseur
            </Typography>
            <Typography variant="h5" component="h2" sx={{ color: colors.text, fontWeight: 700, mt: 0.5 }}>
              Formulaire investisseur
            </Typography>
            <Typography variant="body2" sx={{ color: colors.textSecondary, mt: 0.5 }}>
              {PROJECT_CHARACTERISTICS.length + 9} variables d&apos;entrée
            </Typography>
          </Box>
        </Box>

        <Box component="form" noValidate aria-label="Formulaire investisseur">
          {/* Section 1 — Informations Générales */}
          <Box component="fieldset" sx={{ border: 'none', p: 0, m: 0, mb: 4 }}>
            <SectionTitle
              icon={HiOutlineUserGroup}
              title="Informations Générales"
              iconColor={colors.primary}
              index={0}
            />
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <SelectField
                  name="investorType"
                  control={control}
                  label="Type d'investisseur"
                  options={INVESTOR_TYPES}
                  index={0}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <AutocompleteField
                  name="nationality"
                  control={control}
                  label="Nationalité"
                  options={NATIONALITIES}
                  index={1}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <SelectField
                  name="companyType"
                  control={control}
                  label="Type de société"
                  options={COMPANY_TYPES}
                  index={2}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <AutocompleteField
                  name="region"
                  control={control}
                  label="Région"
                  options={REGIONS}
                  index={3}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <AutocompleteField
                  name="province"
                  control={control}
                  label="Province"
                  options={provinceOptions}
                  disabled={!watchedValues.region}
                  index={4}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <AutocompleteField
                  name="sector"
                  control={control}
                  label="Secteur"
                  options={SECTORS}
                  index={5}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <SelectField
                  name="projectType"
                  control={control}
                  label="Type de projet"
                  options={PROJECT_TYPES}
                  index={6}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <CurrencyInput name="budget" control={control} label="Budget" index={7} />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <InputField
                  name="employeesNumber"
                  control={control}
                  label="Nombre d'employés"
                  type="number"
                  index={8}
                  min={1}
                />
              </Grid>
            </Grid>
          </Box>

          {/* Section 2 — Caractéristiques du Projet */}
          <Box component="fieldset" sx={{ border: 'none', p: 0, m: 0, mb: 4 }}>
            <SectionTitle
              icon={HiOutlineCog6Tooth}
              title="Caractéristiques du Projet"
              iconColor={colors.primaryDark}
              index={1}
            />
            <Grid container spacing={1.5}>
              {PROJECT_CHARACTERISTICS.map((char, index) => (
                <Grid key={char.key} size={{ xs: 12, sm: 6 }}>
                  <SwitchCard
                    name={char.key}
                    control={control}
                    label={char.label}
                    iconKey={char.icon}
                    index={index}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Section 3 — Résumé */}
          <Box component="fieldset" sx={{ border: 'none', p: 0, m: 0, mb: 3 }}>
            <SummaryCard
              values={watchedValues}
              completionPercentage={completionPercentage}
              activeCharacteristicsCount={activeCharacteristicsCount}
            />
          </Box>
        </Box>

        <Box
          sx={{
            pt: 3,
            borderTop: `1px solid ${colors.border}`,
            position: 'sticky',
            bottom: 0,
            backgroundColor: colors.card,
            zIndex: 10,
          }}
        >
          <FooterButtons
            onPrevious={onPrevious}
            onNext={onNext}
            isValid={isFormValid}
            isFirstStep
            isSubmitting={isSubmitting}
          />
        </Box>
      </Box>
    </motion.div>
  );
};

export default InvestorForm;

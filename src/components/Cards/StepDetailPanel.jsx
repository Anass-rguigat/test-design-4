import { Box, Typography, Divider, Link } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiOutlineClock,
  HiOutlineBanknotes,
  HiOutlineBuildingOffice2,
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineGlobeAlt,
  HiOutlineFlag,
  HiOutlineDocumentText,
  HiOutlineDocumentCheck,
  HiOutlineArrowRightCircle,
} from 'react-icons/hi2';
import { colors, layout, shadows } from '../../theme/constants';
import { STEP_DETAILS } from '../../utils/stepDetails';

const InfoRow = ({ icon: Icon, label, value, href }) => (
  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, py: 1 }}>
    <Box
      sx={{
        width: 32,
        height: 32,
        borderRadius: '8px',
        backgroundColor: colors.primaryMutedLight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        mt: 0.25,
      }}
      aria-hidden="true"
    >
      <Icon size={16} color={colors.primary} />
    </Box>
    <Box sx={{ minWidth: 0 }}>
      <Typography variant="caption" sx={{ color: colors.textSecondary, fontWeight: 500, display: 'block' }}>
        {label}
      </Typography>
      {href ? (
        <Link href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer" variant="body2" sx={{ fontWeight: 500 }}>
          {value}
        </Link>
      ) : (
        <Typography variant="body2" sx={{ color: colors.text, fontWeight: 500 }}>
          {value}
        </Typography>
      )}
    </Box>
  </Box>
);

const DocList = ({ title, icon: Icon, items, iconColor }) => (
  <Box sx={{ mb: 2.5 }}>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
      <Icon size={18} color={iconColor} aria-hidden="true" />
      <Typography variant="subtitle2" sx={{ fontWeight: 600, color: colors.text }}>
        {title}
      </Typography>
    </Box>
    <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
      {items.map((doc) => (
        <Typography component="li" key={doc} variant="body2" sx={{ color: colors.textSecondary, mb: 0.5 }}>
          {doc}
        </Typography>
      ))}
    </Box>
  </Box>
);

const StepDetailPanel = ({ step }) => {
  const details = STEP_DETAILS[step.key];

  if (!details) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.35 }}
      >
        <Box
          component="section"
          aria-label={`Informations étape ${step.id}: ${step.title}`}
          sx={{
            backgroundColor: colors.card,
            borderRadius: `${layout.radius}px`,
            border: `1px solid ${colors.border}`,
            boxShadow: shadows.soft,
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <Box
            sx={{
              p: 3,
              background: `linear-gradient(135deg, ${colors.primaryMuted} 0%, ${colors.primaryMutedLight} 100%)`,
              borderBottom: `1px solid ${colors.border}`,
            }}
          >
            <Typography variant="overline" sx={{ color: colors.textSecondary, fontWeight: 600, letterSpacing: '0.08em' }}>
              Étape {step.id}
            </Typography>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 700, color: colors.text, mt: 0.5 }}>
              {step.title}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 600, color: colors.primary, mt: 1, fontSize: '1rem' }}>
              {details.procedureTitle}
            </Typography>
          </Box>

          <Box sx={{ p: 3 }}>
            {/* Duration & Cost */}
            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
              <Box
                sx={{
                  flex: 1,
                  p: 2,
                  borderRadius: `${layout.radiusSm}px`,
                  backgroundColor: colors.background,
                  border: `1px solid ${colors.border}`,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                  <HiOutlineClock size={16} color={colors.primary} aria-hidden="true" />
                  <Typography variant="caption" sx={{ color: colors.textSecondary, fontWeight: 600 }}>
                    Durée estimée
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ fontWeight: 700, color: colors.text }}>
                  {details.estimatedDuration}
                </Typography>
              </Box>
              <Box
                sx={{
                  flex: 1,
                  p: 2,
                  borderRadius: `${layout.radiusSm}px`,
                  backgroundColor: colors.background,
                  border: `1px solid ${colors.border}`,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                  <HiOutlineBanknotes size={16} color={colors.success} aria-hidden="true" />
                  <Typography variant="caption" sx={{ color: colors.textSecondary, fontWeight: 600 }}>
                    Coût estimé
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ fontWeight: 700, color: colors.text }}>
                  {details.estimatedCost}
                </Typography>
              </Box>
            </Box>

            {/* Organism */}
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                <HiOutlineBuildingOffice2 size={18} color={colors.primary} aria-hidden="true" />
                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: colors.text }}>
                  Organisme
                </Typography>
              </Box>
              <Box
                sx={{
                  p: 2,
                  borderRadius: `${layout.radiusSm}px`,
                  backgroundColor: colors.background,
                  border: `1px solid ${colors.border}`,
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 700, color: colors.text, mb: 1 }}>
                  {details.organism.name}
                </Typography>
                <InfoRow icon={HiOutlineMapPin} label="Adresse" value={details.organism.address} />
                <InfoRow icon={HiOutlinePhone} label="Téléphone" value={details.organism.phone} />
                <InfoRow icon={HiOutlineEnvelope} label="Email" value={details.organism.email} href={`mailto:${details.organism.email}`} />
                <InfoRow icon={HiOutlineGlobeAlt} label="Site web" value={details.organism.website} href={`https://${details.organism.website}`} />
              </Box>
            </Box>

            <Divider sx={{ mb: 2.5, borderColor: colors.border }} />

            {/* Objective */}
            <Box sx={{ mb: 2.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <HiOutlineFlag size={18} color={colors.primaryDark} aria-hidden="true" />
                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: colors.text }}>
                  Objectif
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: colors.textSecondary, lineHeight: 1.7 }}>
                {details.objective}
              </Typography>
            </Box>

            <DocList title="Documents requis" icon={HiOutlineDocumentText} items={details.requiredDocuments} iconColor="#EF4444" />
            <DocList title="Documents générés" icon={HiOutlineDocumentCheck} items={details.generatedDocuments} iconColor={colors.success} />

            {/* Subsequent use */}
            <Box
              sx={{
                p: 2,
                borderRadius: `${layout.radiusSm}px`,
                background: `linear-gradient(135deg, ${colors.primaryMuted} 0%, ${colors.primaryMutedLight} 100%)`,
                border: `1px solid ${colors.primaryBorderStrong}`,
                display: 'flex',
                alignItems: 'flex-start',
                gap: 1.5,
              }}
            >
              <HiOutlineArrowRightCircle size={20} color={colors.primary} style={{ flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
              <Box>
                <Typography variant="caption" sx={{ color: colors.textSecondary, fontWeight: 600, display: 'block' }}>
                  Utilisation ultérieure
                </Typography>
                <Typography variant="body2" sx={{ color: colors.text, fontWeight: 600, mt: 0.25 }}>
                  {details.subsequentUse}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </AnimatePresence>
  );
};

export default StepDetailPanel;

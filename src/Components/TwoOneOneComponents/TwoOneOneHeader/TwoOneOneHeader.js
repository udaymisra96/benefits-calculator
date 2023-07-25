import { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { AppBar, MenuItem, Select, Modal, Link, IconButton } from '@mui/material';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Context } from '../../Wrapper/Wrapper';
import twoOneOneMFBLogo from '../../../Assets/twoOneOneMFBLogo.png';
import twoOneOneLinks from '../../../Assets/twoOneOneLinks';
import LanguageIcon from '@mui/icons-material/Language';
import ShareIcon from '@mui/icons-material/Share';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import MenuIcon from '@mui/icons-material/Menu';
import Share from '../../Share/Share';
import EmailResults from '../../EmailResults/EmailResults';
import './TwoOneOneHeader.css';

const TwoOneOneHeader = ({ handleTextfieldChange }) => {
  //this is so that when the users click on the cobranded logo, they're navigated back to step-0
  const context = useContext(Context);
  const { formData } = context;
  const { urlSearchParams } = formData;

  //this is for the results icon to conditionally show up
  const location = useLocation();
  const urlRegex = /^\/(?:\/results\/(.+)|(.+)\/results)\/?$/;
  const url = location.pathname.match(urlRegex);
  const isResults = url !== null;
  const screenUUID = url ? url[2] ?? url[1] : undefined;

  const [openShare, setOpenShare] = useState(false);
  const [openEmailResults, setOpenEmailResults] = useState(false);
  const [isLanguageSelectOpen, setIsLanguageSelectOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenShare = () => {
    setOpenShare(true);
  };

  const handleCloseShare = () => {
    setOpenShare(false);
  };

  const handleOpenEmailResults = () => {
    setOpenEmailResults(true);
  };

  const handleCloseEmailResults = () => {
    setOpenEmailResults(false);
  };

  const handleCloseLanguage = () => {
    setIsLanguageSelectOpen(false);
  };

  const handleOpenLanguage = () => {
    setIsLanguageSelectOpen(true);
  };

  const handleLanguageChange = (event) => {
    context.selectLanguage(event);
  };

  const setRenderValue = () => {
    const currentLocale = context.locale;
    switch (currentLocale) {
      case 'en-US':
        return 'EN';
      case 'es':
        return 'ES';
      case 'vi':
        return 'VI';
      default:
        return 'EN';
    }
  };

  const create211Links = () => {
    const mappedLinks = twoOneOneLinks.map((link, index) => {
      return (
        <Link
          href={link.href}
          underline="none"
          target="_blank"
          rel="noreferrer"
          aria-label={link.ariaLabel}
          className="twoOneOneMenuLink"
          key={link.defaultMsg + index}
        >
          <FormattedMessage id={link.formattedMsgId} defaultMessage={link.name} />
        </Link>
      );
    });

    return mappedLinks;
  };

  const displayHamburgerMenuIcon = () => {
    return (
      <IconButton edge="end" color="primary" aria-label="open menu" onClick={handleOpenMenu}>
        <MenuIcon />
      </IconButton>
    );
  };
  return (
    <nav>
      <AppBar position="sticky" id="nav-container" sx={{ backgroundColor: '#FFFFFF', padding: '0 1rem' }}>
        <Box>
          <a href={`/step-0${urlSearchParams}`}>
            <img src={twoOneOneMFBLogo} alt="211 and my friend ben home page button" className="cobranded-logo" />
          </a>
        </Box>
        <Stack direction="row">
          <Stack direction="row" gap="1rem" alignItems="center">
            {create211Links()}
          </Stack>
          <Stack direction="row" sx={{ marginLeft: '3rem' }}>
            <Select
              labelId="select-language-label"
              id="twoOneOne-select-language"
              value={context.locale}
              label="Language"
              onChange={handleLanguageChange}
              aria-label="select a language"
              variant="standard"
              disableUnderline={true}
              open={isLanguageSelectOpen}
              onOpen={handleOpenLanguage}
              onClose={handleCloseLanguage}
              IconComponent={LanguageIcon}
              renderValue={() => setRenderValue()}
              sx={{ '& .MuiSvgIcon-root': { right: '1.25rem', color: '#005191' } }}
            >
              <MenuItem value="en-US" sx={{ color: '#005191' }}>
                English
              </MenuItem>
              <MenuItem value="es" sx={{ color: '#005191' }}>
                Español
              </MenuItem>
              <MenuItem value="vi" sx={{ color: '#005191' }}>
                Tiếng Việt
              </MenuItem>
            </Select>
            <IconButton color="primary" onClick={handleOpenShare} aria-label="share button">
              <ShareIcon role="img" />
            </IconButton>
            {isResults && (
              <IconButton onClick={handleOpenEmailResults} aria-label="email results button" color="primary">
                <SaveAltIcon role="img" />
              </IconButton>
            )}
            {displayHamburgerMenuIcon()}
          </Stack>
          <Modal open={openShare} onClose={handleCloseShare} aria-labelledby="share-my-friend-ben-modal">
            <Share close={handleCloseShare} id="share-my-friend-ben-modal" />
          </Modal>
          <Modal open={openEmailResults} onClose={handleCloseEmailResults} aria-labelledby="email-results-modal">
            <EmailResults
              handleTextfieldChange={handleTextfieldChange}
              screenId={screenUUID}
              close={handleCloseEmailResults}
              id="email-results-modal"
            />
          </Modal>
        </Stack>
      </AppBar>
    </nav>
  );
};

export default TwoOneOneHeader;
